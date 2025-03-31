
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Globe, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace these with your actual EmailJS service, template and user IDs
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        company: formData.company,
        message: formData.message,
      };
      
      await emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_USER_ID'
      );
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Message Failed to Send",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-ocean-500" />,
      title: "Office Address",
      details: [
        "2301, 23/F Bayfield Bldg 99",
        "99 Hennessy Rd",
        "Wan Chai, HONG KONG"
      ]
    },
    {
      icon: <Mail className="h-5 w-5 text-ocean-500" />,
      title: "Email Us",
      details: ["info@oceanbridgelpt.com"]
    },
    {
      icon: <Globe className="h-5 w-5 text-ocean-500" />,
      title: "Website",
      details: ["www.oceanbridgelpt.com"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-ocean-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Let's talk. Whether you're managing a planned drydock or an urgent repair, our team is ready to support you—anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="contact-input resize-none"
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  className="bg-ocean-600 hover:bg-ocean-700 flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <Button type="button" variant="outline" className="border-ocean-600 text-ocean-600 hover:bg-ocean-50 flex-1">
                  Request a Callback
                </Button>
              </div>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">{info.icon}</div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9966033133697!2d114.17129331540602!3d22.2776225851276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005a41a36f0d%3A0xfe8baa8d7e70194!2s99%20Hennessy%20Rd%2C%20Wan%20Chai%2C%20Hong%20Kong!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="OceanBridgeLPT Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
