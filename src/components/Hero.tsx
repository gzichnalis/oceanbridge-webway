
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="ocean-video-container">
        <video className="ocean-video" autoPlay loop muted playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Your Trusted Maritime Partner in Asia and Beyond
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          OceanBridgeLPT Limited delivers expert ship repairs, drydocking solutions, marine parts, and engine services—fast, reliable, and globally connected.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-ocean-600 hover:bg-ocean-700 text-white px-8 py-6 text-lg">
            Request a Quote
          </Button>
          <Button variant="outline" className="bg-white/10 border-white hover:bg-white/20 text-white px-8 py-6 text-lg">
            <a href="#services">Explore Services</a>
          </Button>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
