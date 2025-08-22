import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. How can I help you with JUSTUS AI solutions today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    const response = await fetch('https://automation.toltemtech.com.ng/webhook/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputValue })
    });

    const data = await response.json();

    var bot_mesage = data.output; // This will contain the AI's response

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: bot_mesage,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    return;
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-center space-y-1.5">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-accent via-primary to-accent text-primary-foreground shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-accent/40 border-2 border-accent/20 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {isOpen ? <X className="w-8 h-8 relative z-10" /> : <MessageCircle className="w-15 h-15 relative z-10 animate-pulse" />}
          </Button>
          <span className="text-base font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent px-3 py-1.5 rounded-md border border-accent/30 shadow-md">
            AI Assistant
          </span>
        </div>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-28 right-6 w-96 h-[32rem] z-40 bg-card border-border/50 shadow-2xl animate-scale-in">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-to-r from-accent/10 to-primary/10">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-15 h-15 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">JUSTUS AI Assistant</h3>
                  <p className="text-xs text-muted-foreground">Powered by n8n</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-lg ${message.isBot
                      ? 'bg-muted text-foreground'
                      : 'bg-gradient-to-r from-accent to-primary text-primary-foreground'
                      }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 text-sm focus:border-accent focus:ring-accent"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-gradient-to-r from-accent to-primary text-primary-foreground hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;