
import { Anchor, Ship, BarChart4 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Drydock Management",
      description: "Supervision and coordination of complete drydock operations for commercial vessels across Asia.",
      icon: <Anchor className="h-8 w-8 text-ocean-500 mb-4" />,
      image: "https://images.unsplash.com/photo-1518435435887-2be1aa1490e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIzNDd8MHwxfHNlYXJjaHwxfHxzaGlweWFyZCUyMGRyeWRvY2t8ZW58MHx8fHwxNjk2ODQzNjM2fDA&ixlib=rb-4.0.3&q=80&w=600"
    },
    {
      title: "Vessel Repairs",
      description: "Emergency and planned repairs for various vessel types including bulkers, tankers, and container ships.",
      icon: <Ship className="h-8 w-8 text-ocean-500 mb-4" />,
      image: "https://images.unsplash.com/photo-1604196121675-691f82e6638b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIzNDd8MHwxfHNlYXJjaHw2fHxzaGlwJTIwcmVwYWlyfGVufDB8fHx8MTY5Njg0Mzc3MXww&ixlib=rb-4.0.3&q=80&w=600"
    },
    {
      title: "Fleet Optimization",
      description: "Analysis and implementation of efficiency improvements for maritime operations.",
      icon: <BarChart4 className="h-8 w-8 text-ocean-500 mb-4" />,
      image: "https://images.unsplash.com/photo-1494057710211-98a04e33f683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIzNDd8MHwxfHNlYXJjaHwyfHxjb250YWluZXIlMjBzaGlwJTIwcG9ydHxlbnwwfHx8fDE2OTY4NDM5MTJ8MA&ixlib=rb-4.0.3&q=80&w=600"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-ocean-700 to-ocean-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Experience</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Our team of ex Chief Engineers and Technical Managers have managed dozens of operations globally
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:bg-white/15 transition-colors duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{project.title}</h3>
                <p className="text-white/80 text-center">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our team has managed projects across Asia, Europe, and the Middle East, working with commercial lines, bulk carriers, tankers and offshore vessels developing a vast network of Shipyards and Workshops worldwide.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button className="bg-white text-ocean-800 hover:bg-white/90">
              Contact for Portfolio
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Client References
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
