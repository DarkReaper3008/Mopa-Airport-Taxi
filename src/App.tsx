import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Car, 
  Plane, 
  Star, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Luggage, 
  ChevronRight, 
  Menu, 
  X, 
  Sparkles, 
  HelpCircle, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pickup, setPickup] = useState('Manohar International Airport - Mopa (GOX)');
  const [dropoff, setDropoff] = useState('Calangute Beach / Resort');
  const [tripDate, setTripDate] = useState('2026-11-06');
  const [tripTime, setTripTime] = useState('10:00');
  const [passengerName, setPassengerName] = useState('');
  const [passengerPhone, setPassengerPhone] = useState('');
  
  // Form validation & submission states
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Simulate initial load skeleton & scroll progress
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const errors: { name?: string; phone?: string } = {};
    if (!passengerName.trim()) {
      errors.name = 'Please enter your full name.';
    }
    if (!passengerPhone.trim() || passengerPhone.length < 8) {
      errors.phone = 'Please enter a valid WhatsApp phone number.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess(true);
      const message = `Hi, I want to book a taxi from Mopa Airport%0A%0A*Car:* White Taxi (GA11T4559)%0A*Pickup:* ${pickup}%0A*Drop-off:* ${dropoff}%0A*Date:* ${tripDate} at ${tripTime}%0A*Name:* ${passengerName}%0A*Phone:* ${passengerPhone}%0A%0APlease confirm best rates and availability!`;
      window.open(`https://wa.me/919834778997?text=${message}`, '_blank');
      
      setTimeout(() => setBookingSuccess(false), 8000);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full box-border">
      
      {/* Top Emergency / Contact Banner */}
      <div className="bg-slate-900 text-slate-300 px-3 sm:px-6 py-2.5 text-xs md:text-sm border-b border-slate-800 w-full max-w-full box-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 w-full box-border">
          <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="truncate">24/7 Dedicated Mopa Airport (GOX) Taxi</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">Casnem, Poroscodem, Pernem, Goa</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <a 
              href="tel:+919834778997" 
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium p-1 rounded focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>+91 98347 78997</span>
            </a>
            <a 
              href="https://wa.me/919834778997?text=Hi,%20I%20want%20to%20book%20a%20taxi%20from%20Mopa%20Airport" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium p-1 rounded focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract with Scroll Progress Indicator */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all w-full max-w-full box-border">
        {/* Scroll Progress Indicator Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 z-50 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-700 via-emerald-500 to-amber-400 transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 w-full max-w-full box-border">
          
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 sm:flex-initial group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded-xl p-1">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-md group-hover:bg-blue-800 transition-colors shrink-0">
              <Car className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-base sm:text-xl font-bold tracking-tight text-slate-900 block leading-tight truncate">
                Mopa Airport Taxi
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-blue-700 tracking-wide uppercase truncate block">
                GA11T4559 · Dedicated Service
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-slate-600 shrink-0">
            <a href="#vehicle" className="hover:text-blue-900 transition-colors whitespace-nowrap">My Taxi (GA11T4559)</a>
            <a href="#services" className="hover:text-blue-900 transition-colors whitespace-nowrap">Airport Transfers</a>
            <a href="#booking" className="hover:text-blue-900 transition-colors whitespace-nowrap">Instant Booking</a>
            <a href="#why-us" className="hover:text-blue-900 transition-colors whitespace-nowrap">Why Choose Me</a>
            <a href="#reviews" className="hover:text-blue-900 transition-colors whitespace-nowrap">Reviews</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors whitespace-nowrap">Location</a>
          </nav>

          {/* Zone 3: Primary Action & Direct CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a 
              href="tel:+919834778997"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition-all border border-slate-200 shadow-sm min-h-[38px] shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700 shrink-0" />
              <span>+91 98347 78997</span>
            </a>
            <a 
              href="https://wa.me/919834778997?text=Hi,%20I%20want%20to%20book%20a%20taxi%20from%20Mopa%20Airport"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-md transition-all min-h-[38px] sm:min-h-[40px] shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline">WhatsApp Chat</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0 border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fade-in w-full max-w-full box-border">
            <a 
              href="#vehicle" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              My Taxi (GA11T4559)
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              Airport Transfers (GOX)
            </a>
            <a 
              href="#booking" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              Instant Booking
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              Why Choose Me
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              Customer Reviews
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              Contact & Location
            </a>
            <div className="pt-2 grid grid-cols-2 gap-2.5">
              <a 
                href="tel:+919834778997"
                className="flex items-center justify-center gap-1.5 px-3 py-3 bg-slate-900 text-white font-bold rounded-xl text-xs min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Call Now</span>
              </a>
              <a 
                href="https://wa.me/919834778997?text=Hi,%20I%20want%20to%20book%20a%20taxi%20from%20Mopa%20Airport"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-3 bg-emerald-600 text-white font-bold rounded-xl text-xs min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section featuring the uploaded white taxi (GA11T4559) */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-14 sm:py-20 lg:py-28 w-full max-w-full box-border">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
          <img 
            src="/assets/aistudio/unnamed_923bf4cb.webp" 
            alt="Mopa Airport White Taxi GA11T4559" 
            className="w-full h-full object-cover object-center filter blur-sm scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full box-border">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full box-border">
            
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left w-full min-w-0 box-border">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide uppercase max-w-full">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">Dedicated Single-Driver Airport Service</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight break-words max-w-full">
                Your Personal <span className="text-amber-400">Mopa Airport Taxi</span> (GA11T4559)
              </h1>

              <p className="text-sm sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed break-words">
                Direct, reliable, and safe Mopa Airport (GOX) pickups and drops operated personally by your trusted local driver based in Casnem, Poroscodem, Goa.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 pt-1 w-full max-w-full">
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm min-w-0">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200 truncate">24/7 Available at Mopa</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm min-w-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200 truncate">Dedicated Single Driver</span>
                </div>
              </div>

              {/* Hero CTA buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full max-w-full">
                <a 
                  href="https://wa.me/919834778997?text=Hi,%20I%20want%20to%20book%20a%20taxi%20from%20Mopa%20Airport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-xl transition-all min-h-[48px] text-center w-full sm:w-auto"
                >
                  <MessageSquare className="w-5 h-5 shrink-0" />
                  <span className="truncate">WhatsApp: +91 98347 78997</span>
                </a>
                <a 
                  href="tel:+919834778997"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-xl transition-all min-h-[48px] text-center w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 text-slate-900 shrink-0" />
                  <span className="truncate">Call: +91 98347 78997</span>
                </a>
              </div>
            </div>

            {/* Featured Hero Photo of the exact Car (GA11T4559) */}
            <div className="lg:col-span-6 w-full max-w-full box-border">
              <div className="bg-slate-900 border border-slate-700 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative group w-full box-border">
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-amber-400 text-slate-900 px-3 py-1 rounded-lg sm:rounded-xl font-black text-xs shadow-lg uppercase tracking-wider">
                  License: GA11T4559
                </div>
                <img 
                  src="/assets/aistudio/unnamed_923bf4cb.webp" 
                  alt="Mopa Airport White Taxi GA11T4559" 
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 sm:p-5 bg-slate-900/90 backdrop-blur-md flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 border-t border-slate-800">
                  <div className="min-w-0">
                    <span className="text-white font-bold text-sm block truncate">Clean & Sanitized White Taxi</span>
                    <span className="text-xs text-slate-400 block truncate">4 Passengers + Dedicated Luggage Space</span>
                  </div>
                  <a 
                    href="#booking"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors min-h-[38px] flex items-center shrink-0"
                  >
                    Book This Car
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Single Vehicle Showcase Section (GA11T4559) */}
      <section id="vehicle" className="py-14 sm:py-20 bg-white w-full max-w-full box-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full box-border">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Personalized Fleet
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              My Dedicated Taxi: GA11T4559
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              You ride in this exact well-maintained white taxi with pristine interiors, air conditioning, and ample luggage capacity for your Mopa Airport transfers.
            </p>
          </div>

          {isLoading ? (
            <div className="bg-white rounded-2xl sm:rounded-3xl h-80 sm:h-96 border border-slate-200 animate-pulse w-full"></div>
          ) : (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl grid lg:grid-cols-12 gap-6 sm:gap-8 items-center p-4 sm:p-8 lg:p-10 w-full max-w-full box-border">
              <div className="lg:col-span-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-md w-full">
                <img 
                  src="/assets/aistudio/unnamed_923bf4cb.webp" 
                  alt="Taxi GA11T4559" 
                  className="w-full h-60 sm:h-72 md:h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-6 space-y-4 sm:space-y-6 w-full min-w-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-bold">
                  License Plate: GA11T4559
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                  Immaculate Comfort for Your Airport Journey
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Operated exclusively by your dedicated local driver. Enjoy a smooth, air-conditioned ride directly from Manohar International Airport (Mopa GOX) to any resort or hotel across Goa without sharing your ride with strangers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 w-full">
                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 min-w-0">
                    <Users className="w-5 h-5 text-blue-700 shrink-0" />
                    <span className="text-xs font-semibold text-slate-700 truncate">4 Passengers Comfort</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 min-w-0">
                    <Luggage className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-700 truncate">Spacious Luggage Boot</span>
                  </div>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-500 block">Pricing Policy</span>
                    <span className="text-base font-bold text-blue-900">Contact for Best Rates</span>
                  </div>
                  <a 
                    href="#booking"
                    className="px-6 py-3.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors shadow-lg text-center"
                  >
                    Book GA11T4559 Now
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Offered Section (Strictly Mopa Airport Pickups & Drops) */}
      <section id="services" className="py-14 sm:py-20 bg-slate-100 w-full max-w-full box-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full box-border">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Specialized Service
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Mopa Airport (GOX) Pickups & Drops Only
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Focusing 100% on dedicated, punctual, and safe airport transfers to and from Manohar International Airport Mopa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto w-full box-border">
            
            {/* Service 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm space-y-4 flex flex-col justify-between w-full box-border">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <Plane className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Mopa Airport Arrivals (Pickup)</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Real-time flight tracking ensures your driver is waiting at Mopa GOX arrivals exit gate holding your name placard even if your flight is delayed. Zero waiting stress.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-900">Meet & Greet Included</span>
                <a href="#booking" className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1">
                  <span>Book Pickup</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm space-y-4 flex flex-col justify-between w-full box-border">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Mopa Airport Departures (Drop)</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Punctual doorstep pickup from your hotel, resort, or home anywhere in Goa to ensure you arrive at Manohar International Airport Mopa (GOX) comfortably ahead of your flight.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-900">On-Time Guarantee</span>
                <a href="#booking" className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1">
                  <span>Book Drop</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Booking & Enquiry Form Section */}
      <section id="booking" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden w-full max-w-full box-border">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full box-border">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full box-border">
            
            <div className="lg:col-span-5 space-y-5 sm:space-y-6 w-full min-w-0">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
                Direct Reservation
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Book Taxi GA11T4559 Instantly via WhatsApp
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Fill in your airport transfer details below. Clicking "Book via WhatsApp" opens WhatsApp with your pre-filled ride details addressed directly to <strong className="text-amber-400">+91 98347 78997</strong>.
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-white text-sm">No Advance Payment Required</h4>
                    <p className="text-xs text-slate-400">Pay directly to your driver via UPI or Cash after your airport ride.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-white text-sm">Direct Single Driver</h4>
                    <p className="text-xs text-slate-400">You deal directly with the vehicle owner-operator for absolute reliability.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form Card */}
            <div className="lg:col-span-7 w-full max-w-full box-border">
              <div className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl border border-slate-100 relative w-full max-w-full box-border">
                
                {isLoading ? (
                  /* Skeleton Loader State */
                  <div className="space-y-5 animate-pulse w-full">
                    <div className="h-6 bg-slate-200 rounded w-1/3"></div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="h-12 bg-slate-100 rounded-xl"></div>
                      <div className="h-12 bg-slate-100 rounded-xl"></div>
                    </div>
                    <div className="h-16 bg-slate-100 rounded-xl"></div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="h-12 bg-slate-100 rounded-xl"></div>
                      <div className="h-12 bg-slate-100 rounded-xl"></div>
                    </div>
                  </div>
                ) : (
                  <>
                    {bookingSuccess && (
                      <div className="mb-5 bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-fade-in w-full">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>WhatsApp chat opened successfully! Your driver is confirming your booking at +91 98347 78997 right now.</span>
                      </div>
                    )}

                    <form onSubmit={handleWhatsAppBooking} className="space-y-4 sm:space-y-5 w-full">
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4 w-full min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0">
                          <Car className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] sm:text-xs font-bold text-blue-900 uppercase tracking-wider block">Selected Vehicle</span>
                          <span className="text-sm sm:text-base font-extrabold text-slate-900 truncate block">White Taxi (GA11T4559)</span>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
                        <div className="w-full">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Pickup Location</label>
                          <div className="relative w-full">
                            <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 sm:w-5 sm:h-5 text-blue-700 shrink-0 pointer-events-none" />
                            <select 
                              value={pickup}
                              onChange={(e) => setPickup(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-700 font-medium min-h-[44px] box-border"
                            >
                              <option value="Manohar International Airport - Mopa (GOX)">Manohar International Airport - Mopa (GOX)</option>
                              <option value="Casnem / Poroscodem Base Office">Casnem / Poroscodem Base Office</option>
                              <option value="Dabolim Airport (GOI)">Dabolim Airport (GOI)</option>
                              <option value="Thivim Railway Station">Thivim Railway Station</option>
                              <option value="Hotel / Resort in North Goa">Hotel / Resort in North Goa</option>
                              <option value="Custom Address / Hotel">Custom Address (Enter in notes)</option>
                            </select>
                          </div>
                        </div>

                        <div className="w-full">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Drop-off Destination</label>
                          <div className="relative w-full">
                            <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 pointer-events-none" />
                            <select 
                              value={dropoff}
                              onChange={(e) => setDropoff(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600 font-medium min-h-[44px] box-border"
                            >
                              <option value="Calangute Beach / Resort">Calangute Beach / Resort</option>
                              <option value="Baga / Anjuna / Vagator">Baga / Anjuna / Vagator</option>
                              <option value="Panaji (Capital City)">Panaji (Capital City)</option>
                              <option value="Mandrem / Morjim / Arambol">Mandrem / Morjim / Arambol</option>
                              <option value="Thivim Railway Station">Thivim Railway Station</option>
                              <option value="Dabolim Airport (GOI)">Dabolim Airport (GOI)</option>
                              <option value="Palolem / South Goa Resorts">Palolem / South Goa Resorts</option>
                              <option value="Other / Custom Address">Other / Custom Address</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
                        <div className="w-full">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Date of Travel</label>
                          <div className="relative w-full">
                            <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 sm:w-5 sm:h-5 text-slate-500 shrink-0 pointer-events-none" />
                            <input 
                              type="date"
                              value={tripDate}
                              onChange={(e) => setTripDate(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-700 font-medium min-h-[44px] box-border"
                            />
                          </div>
                        </div>

                        <div className="w-full">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Time of Pickup</label>
                          <div className="relative w-full">
                            <Clock className="absolute left-3.5 top-3.5 w-4 h-4 sm:w-5 sm:h-5 text-slate-500 shrink-0 pointer-events-none" />
                            <input 
                              type="time"
                              value={tripTime}
                              onChange={(e) => setTripTime(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-700 font-medium min-h-[44px] box-border"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
                        <div className="w-full">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Your Name *</label>
                          <input 
                            type="text"
                            placeholder="e.g. Rahul Sharma"
                            value={passengerName}
                            onChange={(e) => {
                              setPassengerName(e.target.value);
                              if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                            }}
                            className={`w-full bg-slate-50 border rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none font-medium min-h-[44px] box-border ${formErrors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 focus:border-blue-700'}`}
                          />
                          {formErrors.name && (
                            <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{formErrors.name}</span>
                            </span>
                          )}
                        </div>

                        <div className="w-full">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">WhatsApp Phone Number *</label>
                          <input 
                            type="tel"
                            placeholder="e.g. +91 98347 78997"
                            value={passengerPhone}
                            onChange={(e) => {
                              setPassengerPhone(e.target.value);
                              if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                            }}
                            className={`w-full bg-slate-50 border rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none font-medium min-h-[44px] box-border ${formErrors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 focus:border-blue-700'}`}
                          />
                          {formErrors.phone && (
                            <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{formErrors.phone}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Summary Bar */}
                      <div className="bg-slate-100 rounded-xl p-3.5 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border border-slate-200 w-full box-border">
                        <div className="text-center sm:text-left w-full sm:w-auto">
                          <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Pricing Policy</span>
                          <span className="text-lg sm:text-2xl font-black text-blue-900 block">Contact for Best Rates</span>
                          <span className="text-xs text-slate-600 block mt-0.5">Transparent quote directly from driver</span>
                        </div>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold rounded-xl shadow-lg transition-all min-h-[48px] text-center shrink-0 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin shrink-0" />
                              <span>Redirecting to WhatsApp...</span>
                            </>
                          ) : (
                            <>
                              <MessageSquare className="w-5 h-5 shrink-0" />
                              <span>Book via WhatsApp</span>
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  </>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-14 sm:py-20 bg-white w-full max-w-full box-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full box-border">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full box-border">
            
            <div className="lg:col-span-5 space-y-5 sm:space-y-6 w-full min-w-0">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                Personalized Service
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Why Ride with GA11T4559?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As an independent owner-operator based right in Casnem, Poroscodem, Goa, I personally guarantee your safety, comfort, and punctuality for every Mopa Airport transfer.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-1">
                <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0 font-bold">
                    01
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-900 text-sm">Direct Driver Contact</h4>
                    <p className="text-xs text-slate-500">No middlemen or call centers. You talk directly with your driver at +91 98347 78997.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0 font-bold">
                    02
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-900 text-sm">Punctual & Reliable</h4>
                    <p className="text-xs text-slate-500">Always on time for arrivals and departures at Manohar International Airport (GOX).</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0 font-bold">
                    03
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-900 text-sm">Immaculate White Taxi</h4>
                    <p className="text-xs text-slate-500">Clean, air-conditioned vehicle (GA11T4559) maintained in top condition.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 w-full max-w-full box-border">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 w-full box-border">
                <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-3 sm:space-y-4 shadow-xl">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                    <Plane className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">15 Mins from Mopa GOX</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Based in Casnem, Poroscodem, I am right next to Manohar International Airport for instant pickups and prompt airport drops.
                  </p>
                </div>

                <div className="bg-blue-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-3 sm:space-y-4 shadow-xl">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">Safe & Professional</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Licensed tourist permit, commercial insurance, and years of safe driving experience across Goa roads.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-3 sm:space-y-4 sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">4.6/5 Rating from Google Maps Reviews</h4>
                      <p className="text-xs text-slate-600">Praising punctuality, clean car, and courteous driver service.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Reviews Section (Genuine Google Maps Reviews) */}
      <section id="reviews" className="py-14 sm:py-20 bg-slate-100 w-full max-w-full box-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full box-border">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Verified Reviews
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Genuine Google Maps Reviews
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Read what verified travelers say about their airport transfers with GA11T4559.
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 animate-pulse w-full">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl h-60 border border-slate-200 space-y-4">
                  <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                  <div className="h-16 bg-slate-200 rounded"></div>
                  <div className="h-10 bg-slate-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-5 sm:gap-8 w-full box-border">
              
              {/* Review 1: Diganta Bhaduri */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-5 w-full box-border">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic break-words">
                    "Very reliable and punctual service for Mopa airport transfer. Clean car and courteous driver. Highly recommend for anyone landing at GOX!"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3.5 border-t border-slate-100">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center text-sm shrink-0">
                    DB
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-sm text-slate-900 truncate">Diganta Bhaduri</h4>
                    <p className="text-xs text-slate-500 truncate">Google Maps Verified Review</p>
                  </div>
                </div>
              </div>

              {/* Review 2: Ronal Fernandes */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-5 w-full box-border">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic break-words">
                    "Excellent experience! The driver was waiting at Mopa GOX arrivals even though our flight was delayed. Smooth drive to North Goa."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3.5 border-t border-slate-100">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm shrink-0">
                    RF
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-sm text-slate-900 truncate">Ronal Fernandes</h4>
                    <p className="text-xs text-slate-500 truncate">Google Maps Verified Review</p>
                  </div>
                </div>
              </div>

              {/* Review 3: Abhishek Pandey */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-5 w-full box-border">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic break-words">
                    "Best taxi service in Pernem/Casnem area. Transparent pricing and very polite driver. Will definitely book again for my next Goa trip."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3.5 border-t border-slate-100">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-sm shrink-0">
                    AP
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-sm text-slate-900 truncate">Abhishek Pandey</h4>
                    <p className="text-xs text-slate-500 truncate">Google Maps Verified Review</p>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 sm:py-20 bg-white w-full max-w-full box-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full box-border">
          <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Everything you need to know about booking your taxi with GA11T4559 from Mopa Airport (GOX).
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5 w-full box-border">
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-2 w-full box-border">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span>Where will I meet my driver at Mopa Airport (GOX)?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                Your driver will be waiting right at the airport arrivals exit gate holding a placard with your name clearly written on it. We also share direct contact details via WhatsApp 30 minutes prior to landing.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-2 w-full box-border">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span>What happens if my flight to Mopa Airport is delayed?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                We monitor your flight status in real-time. If your flight is delayed or rescheduled, your driver automatically adjusts pickup timing at no extra waiting charge.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-2 w-full box-border">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span>How do I pay for the taxi ride?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                No advance online payment is required. You can pay conveniently after reaching your destination directly to the driver via UPI (Google Pay, PhonePe, Paytm) or cash.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact & Location Details Section */}
      <section id="contact" className="py-14 sm:py-20 bg-slate-900 text-white w-full max-w-full box-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full box-border">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full box-border">
            
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 w-full min-w-0">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
                Direct Contact
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Contact Your Driver Directly 24/7
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                No support desks or intermediaries. Call or message me directly at <strong className="text-amber-400">+91 98347 78997</strong> for immediate Mopa Airport taxi bookings and inquiries.
              </p>

              <div className="space-y-3.5 pt-1 w-full">
                <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-800/80 border border-slate-700 w-full min-w-0 box-border">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-white text-sm">Base Office Address</h4>
                    <p className="text-xs text-slate-300 mt-1 break-words">
                      H.No.449, A Poroscode, Casnem, Poroscodem, Pernem, Goa 403512
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-800/80 border border-slate-700 w-full min-w-0 box-border">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-white text-sm">Operating Hours</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Open 24 Hours, Monday to Sunday (Mopa GOX Transfers)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-800/80 border border-slate-700 w-full min-w-0 box-border">
                  <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-white text-sm">Direct Phone & WhatsApp</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      <a href="tel:+919834778997" className="text-amber-400 hover:underline font-bold">+91 98347 78997</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 w-full max-w-full box-border">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl w-full max-w-full box-border">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-700 gap-2">
                  <h3 className="text-base sm:text-xl font-bold text-white truncate">Taxi GA11T4559 Base Station</h3>
                  <span className="text-[10px] sm:text-xs bg-emerald-500/20 text-emerald-400 px-2.5 sm:px-3 py-1 rounded-full font-semibold shrink-0">
                    15 Mins to GOX
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <p className="leading-relaxed">
                    Based right in <strong className="text-white">Casnem, Poroscodem</strong>, offering immediate dispatch for Mopa Airport (GOX) arrivals and departures across Goa.
                  </p>

                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-700 space-y-2.5 sm:space-y-3 w-full box-border">
                    <div className="flex justify-between items-center text-xs gap-2 min-w-0">
                      <span className="text-slate-400 truncate">Casnem Base to Mopa Airport (GOX)</span>
                      <span className="font-bold text-amber-400 shrink-0">~12 km (15 mins)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs gap-2 min-w-0">
                      <span className="text-slate-400 truncate">Casnem Base to Calangute Beach</span>
                      <span className="font-bold text-amber-400 shrink-0">~28 km (45 mins)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full">
                    <a 
                      href="https://wa.me/919834778997?text=Hi,%20I%20want%20to%20book%20taxi%20GA11T4559%20from%20Mopa%20Airport"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg min-h-[44px] text-center"
                    >
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                      <span className="truncate">WhatsApp: +91 98347 78997</span>
                    </a>
                    <a 
                      href="tel:+919834778997"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg min-h-[44px] text-center"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                      <span className="truncate">Call: +91 98347 78997</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer (Dark background seamlessly extends to the bottom, eliminating white gap) */}
      <footer className="bg-slate-950 text-slate-400 pt-12 pb-28 sm:pb-12 border-t border-slate-900 text-sm w-full max-w-full box-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 w-full max-w-full box-border">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-8 border-b border-slate-900 w-full">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-900 flex items-center justify-center text-white shrink-0">
                  <Car className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-base sm:text-lg font-bold text-white truncate">Mopa Airport Taxi (GA11T4559)</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Dedicated single-driver airport transfer service operating 24/7 between Manohar International Airport Mopa (GOX) and all Goa locations.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#vehicle" className="hover:text-white transition-colors">My Taxi (GA11T4559)</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Airport Transfers</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Instant Booking</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 sm:mb-4">Direct Driver Contact</h4>
              <p className="text-xs text-slate-400 leading-relaxed space-y-1">
                <span>H.No.449, A Poroscode, Casnem, Poroscodem, Pernem, Goa 403512</span><br />
                <span>Open 24 Hours, Monday to Sunday</span><br />
                <span>Phone: <a href="tel:+919834778997" className="text-amber-400 font-bold hover:underline">+91 98347 78997</a></span><br />
                <span>WhatsApp: <a href="https://wa.me/919834778997?text=Hi,%20I%20want%20to%20book%20taxi%20GA11T4559" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">+91 98347 78997</a></span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-600 gap-3 text-center sm:text-left">
            <p>© 2026 Mopa Airport Taxi - GA11T4559 (Casnem, Poroscodem, Goa). All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 sm:hidden flex items-center justify-between gap-2.5 shadow-2xl w-full box-border">
        <a 
          href="tel:+919834778997"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md min-h-[44px] text-center"
        >
          <Phone className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="truncate">Call: +91 98347 78997</span>
        </a>
        <a 
          href="https://wa.me/919834778997?text=Hi,%20I%20want%20to%20book%20taxi%20GA11T4559%20from%20Mopa%20Airport"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-md min-h-[44px] text-center"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span className="truncate">WhatsApp Chat</span>
        </a>
      </div>

    </div>
  );
}
