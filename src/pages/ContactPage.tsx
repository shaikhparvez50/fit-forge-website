
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for any inquiries or to schedule a visit" 
        backgroundImage="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in <span className="text-gym-red">Touch</span></h2>
              <p className="text-lg mb-8">
                We're here to help with any questions you might have about our facilities, classes, membership options, or anything else. Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gym-red p-3 rounded-lg text-white mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Our Location</h3>
                    <p className="text-gym-gray">
                      123 Fitness Avenue<br />
                      Workout City, WC 10234
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gym-red p-3 rounded-lg text-white mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us</h3>
                    <p className="text-gym-gray">
                      (123) 456-7890<br />
                      (987) 654-3210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gym-red p-3 rounded-lg text-white mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email Us</h3>
                    <p className="text-gym-gray">
                      info@flexgym.com<br />
                      support@flexgym.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gym-red p-3 rounded-lg text-white mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Opening Hours</h3>
                    <ul className="text-gym-gray">
                      <li>Monday - Friday: 5:00 AM - 10:00 PM</li>
                      <li>Saturday: 6:00 AM - 8:00 PM</li>
                      <li>Sunday: 8:00 AM - 6:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block mb-2 font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Membership Inquiry"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gym-red hover:bg-opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gym-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find <span className="text-gym-red">Us</span></h2>
            <div className="w-20 h-1 bg-gym-red mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              We are conveniently located in the heart of the city with ample parking and easy access to public transportation.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941638866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1619712417296!5m2!1sen!2s" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Gym Location"
              className="w-full"
            ></iframe>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Getting Here</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">By Car</h4>
                <p className="text-gym-gray mb-4">
                  Ample parking available on-site. Enter from Fitness Avenue and follow signs to the gym parking area.
                </p>
                <h4 className="font-semibold mb-2">By Public Transport</h4>
                <p className="text-gym-gray">
                  Take bus routes 10, 15, or 22 to Fitness Avenue stop. We're just a 2-minute walk from there.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Nearby Landmarks</h4>
                <ul className="text-gym-gray space-y-1">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-gym-red mr-2 mt-1" size={16} />
                    <span>2 blocks from Central Shopping Mall</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-gym-red mr-2 mt-1" size={16} />
                    <span>Across from City Park</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-gym-red mr-2 mt-1" size={16} />
                    <span>Next to Downtown Coffee Shop</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gym-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a <span className="text-gym-red">Free Trial</span>?</h2>
              <p className="text-xl mb-6">
                Experience FLEXGYM firsthand with a complimentary day pass. No pressure, no commitments—just a chance to see what we have to offer.
              </p>
              <Button size="lg" className="bg-gym-red hover:bg-opacity-90">
                Get Your Free Pass
              </Button>
            </div>
            <div className="bg-gym-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Schedule a Tour</h3>
              <p className="mb-6">
                Want to see our facilities before joining? Schedule a guided tour with one of our staff members.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-gym-red" />
                  <span>Tours available 7 days a week</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 size={20} className="mr-2 text-gym-red" />
                  <span>No obligation to join</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 size={20} className="mr-2 text-gym-red" />
                  <span>Personalized facility overview</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-white text-gym-dark hover:bg-opacity-90">
                Book a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
