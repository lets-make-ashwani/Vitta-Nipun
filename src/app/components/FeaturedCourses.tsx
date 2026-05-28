import { Clock, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function FeaturedCourses() {
  const courses = [
    {
      title: 'Professional Certificate in Investment Banking',
      instructor: 'Dr. Rajesh Kumar',
      duration: '6 months',
      rating: 4.9,
      students: 2340,
      price: '₹99,999',
      originalPrice: '₹1,49,999',
      level: 'Advanced',
      mode: 'Live + Recorded',
    },
    {
      title: 'Financial Modeling & Valuation Analyst',
      instructor: 'CA Priya Sharma',
      duration: '4 months',
      rating: 4.8,
      students: 1856,
      price: '₹79,999',
      originalPrice: '₹1,19,999',
      level: 'Intermediate',
      mode: 'Live Online',
    },
    {
      title: 'Data Science for Finance Professionals',
      instructor: 'Amit Verma',
      duration: '5 months',
      rating: 4.9,
      students: 3120,
      price: '₹89,999',
      originalPrice: '₹1,29,999',
      level: 'Beginner to Advanced',
      mode: 'Hybrid',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Top Rated</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading programs designed by experts with guaranteed placement support
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-[#084158] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-sm mb-2 bg-secondary px-3 py-1 rounded-full inline-block">{course.mode}</p>
                    <p className="text-2xl font-bold opacity-80">{course.level}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-semibold">Popular</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {course.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-secondary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-primary">{course.rating}</span>
                  </div>
                  <span>({course.students} students)</span>
                </div>

                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-3xl font-bold text-primary">{course.price}</p>
                    <p className="text-sm text-muted-foreground line-through">{course.originalPrice}</p>
                  </div>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                    33% OFF
                  </span>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all group-hover:bg-secondary">
                  Enroll Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
            View All Courses
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
