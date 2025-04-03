
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Dumbbell, Users, Clock, Heart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      name: 'Personal Training',
      description: 'One-on-one coaching sessions tailored to your specific goals and fitness level.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'Customized workout plans',
        'Nutritional guidance',
        'Progress tracking',
        'Flexibility in scheduling'
      ]
    },
    {
      id: 2,
      name: 'Group Fitness Classes',
      description: 'Energetic group workouts led by expert instructors for motivation and camaraderie.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'HIIT workouts',
        'Yoga and Pilates',
        'Spinning classes',
        'Strength training'
      ]
    },
    {
      id: 3,
      name: 'Nutrition Counseling',
      description: 'Expert advice from registered dietitians to optimize your nutrition for fitness goals.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80',
      features: [
        'Personalized meal plans',
        'Dietary assessments',
        'Supplement recommendations',
        'Weight management strategies'
      ]
    },
    {
      id: 4,
      name: 'Sports Recovery',
      description: 'Specialized recovery services to help you recuperate faster and prevent injuries.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'Foam rolling sessions',
        'Stretching programs',
        'Massage therapy',
        'Ice/heat treatments'
      ]
    }
  ];

  const membershipPlans = [
    {
      name: 'Basic',
      price: '29.99',
      features: [
        'Access to gym facilities',
        'Standard operating hours',
        'Basic fitness assessment',
        'Access to locker rooms'
      ],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Premium',
      price: '59.99',
      isPopular: true,
      features: [
        'All Basic features',
        '3 personal training sessions/month',
        'Unlimited group classes',
        'Access to premium areas',
        'Discounted recovery services'
      ],
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Ultimate',
      price: '99.99',
      features: [
        'All Premium features',
        'Unlimited personal training',
        'Nutritional counseling',
        'Recovery services included',
        'Guest passes (2 per month)',
        'Early access to new classes'
      ],
      image: 'https://images.unsplash.com/photo-1584464491033-06c773e63fbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Discover the wide range of services we offer to help you achieve your fitness goals" 
        backgroundImage="https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
      />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gym-purple">Services</span></h2>
            <div className="w-20 h-1 bg-gym-purple mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              We offer a comprehensive range of fitness services designed to help you reach your health and wellness goals.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover hover:transform hover:scale-105 transition-all duration-700"
                    />
                  </AspectRatio>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.name}</h3>
                  <p className="text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="text-gym-purple mr-2 mt-1" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.id}`}>
                    <Button className="bg-gym-purple hover:bg-opacity-90 shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 bg-gym-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gym-purple">Facilities</span></h2>
            <div className="w-20 h-1 bg-gym-purple mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              Experience our state-of-the-art facilities designed to enhance your workout and recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3" 
                alt="Strength Zone" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="bg-gym-purple rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Dumbbell size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Strength Zone</h3>
                <p className="text-white/90">
                  Free weights, machines, and functional training equipment for all strength levels.
                </p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixlib=rb-4.0.3" 
                alt="Cardio Area" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="bg-gym-purple rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cardio Area</h3>
                <p className="text-white/90">
                  Latest treadmills, ellipticals, bikes and rowing machines for cardio workouts.
                </p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3" 
                alt="Class Studios" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="bg-gym-purple rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Class Studios</h3>
                <p className="text-white/90">
                  Dedicated spaces for group classes, yoga, and specialized training sessions.
                </p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1598289431512-b98366d9a97d?ixlib=rb-4.0.3" 
                alt="Recovery Area" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="bg-gym-purple rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Recovery Area</h3>
                <p className="text-white/90">
                  Stretching zones, foam rollers, and relaxation areas for proper recovery.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-gym-purple hover:bg-opacity-90 shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 text-lg px-6 py-3">
              Take a Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership <span className="text-gym-purple">Plans</span></h2>
            <div className="w-20 h-1 bg-gym-purple mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              Choose the plan that fits your fitness goals and budget. All plans include access to our state-of-the-art facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg shadow-lg overflow-hidden ${
                  plan.isPopular ? 'border-2 border-gym-purple relative' : 'border border-gray-200'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-gym-purple text-white py-1 px-4 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gym-gray">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="text-gym-purple mr-2 mt-1" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full bg-gym-purple hover:bg-opacity-90`}
                  >
                    Choose Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-4">
              Looking for corporate memberships or family plans?
            </p>
            <Link to="/contact">
              <Button variant="outline" className="border-gym-purple text-gym-purple hover:bg-gym-purple hover:text-white">
                Contact Us for Special Rates
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
