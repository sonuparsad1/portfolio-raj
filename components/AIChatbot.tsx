import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm CyberBot. Ask me anything about Raj's skills, projects, or experience.",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Use a ref to store the chat session so it persists across renders without being recreated
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      chatSessionRef.current = createChatSession();
    }
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
         chatSessionRef.current = createChatSession();
      }
      const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-red-500 rotate-90' : 'bg-cyber-green animate-bounce'}`}
      >
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-black" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-cyber-dark border border-cyber-green/30 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-slide-up h-[500px]">
          {/* Header */}
          <div className="bg-gray-900 p-4 border-b border-gray-800 flex items-center gap-3">
            <div className="p-2 bg-cyber-green/20 rounded-full">
              <Bot size={20} className="text-cyber-green" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Raj's AI Assistant</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Online
              </p>
            </div>
            <Sparkles size={16} className="ml-auto text-yellow-400 opacity-50" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-cyber-green text-black rounded-tr-none font-medium'
                      : 'bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none border border-gray-700 flex items-center gap-2">
                   <Loader2 size={16} className="animate-spin text-cyber-green" />
                   <span className="text-xs text-gray-400">Processing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-900 border-t border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about Raj..."
                className="flex-1 bg-black border border-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyber-green transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-cyber-green hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-black p-2 rounded-lg transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-600 mt-2 text-center">AI responses can be inaccurate.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;