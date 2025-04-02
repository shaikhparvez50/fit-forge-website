
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Calendar, Filter } from 'lucide-react';

const ClassesPage = () => {
  // Days of the week for schedule
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Filter state
  const [activeFilter, setActiveFilter] = useState('all');

  // Classes data
  const classesData = [
    {
      id: 1,
      name: 'HIIT Training',
      description: 'High-intensity interval training to maximize calorie burn and improve cardiovascular health.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'cardio',
      intensity: 'High',
      duration: '45 min',
      schedule: [
        { day: 'Monday', time: '6:00 AM, 5:30 PM', trainer: 'John Davis' },
        { day: 'Wednesday', time: '6:00 AM, 5:30 PM', trainer: 'Sarah Johnson' },
        { day: 'Friday', time: '6:00 AM, 5:30 PM', trainer: 'John Davis' },
      ]
    },
    {
      id: 2,
      name: 'Power Yoga',
      description: 'Combination of strength, flexibility, and mindfulness to create balance in body and mind.',
      image: 'https://images.unsplash.com/photo-1593810450967-f9c6742a84c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'mind',
      intensity: 'Medium',
      duration: '60 min',
      schedule: [
        { day: 'Tuesday', time: '9:00 AM, 6:00 PM', trainer: 'Sarah Johnson' },
        { day: 'Thursday', time: '9:00 AM, 6:00 PM', trainer: 'Sarah Johnson' },
        { day: 'Saturday', time: '10:00 AM', trainer: 'Emma Wilson' },
      ]
    },
    {
      id: 3,
      name: 'Spin Cycling',
      description: 'High-energy indoor cycling class set to motivating music and led by expert instructors.',
      image: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      category: 'cardio',
      intensity: 'Medium-High',
      duration: '50 min',
      schedule: [
        { day: 'Monday', time: '7:00 AM, 12:00 PM, 6:30 PM', trainer: 'Michael Chen' },
        { day: 'Wednesday', time: '7:00 AM, 12:00 PM, 6:30 PM', trainer: 'John Davis' },
        { day: 'Friday', time: '7:00 AM, 12:00 PM', trainer: 'Michael Chen' },
        { day: 'Saturday', time: '9:00 AM', trainer: 'Michael Chen' },
      ]
    },
    {
      id: 4,
      name: 'Body Pump',
      description: 'Full-body workout using light to moderate weights with lots of repetition to build strength.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      category: 'strength',
      intensity: 'Medium',
      duration: '55 min',
      schedule: [
        { day: 'Tuesday', time: '7:30 AM, 6:00 PM', trainer: 'John Davis' },
        { day: 'Thursday', time: '7:30 AM, 6:00 PM', trainer: 'Michael Chen' },
        { day: 'Sunday', time: '11:00 AM', trainer: 'John Davis' },
      ]
    },
    {
      id: 5,
      name: 'Pilates',
      description: 'Low-impact exercise that aims to strengthen muscles while improving postural alignment and flexibility.',
      image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'mind',
      intensity: 'Low-Medium',
      duration: '50 min',
      schedule: [
        { day: 'Monday', time: '10:00 AM', trainer: 'Emma Wilson' },
        { day: 'Wednesday', time: '10:00 AM', trainer: 'Sarah Johnson' },
        { day: 'Friday', time: '10:00 AM', trainer: 'Emma Wilson' },
      ]
    },
    {
      id: 6,
      name: 'CrossFit',
      description: 'High-intensity functional movements that combine elements from different sports and types of exercise.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      category: 'strength',
      intensity: 'High',
      duration: '60 min',
      schedule: [
        { day: 'Tuesday', time: '6:00 AM, 5:00 PM', trainer: 'Michael Chen' },
        { day: 'Thursday', time: '6:00 AM, 5:00 PM', trainer: 'John Davis' },
        { day: 'Saturday', time: '8:00 AM', trainer: 'Michael Chen' },
      ]
    },
  ];

  // Function to filter classes
  const filteredClasses = activeFilter === 'all' 
    ? classesData 
    : classesData.filter(item => item.category === activeFilter);

  // Function to generate schedule for each day
  const generateSchedule = (day) => {
    let daySchedule = [];
    
    classesData.forEach(gymClass => {
      const scheduleForDay = gymClass.schedule.find(s => s.day === day);
      if (scheduleForDay) {
        const times = scheduleForDay.time.split(', ');
        times.forEach(time => {
          daySchedule.push({
            className: gymClass.name,
            time,
            trainer: scheduleForDay.trainer,
            intensity: gymClass.intensity,
            duration: gymClass.duration,
            category: gymClass.category
          });
        });
      }
    });
    
    // Sort by time
    daySchedule.sort((a, b) => {
      const timeA = a.time.includes('PM') && !a.time.includes('12:') 
        ? parseInt(a.time) + 12 
        : parseInt(a.time);
      const timeB = b.time.includes('PM') && !b.time.includes('12:')
        ? parseInt(b.time) + 12 
        : parseInt(b.time);
      return timeA - timeB;
    });
    
    return daySchedule;
  };

  return (
    <>
      <PageHeader 
        title="Our Classes" 
        subtitle="Discover our diverse range of classes designed to help you reach your fitness goals" 
        backgroundImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Classes Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gym-red">Fitness Classes</span></h2>
            <div className="w-20 h-1 bg-gym-red mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              We offer a variety of classes to suit all fitness levels and goals. Join us and find the perfect workout for you.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              className={activeFilter === 'all' ? 'bg-gym-red' : 'border-gym-red text-gym-red hover:bg-gym-red hover:text-white'}
              onClick={() => setActiveFilter('all')}
            >
              All Classes
            </Button>
            <Button 
              variant={activeFilter === 'cardio' ? 'default' : 'outline'}
              className={activeFilter === 'cardio' ? 'bg-gym-red' : 'border-gym-red text-gym-red hover:bg-gym-red hover:text-white'}
              onClick={() => setActiveFilter('cardio')}
            >
              Cardio
            </Button>
            <Button 
              variant={activeFilter === 'strength' ? 'default' : 'outline'}
              className={activeFilter === 'strength' ? 'bg-gym-red' : 'border-gym-red text-gym-red hover:bg-gym-red hover:text-white'}
              onClick={() => setActiveFilter('strength')}
            >
              Strength
            </Button>
            <Button 
              variant={activeFilter === 'mind' ? 'default' : 'outline'}
              className={activeFilter === 'mind' ? 'bg-gym-red' : 'border-gym-red text-gym-red hover:bg-gym-red hover:text-white'}
              onClick={() => setActiveFilter('mind')}
            >
              Mind & Body
            </Button>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((gymClass) => (
              <div key={gymClass.id} className="rounded-lg overflow-hidden shadow-lg card-hover">
                <div className="relative h-64">
                  <img 
                    src={gymClass.image} 
                    alt={gymClass.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gym-red text-white text-sm px-3 py-1 rounded-full">
                    {gymClass.intensity} Intensity
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{gymClass.name}</h3>
                    <div className="flex items-center text-gym-gray">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm">{gymClass.duration}</span>
                    </div>
                  </div>
                  <p className="text-gym-gray mb-4">
                    {gymClass.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Schedule:</h4>
                    <ul className="space-y-1 text-sm">
                      {gymClass.schedule.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <Calendar size={14} className="mr-2 text-gym-red" />
                          <span>
                            {item.day}: {item.time} with {item.trainer}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-gym-red hover:bg-opacity-90">
                    Book a Class
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 md:py-24 bg-gym-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Weekly <span className="text-gym-red">Schedule</span></h2>
            <div className="w-20 h-1 bg-gym-red mx-auto mb-4"></div>
            <p className="text-lg text-gym-gray max-w-3xl mx-auto">
              Plan your week with our comprehensive class schedule. Find the perfect time for your favorite workouts.
            </p>
          </div>

          <Tabs defaultValue="Monday" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
              {days.map((day) => (
                <TabsTrigger 
                  key={day} 
                  value={day}
                  className="data-[state=active]:bg-gym-red data-[state=active]:text-white px-6 py-2"
                >
                  {day}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {days.map((day) => {
              const daySchedule = generateSchedule(day);
              
              return (
                <TabsContent key={day} value={day} className="mt-0">
                  {daySchedule.length > 0 ? (
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="grid grid-cols-5 bg-gym-dark text-white font-semibold">
                        <div className="p-4">Time</div>
                        <div className="p-4">Class</div>
                        <div className="p-4">Trainer</div>
                        <div className="p-4 hidden md:block">Duration</div>
                        <div className="p-4 hidden md:block">Intensity</div>
                      </div>
                      
                      {daySchedule.map((schedule, index) => (
                        <div 
                          key={index} 
                          className={`grid grid-cols-5 ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          } border-b last:border-b-0 border-gray-100`}
                        >
                          <div className="p-4 font-semibold">{schedule.time}</div>
                          <div className="p-4">{schedule.className}</div>
                          <div className="p-4">{schedule.trainer}</div>
                          <div className="p-4 hidden md:block">{schedule.duration}</div>
                          <div className="p-4 hidden md:block">
                            <span 
                              className={`px-2 py-1 rounded text-xs font-semibold ${
                                schedule.intensity.includes('High') 
                                  ? 'bg-red-100 text-red-800' 
                                  : schedule.intensity.includes('Medium') 
                                    ? 'bg-yellow-100 text-yellow-800' 
                                    : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {schedule.intensity}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-lg shadow-lg">
                      <p className="text-gym-gray text-lg">No classes scheduled for {day}.</p>
                    </div>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gym-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join a <span className="text-gym-red">Class</span>?</h2>
            <p className="text-xl mb-8">
              Get started today and experience the energy and motivation of our group fitness classes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gym-red hover:bg-opacity-90 text-white text-lg">
                Book a Class Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gym-dark text-lg">
                View Membership Options
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClassesPage;
