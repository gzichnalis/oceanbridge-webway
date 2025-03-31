
import { Ship, Users, Network, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Ship className="h-8 w-8 text-ocean-500" />,
      title: 'Strategic location in Hong Kong',
      description: 'Positioned for efficient service across Asia-Pacific.'
    },
    {
      icon: <Users className="h-8 w-8 text-ocean-500" />,
      title: 'Experienced maritime professionals',
      description: 'Over 60 years of accumulated industry expertise.'
    },
    {
      icon: <Network className="h-8 w-8 text-ocean-500" />,
      title: 'Strong supplier network',
      description: 'Global connections for parts and services.'
    },
    {
      icon: <Clock className="h-8 w-8 text-ocean-500" />,
      title: '24/7 support',
      description: 'Transparent communication and round-the-clock assistance.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-ocean-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              OceanBridgeLPT Limited is a Hong Kong-based maritime services company with a global mindset. We specialize in ship repairs, drydocking coordination, marine parts supply, ship machinery, and engine solutions.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With strong connections across Asia-Pacific and worldwide, our mission is to support the shipping industry with reliability, speed, and technical excellence. Whether it's emergency repairs or long-term service support, our team with over 60 years of accumulated experience is here to keep your fleet running smoothly.
            </p>
            <div className="bg-ocean-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="leading-relaxed">
                To deliver exceptional maritime services that keep vessels operating safely and efficiently through technical excellence, fast response times, and global connections.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="wave-container absolute bottom-0 left-0 right-0">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
      </div>
    </section>
  );
};

export default About;
