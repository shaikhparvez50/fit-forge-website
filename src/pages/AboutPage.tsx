
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const trainers = [
    {
      name: 'John Davis',
      role: 'Head Trainer',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      bio: 'Certified personal trainer with 10+ years of experience specializing in strength training and nutrition.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Yoga Instructor',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      bio: 'Certified yoga teacher with expertise in vinyasa flow, power yoga, and meditation techniques.',
    },
    {
      name: 'Michael Chen',
      role: 'Fitness Coach',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      bio: 'Sports science graduate specializing in HIIT, functional training, and athletic performance.',
    },
    {
      name: 'Emma Wilson',
      role: 'Nutritionist',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      bio: 'Registered dietitian with expertise in sports nutrition and meal planning for optimal fitness results.',
    },
  ];

  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about our mission, values, and the team behind FLEXGYM" 
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="text-gym-red">Story</span></h2>
              <p className="text-lg mb-4">
                Founded in 2010, FLEXGYM began with a simple mission: to create a fitness environment where everyone feels welcome, regardless of their experience level or fitness goals.
              </p>
              <p className="text-lg mb-4">
                What started as a small local gym has grown into a thriving fitness community dedicated to helping members transform their lives through health and wellness.
              </p>
              <p className="text-lg mb-4">
                Over the years, we've expanded our facilities, added state-of-the-art equipment, and built a team of expert trainers who are passionate about helping our members succeed.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Gym interior" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-gym-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gym-red">Mission</span></h2>
            <div className="w-20 h-1 bg-gym-red mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              At FLEXGYM, we're committed to providing a supportive and inclusive environment where members can achieve their fitness goals and improve their overall well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-4">Inspiration</h3>
              <p className="text-gym-gray">
                We believe in inspiring our members to push their limits and discover their full potential through fitness and wellness.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="text-gym-red mr-2 mt-1" size={18} />
                  <span>Motivational environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-gym-red mr-2 mt-1" size={18} />
                  <span>Success stories sharing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-gym-red mr-2 mt-1" size={18} />
                  <span>Community challenges</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p className="text-gym-gray">
                We're committed to educating our members about fitness, nutrition, and wellness to help them make informed health decisions.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="text-gym-red mr-2 mt-1" size={18} />
                  <span>Fitness workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-gym-red mr-2 mt-1" size={18} />
                  <span>Nutrition seminars</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-gym-red mr-2 mt-1" size={18} />
                  <span>Proper technique training</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <p className="text-gym-gray">
                We focus on delivering measurable results through science-backed training methods and personalized approaches.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="text-gym-red mr-2 mt-1" size={18} />
                  <span>Progress tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-gym-red mr-2 mt-1" size={18} />
                  <span>Goal-based programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-gym-red mr-2 mt-1" size={18} />
                  <span>Regular assessments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our <span className="text-gym-red">Team</span></h2>
            <div className="w-20 h-1 bg-gym-red mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              Our certified trainers and staff are dedicated to helping you achieve your fitness goals and providing exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
                <div className="h-64">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-gym-red font-medium mb-3">{trainer.role}</p>
                  <p className="text-gym-gray">{trainer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section 
        className="py-16 md:py-24 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our <span className="text-gym-red">Fitness Community</span>
            </h2>
            <p className="text-xl mb-8">
              Be part of a supportive community committed to health, wellness, and achieving fitness goals together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/membership">
                <Button size="lg" className="bg-gym-red hover:bg-opacity-90 text-white text-lg">
                  Become a Member
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gym-dark text-lg">
                  Schedule a Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
