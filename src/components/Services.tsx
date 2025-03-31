
import { Wrench, Cog, Puzzle } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Wrench className="h-12 w-12 service-icon" />,
      title: "Ship Repairs & Drydocking",
      items: [
        "Emergency repairs (afloat & at dock)",
        "Hull treatment and steelworks",
        "Propeller, rudder, and shaft inspections",
        "Drydock planning and supervision",
        "Underwater inspections and Hull cleaning"
      ],
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      icon: <Cog className="h-12 w-12 service-icon" />,
      title: "Machinery & Engine services",
      items: [
        "Main and auxiliary engine overhaul",
        "Machinery diagnostics and retrofits",
        "Green Technology Solutions",
        "Installation and commissioning",
        "Troubleshooting and technical support"
      ],
      bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100"
    },
    {
      icon: <Puzzle className="h-12 w-12 service-icon" />,
      title: "Spare Parts",
      items: [
        "Genuine and OEM parts sourcing",
        "Engine parts re-conditioning",
        "WBTS, pumps, valves, compressors, electronics",
        "Deck Cranes, Hatch Covers",
        "Electric Motors and Hydraulics"
      ],
      bgColor: "bg-gradient-to-br from-teal-50 to-teal-100"
    }
  ];

  return (
    <section id="services" className="py-24 bg-ocean-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-ocean-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive maritime solutions to keep your fleet running efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              className={`service-card ${category.bgColor} border border-gray-100 rounded-lg overflow-hidden shadow-sm`}
            >
              <div className="text-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-ocean-800 mb-4 text-center">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-ocean-600 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white rounded-xl shadow text-center">
          <p className="text-lg text-gray-700 mb-2">
            We work with all major makers ensuring global coverage and fast delivery
          </p>
          <p className="text-lg font-medium text-ocean-700">
            — contact us for a quote or to source hard-to-find parts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
