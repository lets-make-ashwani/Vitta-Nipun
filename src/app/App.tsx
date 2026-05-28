import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CourseCategories } from './components/CourseCategories';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeaturedCourses } from './components/FeaturedCourses';
import { PlacementSection } from './components/PlacementSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WebinarSection } from './components/WebinarSection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { FloatingCTA } from './components/FloatingCTA';
import { initSmoothScrolling } from './utils/smoothScroll';

export default function App() {
  useEffect(() => {
    initSmoothScrolling();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CourseCategories />
        <WhyChooseUs />
        <FeaturedCourses />
        <PlacementSection />
        <TestimonialsSection />
        <WebinarSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <BottomNav />
      <FloatingCTA />
    </div>
  );
}