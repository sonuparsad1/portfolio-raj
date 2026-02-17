import { GoogleGenAI, Chat } from "@google/genai";

// Robustly get API Key from various environment configurations (Vite, Next.js, Node, etc.)
const getApiKey = (): string => {
  try {
    // Check for Vite / Modern Frontend env
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      const key = import.meta.env.VITE_API_KEY || import.meta.env.API_KEY;
      if (key) return key;
    }
  } catch (e) {
    // ignore
  }

  try {
    // Check for standard Node/Webpack process.env
    // We check typeof process first to avoid ReferenceError in strict browser environments
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || '';
    }
  } catch (e) {
    // ignore
  }

  return '';
};

const apiKey = getApiKey();

// Initialize the client safely
// We provide a fallback or handle initialization to ensure the module doesn't crash 
// if the key is missing during app boot.
let ai: GoogleGenAI;
try {
  ai = new GoogleGenAI({ apiKey: apiKey || 'fallback-key-for-init' });
} catch (e) {
  console.error("Gemini Client Init Error:", e);
}

const RAJ_CONTEXT = `
You are "CyberBot", the personal AI assistant for Raj Hansh's portfolio website. 
Raj Hansh is a Cyber Security Professional with a B.Tech degree.

Here is Raj's profile data to answer user queries:
- **Name:** Raj Hansh
- **Contact Email:** rhansh33@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/rajhansh94/
- **GitHub:** https://github.com/rajhansh23
- **Education:** B.Tech in Computer Science & Engineering (Specialization in Cyber Security).
- **Professional Experience:**
    - **Summer Training in C Programming** at **CSE Pathsala** (10 June 2025 - 28 July 2025). Focus on data structures, algorithms, and memory management.
- **Skills:** 
    - **Programming:** C++, Java, Python, HTML & CSS, JavaScript.
    - **Tools & OS:** Linux, Git & GitHub.
    - **Security & Networking:** Networking Basics, Cyber Security Fundamentals, Ethical Hacking.
    - **Cloud & DevOps:** Docker, AWS, Cloud Computing, DevOps Basics.
- **Projects:** 
    1. **Cyber Security Lab Practice:** Hands-on practice with Linux tools, networking commands, reconnaissance techniques, and system security concepts.
    2. **Cloud & DevOps Learning Projects:** Practicing cloud deployment concepts, containerization, and DevOps workflows for scalable infrastructure using AWS and Docker.
- **Goals:** Seeking opportunities as a Security Analyst, Penetration Tester, or SOC Analyst.
- **Personality:** Professional, analytical, security-conscious, yet approachable.

**Guidelines:**
- Answer questions as if you are representing Raj.
- Keep answers concise and professional.
- If asked about contact info, suggest using the Contact form on the site or the email provided.
- If asked something unrelated to Raj or Cyber Security, politely steer back to the portfolio.
`;

export const createChatSession = (): Chat => {
  if (!ai) {
     throw new Error("AI Client not initialized");
  }
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: RAJ_CONTEXT,
      temperature: 0.7,
      maxOutputTokens: 500,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    // Check if we have a real key before sending
    if (!apiKey) return "API Key not configured. Please add VITE_API_KEY or API_KEY to your environment variables.";
    
    const result = await chat.sendMessage({ message });
    return result.text || "I received an empty response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection failed. Please check your network or try again later.";
  }
};