import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Encrypted message sent from ${formState.name}!`);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Decorative Matrix Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyber-green/5 to-transparent pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Initialize <span className="text-cyber-green">Handshake</span></h2>
          <p className="text-gray-400 mb-10 text-lg">
            Interested in collaboration or hiring? I'm currently open to new opportunities in Cyber Security. Let's secure the future together.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyber-gray rounded border border-gray-800 text-cyber-green">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-gray-400">Bangalore, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyber-gray rounded border border-gray-800 text-cyber-green">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <a href="mailto:rhansh33@gmail.com" className="text-gray-400 hover:text-cyber-green transition-colors">
                  rhansh33@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyber-gray rounded border border-gray-800 text-cyber-green">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Phone</h4>
                <p className="text-gray-400">+91 98765 XXXXX</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-cyber-gray p-8 rounded-xl border border-gray-800 shadow-2xl">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">/User/Name</label>
            <input
              type="text"
              id="name"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all placeholder-gray-600"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">/User/Email</label>
            <input
              type="email"
              id="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all placeholder-gray-600"
              placeholder="john@secure.net"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">/Message/Payload</label>
            <textarea
              id="message"
              required
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all placeholder-gray-600"
              placeholder="Input your query..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyber-green text-black font-bold py-4 rounded hover:bg-green-400 transition-all flex items-center justify-center gap-2 group"
          >
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            TRANSMIT DATA
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;