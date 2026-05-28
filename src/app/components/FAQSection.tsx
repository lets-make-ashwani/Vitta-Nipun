import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the duration of the courses?',
      answer: 'Our courses range from 3 to 6 months depending on the program. We offer flexible learning schedules with both live and recorded sessions to accommodate working professionals and students.',
    },
    {
      question: 'Is placement assistance guaranteed?',
      answer: 'Yes! We provide 100% placement assistance to all our students. Our dedicated placement cell works with 500+ hiring partners including top finance firms, banks, and fintech companies to ensure you get placed in your dream role.',
    },
    {
      question: 'What are the prerequisites for enrolling?',
      answer: 'Most of our courses are designed for beginners to advanced learners. For basic courses, you need a graduation degree. For advanced programs like Investment Banking, some financial knowledge is preferred but not mandatory.',
    },
    {
      question: 'Do you offer EMI payment options?',
      answer: 'Yes, we offer flexible EMI options starting from as low as ₹5,000 per month. We have partnered with leading financial institutions to provide easy no-cost EMI plans for all our courses.',
    },
    {
      question: 'Will I get a certificate after completion?',
      answer: 'Absolutely! You will receive an industry-recognized certificate upon successful completion of the course. Our certificates are valued by top recruiters and can be shared on LinkedIn and other professional platforms.',
    },
    {
      question: 'Can I access courses from anywhere?',
      answer: 'Yes! Our platform is completely online and accessible from anywhere in the world. You can learn at your own pace with live classes, recorded sessions, and downloadable resources available 24/7.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our courses and programs
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-primary text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`text-secondary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
