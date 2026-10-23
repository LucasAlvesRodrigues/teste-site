/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialSection } from './components/DifferentialSection';
import { AboutSection } from './components/AboutSection';
import { PetsSection } from './components/PetsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { QuoteForm } from './components/QuoteForm';
import { CtaSection, FloatingWhatsApp, Footer } from './components/Footer';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const [services, setServices] = useState<string[]>([]);

  useReveal();

  const selectService = useCallback((value: string) => {
    setServices((prev) => (prev.includes(value) ? prev : [...prev, value]));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection onSelectService={selectService} />
        <DifferentialSection />
        <AboutSection />
        <PetsSection />
        <TestimonialsSection />
        <HowItWorks />
        <PricingSection />
        <QuoteForm selectedServices={services} onChangeServices={setServices} />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
