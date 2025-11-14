// Portfolio data constants
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveLink?: string;
  githubLink?: string;
  videoLink?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  year: string;
  image?: string;
  details?: string[];
  certificateLink?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  count?: number;
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  domain: string;
  duration: string;
  position?: string;
}

export const portfolioData = {
  name: 'Sabareeshwaran',
  profession: 'AI Developer • SAP Developer • Prompt Engineer',
  githubUrl: 'https://github.com/Sabareeshmasi',
  linkedinUrl: 'https://www.linkedin.com/in/sabareeshwaran-m-108347306',
  email: 'sapsabareesh25@gmail.com',
  phone: '9025553932',
  profileImage: '/profile.jpg', // Placeholder - user should add their image
  
  skills: [
    { name: 'Python', level: 95 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'SAP ABAP', level: 75 },
    { name: 'SAP BTP', level: 75 },
    { name: 'SAP BAS', level: 70 },
    { name: 'PyTorch', level: 85 },
    { name: 'TensorFlow', level: 80 },
    { name: 'LangChain', level: 92 },
    { name: 'LangGraph', level: 90 },
    { name: 'AutoGen', level: 88 },
    { name: 'CrewAI', level: 85 },
    { name: 'OpenAI API', level: 90 },
    { name: 'RAG Pipelines', level: 93 },
    { name: 'Multi-agent Systems', level: 90 },
    { name: 'Prompt Engineering', level: 95 },
    { name: 'Qdrant', level: 80 },
    { name: 'Pinecone', level: 82 },
    { name: 'Weaviate', level: 77 },
    { name: 'Cohere AI', level: 78 },
    { name: 'LlamaIndex', level: 78 },
    { name: 'BabyAGI', level: 75 },
    { name: 'n8n', level: 70 },
    { name: 'REST APIs', level: 85 },
    { name: 'Three.js', level: 75 },
    { name: 'WebGL', level: 70 },
    { name: 'SAP Fiori', level: 70 },
    { name: 'SQL', level: 80 },
    { name: 'Git', level: 85 },
  ],
  
  projects: [
    {
      id: '1',
      title: 'SAP iFlow RAG Pipeline with Re-ranking',
      description: 'This pipeline enhances SAP iFlow code generation from natural language using advanced embeddings and cross-encoder re-ranking. It achieved over Precision@5 for accurate translation. The system integrates Claude Sonnet-4 and OpenAI GPT via LangChain. A user-friendly web interface and an evaluation framework were developed for scalable testing and benchmarking.',
      technologies: ['SAP iFlow', 'LangChain', 'OpenAI GPT', 'Claude Sonnet-4', 'Embeddings', 'Re-ranking', 'Python'],
      githubLink: 'https://github.com/Sabareeshmasi/SAP-Iflow',
    },
    {
      id: '2',
      title: 'RAG Chatbot with Dual Memory Storage',
      description: 'Developed an n8n RAG chatbot that provides personalized responses through dual memory storage. It uses Qdrant and Pinecone for vector storage and integrated Cohere AI embeddings. Cognee AI memory was configured for robust, long-term context recall. Full integration required setting up Qdrant Cloud and resolving various JSON and ngrok configuration issues.',
      technologies: ['n8n', 'Qdrant', 'Pinecone', 'Cohere AI', 'Cognee AI', 'RAG', 'Python'],
      videoLink: 'https://drive.google.com/file/d/18qFM4ni3zgGeIloB0vZPazmdua8dL0Xg/view?usp=sharing',
    },
    {
      id: '3',
      title: 'SAP Copilot Conversational Assistant',
      description: 'Created an SAP Fiori-integrated conversational AI assistant that acts as an intelligent copilot. It utilizes LangChain, OpenAI, and RAG pipelines for context-aware interactions. The assistant is built on an SAP BTP backend and uses Pinecone for efficient context retrieval. Its intelligence is powered by a sophisticated multi-agent orchestration system.',
      technologies: ['SAP Fiori', 'LangChain', 'OpenAI', 'RAG Pipelines', 'SAP BTP', 'Pinecone', 'Multi-agent Systems', 'Python'],
      githubLink: 'https://github.com/Sabareeshmasi/sap-copilot-ui5',
    },
    {
      id: '4',
      title: 'EarthQuake 3D Interactive Earthquake Visualizer',
      description: 'A 3D web app visualizing real-time global earthquake data using React 18, Three.js, and react-globe.gl. Integrates with the USGS Earthquake API to display seismic events on an interactive globe with color-coded magnitude markers, time range filtering, location search, and clustering. Features responsive design, interactive popups, and WebGL-powered rendering.',
      technologies: ['React 18', 'Three.js', 'react-globe.gl', 'USGS Earthquake API', 'WebGL', 'JavaScript'],
      liveLink: 'https://earthquackvisulaizer.netlify.app/',
      githubLink: 'https://github.com/Sabareeshmasi/Earthquake-Visualizer',
    },
    {
      id: '5',
      title: 'PixiePrompt AI-Powered System',
      description: 'This is an advanced AI prompting system designed for executing complex automation workflows. The system leverages coordination from frameworks like AutoGen and MetaGPT. It integrates deep learning capabilities using PyTorch/TensorFlow models. The entire system connects to SAP through stable REST APIs for seamless data exchange and task execution.',
      technologies: ['AutoGen', 'MetaGPT', 'PyTorch', 'TensorFlow', 'REST APIs', 'SAP', 'Python', 'LangChain'],
      liveLink: 'https://pixieprompt.netlify.app/',
      githubLink: 'https://github.com/Sabareeshmasi/PixiePrompt',
    },
    {
      id: '6',
      title: 'CharacterAI Interactive Personas',
      description: 'Built AI personas with BabyAGI, LlamaIndex, and Weaviate, leveraging n8n and REST APIs for multi-agent conversational AI and context-aware responses. The system enables interactive character-based conversations with advanced AI capabilities.',
      technologies: ['BabyAGI', 'LlamaIndex', 'Weaviate', 'n8n', 'REST APIs', 'Multi-agent Systems', 'Python'],
      liveLink: 'https://charactersai.netlify.app/',
      githubLink: 'https://github.com/Sabareeshmasi/CharacterAi',
    },
  ] as Project[],
  
  education: [
    {
      id: '1',
      institution: 'Anna University, Chennai',
      degree: 'Bachelor of Engineering',
      field: 'Computer Science and Engineering',
      year: '2020 - 2024',
      image: '/anna-university.png',
      details: [
        'CGPA: 8.15',
      ],
      certificateLink: 'https://drive.google.com/file/d/1uRZq4FCM9l14uIKMWKOIhkmvGmSlHk7F/view?usp=sharing',
    },
    {
      id: '2',
      institution: 'Lakshmi Chordia Memorial Matric HR Sec School, Cuddalore',
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'Science Stream',
      year: '2018 - 2020',
      image: '/hsc-school.png',
      details: [
        'Percentage: 72.8%',
      ],
      certificateLink: 'https://drive.google.com/file/d/1OJNgECtCmb30Qh3vsdnBJKNkTVOq1dW2/view?usp=sharing',
    },
    {
      id: '3',
      institution: 'The PSBB Millennium, Cuddalore',
      degree: 'Secondary School Education (CBSE)',
      field: 'General Studies',
      year: '2017 - 2018',
      image: '/cbse-school.jpg',
      details: [
        'Percentage: 60.8%',
      ],
      certificateLink: 'https://drive.google.com/file/d/192RVix4jphlB2ucMV725ZSS0jLZu49N1/view?usp=sharing',
    },
  ] as Education[],
  
  experience: [
    {
      id: '1',
      company: 'IT Resonance',
      domain: 'SAP AI NextGen Intern',
      duration: '3 Months',
      position: 'SAP AI NextGen Intern',
    },
  ] as Experience[],
  
  achievements: [
    {
      id: '1',
      title: 'Projects Completed',
      count: 6,
      description: 'Advanced AI and SAP integration projects',
    },
    {
      id: '2',
      title: 'SAP Internship',
      count: 3,
      description: 'Months of intensive SAP ABAP development',
    },
    {
      id: '3',
      title: 'Tech Events Organized',
      count: 1,
      description: 'Organized TechNodelve 2023 - 400+ students, 4 events',
    },
    {
      id: '4',
      title: 'Certifications',
      count: 3,
      description: 'SAP AI NextGen, Model Context Protocol, SAP ABAP',
    },
  ] as Achievement[],
  
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1EkvJ0KgSloK0jzrnFF2q_VFqjN29XhNO', // Google Drive resume link
};

