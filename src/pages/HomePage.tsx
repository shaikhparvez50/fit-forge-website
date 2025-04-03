
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dumbbell, Users, Award, Clock } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="h-screen relative flex flex-col justify-center items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in">
            UNLEASH YOUR <span className="text-gym-purple">STRENGTH</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Join the community that will help you reach your fitness goals
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Link to="/membership">
              <Button size="lg" className="bg-gym-purple hover:bg-opacity-90 text-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 w-full sm:w-auto px-8 py-6">
                Join Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gym-dark text-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 w-full sm:w-auto px-8 py-6">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-gym-purple">FLEXGYM</span></h2>
            <div className="w-20 h-1 bg-gym-purple mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              We offer a premium fitness experience designed to help you achieve your goals with state-of-the-art equipment and expert coaching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-gym-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Equipment</h3>
              <p className="text-gym-gray">
                State-of-the-art fitness equipment to help you achieve your goals efficiently.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-gym-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Trainers</h3>
              <p className="text-gym-gray">
                Certified personal trainers to guide you through your fitness journey.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-gym-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Classes</h3>
              <p className="text-gym-gray">
                Diverse range of group fitness classes for all levels and interests.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-gym-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Access</h3>
              <p className="text-gym-gray">
                Workout on your schedule with our flexible 24/7 gym access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About/CTA Section */}
      <section className="py-16 md:py-24 bg-gym-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-gym-purple">FLEXGYM</span></h2>
              <p className="text-lg mb-6">
                At FLEXGYM, we're more than just a place to work out. We're a community of fitness enthusiasts committed to helping you become the best version of yourself.
              </p>
              <p className="text-lg mb-8">
                Our state-of-the-art facility features top-of-the-line equipment, expert trainers, and a supportive atmosphere that will keep you motivated and coming back for more.
              </p>
              <Link to="/about">
                <Button className="bg-gym-purple hover:bg-opacity-90 group shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">
                  Learn More About Us 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Gym equipment" 
                className="rounded-lg shadow-lg h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Gym training" 
                className="rounded-lg shadow-lg h-full object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Weight training" 
                className="rounded-lg shadow-lg h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Workout" 
                className="rounded-lg shadow-lg h-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Classes Preview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Popular <span className="text-gym-red">Classes</span></h2>
            <div className="w-20 h-1 bg-gym-red mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              From high-intensity workouts to mind-body wellness, we offer a wide variety of classes to fit your fitness preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Class 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="HIIT Class" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gym-red text-white text-sm px-3 py-1 rounded-full">
                  High Intensity
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">HIIT Training</h3>
                <p className="text-gym-gray mb-4">
                  High-intensity interval training to maximize calorie burn and improve cardiovascular health.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gym-red font-semibold">Mon, Wed, Fri</span>
                  <Link to="/classes">
                    <Button variant="outline" className="border-gym-red text-gym-red hover:bg-gym-red hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Class 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1593810450967-f9c6742a84c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Yoga Class" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gym-gray text-white text-sm px-3 py-1 rounded-full">
                  Low Intensity
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Power Yoga</h3>
                <p className="text-gym-gray mb-4">
                  Combination of strength, flexibility, and mindfulness to create balance in body and mind.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gym-red font-semibold">Tue, Thu, Sat</span>
                  <Link to="/classes">
                    <Button variant="outline" className="border-gym-red text-gym-red hover:bg-gym-red hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Class 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="Cycling Class" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gym-red text-white text-sm px-3 py-1 rounded-full">
                  Medium Intensity
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Spin Cycling</h3>
                <p className="text-gym-gray mb-4">
                  High-energy indoor cycling class set to motivating music and led by expert instructors.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gym-red font-semibold">Daily Classes</span>
                  <Link to="/classes">
                    <Button variant="outline" className="border-gym-red text-gym-red hover:bg-gym-red hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/classes">
              <Button size="lg" className="bg-gym-red hover:bg-opacity-90">
                View All Classes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-16 md:py-24 bg-gym-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your <span className="text-gym-purple">Fitness Journey</span>?</h2>
            <p className="text-xl mb-8">
              Choose from our flexible membership options and start transforming your life today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/membership">
                <Button size="lg" className="bg-gym-purple hover:bg-opacity-90 text-white text-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 w-full sm:w-auto px-8 py-6">
                  View Membership Plans
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gym-dark text-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 w-full sm:w-auto px-8 py-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
