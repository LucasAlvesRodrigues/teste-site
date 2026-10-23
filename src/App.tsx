/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProtocolSection } from './components/ProtocolSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Calculator } from './components/Calculator';
import { BookingForm } from './components/BookingForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceType } from './types';
import { X } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalService, setModalService] = useState<ServiceType>('pet_sitter');
  const [modalVisits, setModalVisits] = useState<number>(1);
  const [modalDays, setModalDays] = useState<number>(4);
  const [modalCity, setModalCity] = useState<string>('Valinhos');

  const handleOpenBooking = () => {
    setModalService('pet_sitter');
    setBookingModalOpen(true);
  };

  const handleSelectService = (serviceId: ServiceType) => {
    setModalService(serviceId);
    setBookingModalOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferToBooking = (
    service: ServiceType,
    visitsPerDay: number,
    days: number,
    city: string
  ) => {
    setModalService(service);
    setModalVisits(visitsPerDay);
    setModalDays(days);
    setModalCity(city);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      {/* Strict 3-zone Top Bar Contract */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="grow">
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* Core Services Section with Bento layout & image cards */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4-Step Care Protocol */}
        <ProtocolSection onOpenBooking={handleOpenBooking} />

        {/* About Gabrielly Kind */}
        <AboutSection />

        {/* Testimonials from Sittsy & PetHost */}
        <TestimonialsSection />

        {/* Pricing Calculator & Simulator */}
        <Calculator onTransferToBooking={handleTransferToBooking} />

        {/* In-page Booking Section */}
        <BookingForm
          initialService={modalService}
          initialVisits={modalVisits}
          initialCity={modalCity}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Discrete Floating WhatsApp Contact */}
      <FloatingWhatsApp />

      {/* Quiet Footer */}
      <Footer />

      {/* Booking Modal (when triggered via primary CTAs) */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto shadow-2xl border border-emerald-950/10">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 rounded-lg cursor-pointer"
              aria-label="Fechar agendamento"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Solicitação de Visita
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-emerald-950 mt-1">
                Agende com a Gabrielly
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Preencha os detalhes e receba o contato para combinar a visita prévia presencial.
              </p>
            </div>

            <BookingForm
              isModal={true}
              initialService={modalService}
              initialVisits={modalVisits}
              initialDays={modalDays}
              initialCity={modalCity}
              onClose={() => setBookingModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
