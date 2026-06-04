import { Star, Play, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rahul Mehta',
      role: 'Investment Banking Analyst',
      company: 'Goldman Sachs',
      package: '₹16 LPA',
      rating: 5,
      review: 'The financial modeling course was incredibly comprehensive. The instructors are industry veterans who provided real-world insights that helped me crack my dream job at Goldman Sachs.',
      image: '👨‍💼',
    },
    {
      name: 'Priya Singh',
      role: 'Data Scientist',
      company: 'JP Morgan',
      package: '₹18 LPA',
      rating: 5,
      review: 'Vitta Nipun transformed my career! The data science program with finance specialization gave me the perfect skill set. The placement support was exceptional.',
      image: '👩‍💼',
    },
    {
      name: 'Amit Kumar',
      role: 'Financial Analyst',
      company: 'Deloitte',
      package: '₹14 LPA',
      rating: 5,
      review: 'Best decision of my career. The live projects and industry mentorship prepared me for real-world challenges. Highly recommend to anyone serious about finance.',
      image: '👨‍💻',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from students who transformed their careers with Vitta Nipun
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-muted rounded-2xl p-8 relative hover:shadow-xl transition-all group"
            >
              <Quote className="absolute top-6 right-6 text-secondary/20 w-12 h-12" />

              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{testimonial.image}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm font-semibold text-secondary">{testimonial.company}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-semibold">
                      {testimonial.package}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">"{testimonial.review}"</p>

              {/* <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors group-hover:translate-x-2 duration-300">
                <Play size={16} className="fill-current" />
                <span className="text-sm font-semibold">Watch Video</span>
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
