import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Contact from '@/pages/Contact';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Home />
      <Products />
      <Contact />
      <Chatbot />
    </div>
  );
};

export default Index;
