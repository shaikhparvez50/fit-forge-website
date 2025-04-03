
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

// Feature data
const featuresData = {
  equipment: {
    title: "Modern Equipment",
    icon: "Dumbbell",
    description: "Our state-of-the-art fitness equipment helps you achieve your goals efficiently and effectively.",
    longDescription: "At FLEXGYM, we pride ourselves on offering the most advanced fitness equipment available. Our facility features top-of-the-line cardio machines, strength training equipment, and functional fitness tools that are regularly maintained and updated to ensure optimal performance. Whether you're a beginner or an experienced athlete, our equipment is designed to accommodate all fitness levels and help you maximize your workouts.",
    images: [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1596357395217-80de13130e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    ],
    benefits: [
      "Latest cardio machines with integrated entertainment systems",
      "Comprehensive strength training equipment for all muscle groups",
      "Specialized functional fitness zones for dynamic workouts",
      "Olympic lifting platforms and free weight areas",
      "Recovery equipment including foam rollers and stretching areas"
    ]
  },
  trainers: {
    title: "Expert Trainers",
    icon: "Users",
    description: "Our certified personal trainers guide you through your fitness journey with personalized plans.",
    longDescription: "Our team of expert trainers brings years of experience, diverse specializations, and a passion for helping members achieve their fitness goals. Each trainer is nationally certified and undergoes continuous education to stay at the forefront of fitness science and techniques. Whether you're looking to lose weight, build muscle, improve athletic performance, or enhance overall wellness, our trainers provide the knowledge, motivation, and accountability you need to succeed.",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1649972440086-0c2147e67223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    benefits: [
      "Personalized training programs tailored to your specific goals",
      "Nutritional guidance and meal planning advice",
      "Regular progress assessments and program adjustments",
      "Specialized expertise in weight loss, muscle building, rehabilitation",
      "Group and private training options for all preferences"
    ]
  },
  classes: {
    title: "Premium Classes",
    icon: "Award",
    description: "We offer a diverse range of group fitness classes for all levels and interests.",
    longDescription: "FLEXGYM's premium classes provide energetic, effective, and engaging workouts led by passionate instructors. Our diverse class schedule offers options for every fitness level, interest, and schedule. From high-intensity interval training to mind-body disciplines like yoga and Pilates, our classes are designed to challenge, motivate, and inspire. Join our supportive community environment where you'll find the perfect balance of personal attention and group camaraderie.",
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1593810450967-f9c6742a84c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    ],
    benefits: [
      "Over 50 group fitness classes weekly across various formats",
      "Expert instructors with specialized certifications",
      "Classes for all fitness levels from beginner to advanced",
      "Cutting-edge equipment and dedicated studio spaces",
      "Track your progress and reserve spots through our mobile app"
    ]
  },
  access: {
    title: "24/7 Access",
    icon: "Clock",
    description: "Workout on your schedule with our flexible 24/7 gym access.",
    longDescription: "Life doesn't follow a 9-to-5 schedule, and neither should your fitness routine. FLEXGYM's 24/7 access ensures you can work out whenever it fits your lifestyle, whether you're an early bird, night owl, or somewhere in between. Our secure entry system, well-lit facilities, and comprehensive security measures provide a safe and convenient environment at all hours. With no restrictions on when you can train, you'll never have to miss a workout due to time constraints.",
    images: [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    ],
    benefits: [
      "Secure key card access system for members",
      "Well-lit facilities with comprehensive security cameras",
      "Emergency assistance buttons throughout the facility",
      "Climate-controlled environment year-round",
      "Access to all areas including locker rooms and equipment"
    ]
  }
};

// Feature detail page component
const FeatureDetailPage = () => {
  const { featureId } = useParams();
  const feature = featuresData[featureId as keyof typeof featuresData];
  
  if (!feature) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Feature not found</h1>
        <p className="mb-6">The feature you're looking for doesn't exist.</p>
        <Link to="/">
          <Button className="bg-gym-purple hover:bg-opacity-90">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-10 pb-20">
      <div className="container-custom">
        {/* Back button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="group flex items-center hover:bg-gym-purple hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-[-3px] transition-transform" /> 
              Back to Home
            </Button>
          </Link>
        </div>
        
        {/* Feature header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{feature.title}</h1>
          <div className="w-20 h-1 bg-gym-purple mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-gym-gray">{feature.description}</p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Feature description */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">{feature.longDescription}</p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Benefits</h3>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gym-purple font-bold mr-2">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-gym-purple hover:bg-opacity-90 text-white hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  Contact Us For More Information
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Feature images */}
          <div className="space-y-6">
            <div className={cn("grid gap-6", 
              feature.images.length === 1 ? "grid-cols-1" : 
              feature.images.length === 2 ? "grid-cols-1 md:grid-cols-2" : 
              "grid-cols-1 md:grid-cols-2"
            )}>
              {feature.images.map((image, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1",
                    index === 0 && feature.images.length === 3 ? "md:col-span-2" : ""
                  )}
                >
                  <img 
                    src={image} 
                    alt={`${feature.title} - Image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-20 bg-gym-dark text-white p-8 md:p-12 rounded-xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience our {feature.title.toLowerCase()}?</h3>
              <p className="text-lg mb-0 md:mb-0">Join FLEXGYM today and transform your fitness journey with our premium facilities and expert guidance.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link to="/membership">
                <Button size="lg" className="bg-gym-purple hover:bg-opacity-90 w-full sm:w-auto">
                  Join Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gym-dark w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetailPage;
