import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Black and White Chatbot Logo - Two Overlapping Speech Bubbles
const ChatbotIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Speech Bubble - Pure Black with White AI text */}
    <path
      d="M3 9c0-1.5 1.2-2.7 2.7-2.7h7.3c1.5 0 2.7 1.2 2.7 2.7v5.3c0 1.5-1.2 2.7-2.7 2.7H7.7l-3.3 3.3v-3.3H5.7c-1.5 0-2.7-1.2-2.7-2.7V9z"
      fill="#000000"
    />
    <text
      x="7"
      y="13"
      fontSize="5"
      fontWeight="700"
      fill="#FFFFFF"
      fontFamily="Arial, sans-serif"
      textAnchor="middle"
    >
      AI
    </text>
    
    {/* Right Speech Bubble - Pure White with Black outline and lines */}
    <path
      d="M13 3c1.5 0 2.7 1.2 2.7 2.7v4c0 1.5-1.2 2.7-2.7 2.7h-2.3l-2.7 2.7v-2.7H6.7c-1.5 0-2.7-1.2-2.7-2.7V5.7C4 4.2 5.2 3 6.7 3H13z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="1"
    />
    {/* Three horizontal black lines of varying lengths */}
    <line x1="9" y1="6.5" x2="14" y2="6.5" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="9" y1="8" x2="13" y2="8" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="9" y1="9.5" x2="12" y2="9.5" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const COHERE_API_KEY = 'IPq1jjwrM7HjXplgJPayWEgCq7DbUBW9jieWz1jE';
const COHERE_API_URL = 'https://api.cohere.ai/v1/chat';

/**
 * Portfolio Chatbot Component with Cohere AI
 */
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I'm ${portfolioData.name}'s portfolio assistant. I can help you learn about ${portfolioData.name.split(' ')[0]}'s skills, projects, experience, education, and more. What would you like to know?`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Create portfolio knowledge base
  const getPortfolioContext = (): string => {
    const skills = portfolioData.skills.map(s => s.name).join(', ');
    const projects = portfolioData.projects.map(p => 
      `${p.title}: ${p.description}. Technologies: ${p.technologies.join(', ')}`
    ).join('\n\n');
    const education = portfolioData.education.map(e => 
      `${e.degree} in ${e.field} from ${e.institution} (${e.year}). ${e.details?.join(', ')}`
    ).join('\n\n');
    const experience = portfolioData.experience.map(e => 
      `${e.position || e.domain} at ${e.company} for ${e.duration}`
    ).join('\n\n');
    const achievements = portfolioData.achievements.map(a => 
      `${a.title}: ${a.count} ${a.description}`
    ).join('\n\n');

    return `
PORTFOLIO INFORMATION FOR ${portfolioData.name.toUpperCase()}:

PROFESSION: ${portfolioData.profession}

SKILLS:
${skills}

PROJECTS:
${projects}

EDUCATION:
${education}

EXPERIENCE:
${experience}

ACHIEVEMENTS:
${achievements}

CONTACT INFORMATION:
- Email: ${portfolioData.email}
- Phone: ${portfolioData.phone}
- LinkedIn: ${portfolioData.linkedinUrl}
- GitHub: ${portfolioData.githubUrl}

When answering questions:
1. Use the portfolio information above to answer questions about ${portfolioData.name.split(' ')[0]}, their skills, projects, education, experience, and achievements.
2. Be friendly, professional, and concise.
3. If asked about something not in the portfolio, provide a helpful general response.
4. Always refer to the person as ${portfolioData.name.split(' ')[0]} or ${portfolioData.name}.
`;
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      // Scroll to bottom when chat opens
      setTimeout(() => scrollToBottom(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare conversation history in Cohere format
      const chatHistory = messages.slice(0, -1).map(msg => ({
        role: msg.role === 'user' ? 'USER' : 'CHATBOT',
        message: msg.content
      }));

      const portfolioContext = getPortfolioContext();
      const systemPrompt = `You are a helpful portfolio assistant for ${portfolioData.name}. You help visitors learn about ${portfolioData.name.split(' ')[0]}'s professional background, skills, projects, and experience. Be friendly, concise, and professional. Use the portfolio context provided below to answer questions accurately. If asked about something not in the portfolio, provide a helpful general response.

${portfolioContext}`;

      // Try different models in order of preference
      const modelsToTry = ['command-r', 'command-r-plus', 'command-r7b-12-2024'];
      let lastError: any = null;
      let response: Response | null = null;
      let data: any = null;

      for (const model of modelsToTry) {
        try {
          const requestBody = {
            model: model,
            message: userMessage.content,
            chat_history: chatHistory,
            preamble: systemPrompt,
            temperature: 0.7,
            max_tokens: 500
          };

          console.log(`Trying model: ${model}`, requestBody);

          response = await fetch(COHERE_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${COHERE_API_KEY}`,
              'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });

          console.log(`Response status for ${model}:`, response.status, response.statusText);

          if (response.ok) {
            data = await response.json();
            console.log(`Success with model ${model}:`, data);
            break; // Success, exit loop
          } else {
            const errorText = await response.text();
            let errorData;
            try {
              errorData = JSON.parse(errorText);
            } catch {
              errorData = { message: errorText };
            }
            console.warn(`Model ${model} failed:`, errorData);
            lastError = { status: response.status, data: errorData };
            // Continue to next model
          }
        } catch (err) {
          console.warn(`Error with model ${model}:`, err);
          lastError = err;
          // Continue to next model
        }
      }

      if (!response || !response.ok || !data) {
        throw new Error(`All models failed. Last error: ${JSON.stringify(lastError)}`);
      }

      console.log('Cohere API response:', data);
      
      // Handle Cohere API response format - the text is usually in data.text
      let responseText = '';
      
      // Primary location for chat API response
      if (data.text) {
        responseText = data.text;
      } 
      // Alternative locations
      else if (data.message) {
        responseText = typeof data.message === 'string' ? data.message : (data.message.content || data.message.text || '');
      } 
      else if (data.content) {
        responseText = data.content;
      } 
      else if (data.response?.text) {
        responseText = data.response.text;
      } 
      // For generate API format (if chat doesn't work)
      else if (data.generations && Array.isArray(data.generations) && data.generations.length > 0) {
        responseText = data.generations[0].text || '';
      }
      // Check for any nested text
      else if (data.chat_response?.text) {
        responseText = data.chat_response.text;
      }
      else {
        console.error('Unexpected response format:', data);
        // Try to extract any text from the response
        responseText = JSON.stringify(data).substring(0, 200);
      }
      
      if (!responseText || responseText.trim() === '') {
        responseText = 'I apologize, but I received an empty response. Please try again.';
      }
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: responseText
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Chatbot error:', error);
      const errorDetails = error?.message || 'Unknown error';
      const errorMessage: Message = {
        role: 'assistant',
        content: `I apologize, but I encountered an error: ${errorDetails}. Please check the browser console for more details or try again later.`
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button - Black and White Theme */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 sm:bottom-6 sm:right-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Main Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 bg-white border-2 border-black rounded-2xl shadow-lg flex items-center justify-center group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open chatbot"
        >
          {/* Icon */}
          <div className="relative z-10">
            {isOpen ? (
              <FaTimes className="text-2xl text-black" />
            ) : (
              <ChatbotIcon className="w-8 h-8" />
            )}
          </div>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] sm:max-w-md bg-white rounded-2xl shadow-2xl z-50 flex flex-col border-2 border-black"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-black text-white p-4 rounded-t-2xl flex items-center justify-between border-b-2 border-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border-2 border-black shadow-lg">
                  <ChatbotIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Portfolio Assistant</h3>
                  <p className="text-xs text-gray-300">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* Messages */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4 h-96 bg-white chat-messages-scroll"
              style={{ 
                scrollBehavior: 'smooth',
                maxHeight: '384px',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'thin',
                scrollbarColor: '#000000 #ffffff'
              }}
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white">
                      <ChatbotIcon className="w-5 h-5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-black text-white'
                        : 'bg-white text-black border-2 border-black'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                    <div className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-black text-sm" />
                    </div>
                  )}
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center border-2 border-white">
                    <ChatbotIcon className="w-5 h-5" />
                  </div>
                  <div className="bg-white border-2 border-black rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t-2 border-black bg-white rounded-b-2xl">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, projects, experience..."
                  className="flex-1 px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors border-2 border-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane className="text-sm" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

