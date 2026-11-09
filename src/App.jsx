import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TownsServed from './components/TownsServed';
import Services from './components/Services';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  // Default to Telugu for local East Godavari audience, user can flip to English anytime
  const [lang, setLang] = useState('te');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefillItem, setPrefillItem] = useState('');

  const handleOpenBooking = (item = '') => {
    setPrefillItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#10060a] text-[#f7f2ea] font-telugu selection:bg-amber-400 selection:text-[#2a0812]">
      
      {/* 1. Header with Language Switcher (తెలుగు / English) */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main Content */}
      <main>
        {/* 2. Focused Hero Section */}
        <Hero 
          lang={lang} 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* 3. East Godavari Towns Covered Strip */}
        <TownsServed 
          lang={lang} 
        />

        {/* 4. Core Event Services with Transparent Pricing */}
        <Services 
          lang={lang} 
          onSelectService={(serviceName) => handleOpenBooking(serviceName)} 
        />

        {/* 5. Affordable Local Budget Packages */}
        <Packages 
          lang={lang} 
          onSelectPackage={(packageName) => handleOpenBooking(packageName)} 
        />

        {/* 6. Recent Work Photos with Town Badges */}
        <Portfolio 
          lang={lang} 
          onSelectWork={(workName) => handleOpenBooking(workName)} 
        />

        {/* 7. Why Godavari Families Choose Us */}
        <WhyChooseUs 
          lang={lang} 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* 8. Verified Local Reviews */}
        <Testimonials 
          lang={lang} 
        />

        {/* 9. Fast 1-Minute Booking & Free Quotation Form */}
        <ContactForm 
          lang={lang} 
          isOpenAsModal={false} 
          prefillItem={prefillItem} 
        />
      </main>

      {/* Pop-up Booking Modal when clicked from any card */}
      {isModalOpen && (
        <ContactForm 
          lang={lang} 
          isOpenAsModal={true} 
          onClose={handleCloseModal} 
          prefillItem={prefillItem} 
        />
      )}

      {/* 10. Local SEO Footer with Rajahmundry & Kakinada Branches */}
      <Footer 
        lang={lang} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* 11. 1-Tap WhatsApp Floating Button */}
      <WhatsAppButton 
        lang={lang} 
      />

    </div>
  );
}
