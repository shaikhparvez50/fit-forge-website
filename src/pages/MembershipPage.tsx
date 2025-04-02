
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { CheckCircle2, X } from 'lucide-react';

const MembershipPage = () => {
  const membershipPlans = [
    {
      name: 'Basic',
      price: '29.99',
      description: 'Perfect for beginners or those with simple fitness needs.',
      features: [
        { name: 'Access to gym facilities', included: true },
        { name: 'Standard operating hours (6AM-10PM)', included: true },
        { name: 'Basic fitness assessment', included: true },
        { name: 'Locker room access', included: true },
        { name: 'Free WiFi', included: true },
        { name: 'Group fitness classes', included: false },
        { name: 'Personal training sessions', included: false },
        { name: 'Nutrition counseling', included: false },
        { name: 'Access to premium areas', included: false },
      ]
    },
    {
      name: 'Premium',
      price: '59.99',
      description: 'Our most popular plan with great value for fitness enthusiasts.',
      isPopular: true,
      features: [
        { name: 'Access to gym facilities', included: true },
        { name: 'Extended hours (5AM-11PM)', included: true },
        { name: 'Advanced fitness assessment', included: true },
        { name: 'Locker room access', included: true },
        { name: 'Free WiFi', included: true },
        { name: 'Unlimited group fitness classes', included: true },
        { name: '3 personal training sessions/month', included: true },
        { name: 'Nutrition counseling', included: false },
        { name: 'Access to premium areas', included: true },
      ]
    },
    {
      name: 'Ultimate',
      price: '99.99',
      description: 'The complete fitness experience with all premium services.',
      features: [
        { name: 'Access to gym facilities', included: true },
        { name: '24/7 access', included: true },
        { name: 'Comprehensive fitness assessment', included: true },
        { name: 'Premium locker room access', included: true },
        { name: 'Free WiFi', included: true },
        { name: 'Unlimited group fitness classes', included: true },
        { name: 'Unlimited personal training', included: true },
        { name: 'Nutrition counseling', included: true },
        { name: 'Access to all areas & special events', included: true },
      ]
    }
  ];

  const faqItems = [
    {
      question: 'Is there a joining fee or contract?',
      answer: 'There is a one-time joining fee of $49 for all membership plans. We offer both month-to-month options and discounted annual plans. No long-term contracts are required for monthly memberships.'
    },
    {
      question: 'Can I cancel my membership at any time?',
      answer: 'Monthly memberships can be cancelled with 30 days written notice. Annual memberships are non-refundable but can be transferred to another person for a small administration fee.'
    },
    {
      question: 'Do you offer family or corporate memberships?',
      answer: 'Yes! We offer special discounted rates for families and corporate groups. Please contact our membership team for custom pricing based on your specific needs.'
    },
    {
      question: 'Can I freeze my membership temporarily?',
      answer: 'Yes, members can freeze their membership for up to 3 months per year with a medical note or for other approved circumstances. A small monthly maintenance fee may apply.'
    },
    {
      question: 'Are there age restrictions for gym membership?',
      answer: 'Members must be at least 16 years old. We also offer special teen memberships for ages 13-15 with parental supervision requirements.'
    },
    {
      question: 'Can I try the gym before joining?',
      answer: 'Absolutely! We offer a free one-day pass for potential members to experience our facilities before making a commitment. Contact us to schedule your free trial day.'
    },
  ];

  return (
    <>
      <PageHeader 
        title="Membership Plans" 
        subtitle="Find the perfect membership plan that fits your fitness goals and budget" 
        backgroundImage="https://images.unsplash.com/photo-1534368786749-9e47bdf95b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Membership Plans Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your <span className="text-gym-red">Plan</span></h2>
            <div className="w-20 h-1 bg-gym-red mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              We offer flexible membership options designed to fit different fitness goals, schedules, and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg shadow-lg overflow-hidden ${
                  plan.isPopular ? 'border-2 border-gym-red relative transform md:scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-gym-red text-white py-1 px-4 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gym-gray mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gym-gray">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature.included ? (
                          <CheckCircle2 className="text-gym-red mr-2 mt-1" size={18} />
                        ) : (
                          <X className="text-gray-400 mr-2 mt-1" size={18} />
                        )}
                        <span className={feature.included ? '' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.isPopular 
                        ? 'bg-gym-red hover:bg-opacity-90' 
                        : 'bg-gym-dark hover:bg-gym-gray'
                    }`}
                  >
                    Choose Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-4">
              All plans include a free fitness consultation. Join today and start your fitness journey!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gym-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership <span className="text-gym-red">Benefits</span></h2>
            <div className="w-20 h-1 bg-gym-red mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              As a member of FLEXGYM, you'll enjoy these exclusive benefits designed to enhance your fitness experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="h-12 flex items-center mb-4">
                <h3 className="text-xl font-bold">State-of-the-art Facilities</h3>
              </div>
              <p className="text-gym-gray">
                Access to premium exercise equipment, spacious workout areas, and clean, comfortable facilities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="h-12 flex items-center mb-4">
                <h3 className="text-xl font-bold">Expert Guidance</h3>
              </div>
              <p className="text-gym-gray">
                Support from certified trainers who can help you develop a personalized fitness plan.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="h-12 flex items-center mb-4">
                <h3 className="text-xl font-bold">Flexible Hours</h3>
              </div>
              <p className="text-gym-gray">
                Extended hours of operation to accommodate various schedules, with 24/7 access for Ultimate members.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="h-12 flex items-center mb-4">
                <h3 className="text-xl font-bold">Diverse Class Offerings</h3>
              </div>
              <p className="text-gym-gray">
                A wide range of fitness classes for all interests and fitness levels, led by experienced instructors.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="h-12 flex items-center mb-4">
                <h3 className="text-xl font-bold">Community Events</h3>
              </div>
              <p className="text-gym-gray">
                Regular member events, challenges, and social activities to keep you motivated and connected.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="h-12 flex items-center mb-4">
                <h3 className="text-xl font-bold">Exclusive Discounts</h3>
              </div>
              <p className="text-gym-gray">
                Special pricing on additional services, retail products, and partner offerings for all members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership <span className="text-gym-red">FAQs</span></h2>
            <div className="w-20 h-1 bg-gym-red mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              Find answers to commonly asked questions about our membership plans and policies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-gym-light rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                  <p className="text-gym-gray">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 md:py-24 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-gym-red">Fitness Journey</span>?
            </h2>
            <p className="text-xl mb-8">
              Join today and get your first month at 50% off! Limited time offer for new members only.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gym-red hover:bg-opacity-90 text-white text-lg">
                Join Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gym-dark text-lg">
                Schedule a Tour
              </Button>
            </div>
            <p className="mt-6 text-gray-300">
              No long-term contract required. Offer valid for new members only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MembershipPage;
