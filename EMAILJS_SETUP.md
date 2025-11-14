# EmailJS Setup Guide

## Step-by-Step Instructions

### Step 1: Add Email Service
1. In EmailJS dashboard, click **"Add New Service"**
2. Choose **Gmail** (or your preferred email provider)
3. Follow the connection steps
4. **Copy the Service ID** (e.g., `service_xxxxxxx`)

### Step 2: Create Email Template
1. Go to **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Use this template:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio website.
```

4. **Copy the Template ID** (e.g., `template_xxxxxxx`)

### Step 3: Get Public Key
1. Go to **"Account"** → **"General"** (or click your profile)
2. Find **"Public Key"** section
3. **Copy the Public Key** (e.g., `xxxxxxxxxxxxx`)

### Step 4: Update Contact Component
1. Open `src/components/Contact.tsx`
2. Find these lines (around line 22-24):
```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

3. Replace with your actual credentials:
```typescript
const EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // Your Template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxx'; // Your Public Key
```

### Step 5: Test
1. Save the file
2. Run your portfolio: `npm run dev`
3. Fill out the contact form
4. Click Submit
5. Check your email inbox!

## Important Notes
- The free plan includes 200 emails per month
- Make sure your email service is properly connected
- Test with your own email first before going live

