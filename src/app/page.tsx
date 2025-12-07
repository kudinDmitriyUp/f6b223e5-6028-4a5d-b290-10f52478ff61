"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroChatPrompt from '@/components/sections/hero/HeroChatPrompt';
import AboutShowcase from '@/components/sections/about/AboutShowcase';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import MetricCardThirteen from '@/components/sections/metrics/MetricCardThirteen';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Sparkles, Brain, BookOpen, Globe, Zap, User, Award, TrendingUp, Lightbulb, BarChart3, MessageSquare, Star, Building2, MessageCircle, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="largeSizeExtraLargeSpacing"
      background="noiseDiagonalGradient"
      cardStyle="spotlight"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Gabriele Ghione"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130142979-g329rhdc.jpg"
          logoAlt="Gabriele Ghione Logo"
          navItems={[
            {"name": "About", "id": "about"},
            {"name": "Experience", "id": "experience"},
            {"name": "Contact", "id": "contact"}
          ]}
          button={{
            text: "Connect",
            href: "https://www.linkedin.com/in/gabrieleghione"
          }}
          className="rounded-none"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroChatPrompt
          title="Founder & CEO at Counselly.ai"
          description="Building the future of college admissions with AI-powered personalized guidance. Combining innovation, strategy, and a passion for transforming education across three continents."
          tag="AI Innovator"
          tagIcon={Sparkles}
          promptText="Exploring AI, education, and sustainable innovation"
          featureTags={[
            {"id": "1", "label": "AI & Machine Learning", "icon": Brain},
            {"id": "2", "label": "EdTech Pioneer", "icon": BookOpen},
            {"id": "3", "label": "Triple-Degree Scholar", "icon": Globe},
            {"id": "4", "label": "Strategic Leader", "icon": Zap}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutShowcase
          title="Leading Innovation in Education Technology"
          description="With a foundation in business, artificial intelligence, and global perspectives, I'm dedicated to solving real problems through technology and strategic thinking."
          tag="About Me"
          tagIcon={User}
          useCappedBorderRadius={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          leftItem={{
            title: "Strategic Impact",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130144419-7fzzfsj9.jpg"
          }}
          rightItem={{
            title: "Cutting-Edge Research",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130145142-4zm9ruvd.jpg"
          }}
          centerImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130145774-cqsb3le9.jpg"
        />
      </div>

      <div id="experience" data-section="experience">
        <FeatureCardFive
          title="Core Expertise & Achievements"
          description="Combining business intelligence, artificial intelligence research, and investment strategy to drive innovation"
          tag="Experience"
          tagIcon={Award}
          features={[
            {"title": "AI & Machine Learning", "icon": Brain},
            {"title": "Private Equity Analysis", "icon": TrendingUp},
            {"title": "Product Strategy", "icon": Lightbulb},
            {"title": "Global Operations", "icon": Globe}
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          showIconBoxBackground={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThirteen
          title="Global Impact & Growth"
          description="Driving innovation across multiple continents with measurable results in education, technology, and sustainability"
          tag="Metrics"
          tagIcon={BarChart3}
          metrics={[
            {"id": "1", "label": "Research Across", "value": "3 Continents"},
            {"id": "2", "label": "Universities Attended", "value": "4 Top Institutions"},
            {"id": "3", "label": "Professional Experience", "value": "5+ Internships"},
            {"id": "4", "label": "Academic Achievement", "value": "GPA: 3.93/4.0"}
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Industry Leaders Say"
          description="Insights from colleagues, mentors, and peers who have witnessed Gabriele's impact and innovation"
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              "id": "1",
              "name": "Alessandro",
              "handle": "@investor",
              "testimonial": "Gabriele demonstrates exceptional strategic thinking combined with deep technical knowledge. His approach to solving educational challenges is transformative.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130149280-oiy3xl8n.jpg",
              "icon": Star
            },
            {
              "id": "2",
              "name": "Sofia",
              "handle": "@mentor",
              "testimonial": "One of the most driven entrepreneurs I've encountered. His ability to bridge AI research with real-world business applications is remarkable.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130150102-rjx2ycbs.jpg",
              "icon": Star
            },
            {
              "id": "3",
              "name": "Marco",
              "handle": "@partner",
              "testimonial": "Working with Gabriele on investment analysis revealed his analytical rigor and market insights. A future leader in tech innovation.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130150620-zivixnkq.jpg",
              "icon": Star
            },
            {
              "id": "4",
              "name": "Elena",
              "handle": "@colleague",
              "testimonial": "His dedication to combining business strategy with educational innovation sets him apart. Inspiring to see such vision at this stage.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130151381-l6bvaf58.jpg",
              "icon": Star
            },
            {
              "id": "5",
              "name": "Andrea",
              "handle": "@advisor",
              "testimonial": "The maturity and sophistication in Gabriele's thinking about market opportunities is exceptional for his experience level.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130152065-86f1zcbt.jpg",
              "icon": Star
            },
            {
              "id": "6",
              "name": "Francesca",
              "handle": "@supporter",
              "testimonial": "Gabriele embodies the next generation of entrepreneurs who understand both technology and human-centered business models.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130152815-be2m819n.jpg",
              "icon": Star
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofTwo
          title="Trusted by Leading Organizations"
          description="Associated with world-class institutions and innovative companies driving global change"
          tag="Affiliations"
          tagIcon={Building2}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130153542-1a2xgjfw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130154268-8u6n4gdm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130154992-m5qadgvi.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130155965-amk4efmb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765130156670-4wqvezh2.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get in Touch"
          ctaDescription="Open to conversations about AI innovation, education technology, investment opportunities, and global collaboration"
          ctaIcon={MessageCircle}
          ctaButton={{
            text: "Connect on LinkedIn",
            href: "https://www.linkedin.com/in/gabrieleghione"
          }}
          faqs={[
            {
              "id": "1",
              "title": "What is Counselly.ai?",
              "content": "Counselly is a personal college admissions platform built around an AI counselor you can actually talk to. Students have real conversations to explore their interests, choose majors, compare universities, and get guided through the full application process."
            },
            {
              "id": "2",
              "title": "What are your research interests?",
              "content": "I focus on AI and machine learning applications in education technology, sustainable innovation through agrivoltaics research, and private equity investment analysis in infrastructure and renewables sectors."
            },
            {
              "id": "3",
              "title": "Are you available for consulting?",
              "content": "I'm open to discussing AI strategy, education technology insights, and business development opportunities. Please reach out through LinkedIn for specific inquiries."
            },
            {
              "id": "4",
              "title": "What educational background do you have?",
              "content": "I'm a Presidential Scholar pursuing a Triple-Degree World Bachelor in Business Program across USC, HKUST, and Bocconi, with a Minor in Artificial Intelligence and a GPA of 3.93/4.0."
            },
            {
              "id": "5",
              "title": "How can I collaborate with you?",
              "content": "I'm interested in partnerships around AI applications, educational innovation, sustainable technology, and impact investing. Connect with me on LinkedIn to discuss potential collaborations."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Gabriele Ghione"
          logoAlt="Gabriele Ghione"
        />
      </div>
    </ThemeProvider>
  );
}