import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

export default function Contact() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedField, setCopiedField] = useState(null); // 'email' or 'phone' or null
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Clipboard copy helper
  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  // Submit form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS keys from .env or placeholders
    // We provide placeholder support for simulated success when keys are not set.
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY';

    const hasEnvKeys = 
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (hasEnvKeys) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(
          () => {
            handleSuccess();
          },
          (error) => {
            console.error('EmailJS Error:', error);
            setIsSubmitting(false);
            setSubmitStatus('error');
          }
        );
    } else {
      // Simulate EmailJS success for local preview/development
      console.log('Simulating form submit (set EmailJS variables to enable live delivery):', formState);
      setTimeout(() => {
        handleSuccess();
      }, 1500);
    }
  };

  const handleSuccess = () => {
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormState({ name: '', email: '', subject: '', message: '' });

    // Blast orange and white confetti
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      // Orange & white colors
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff6b00', '#ffffff', '#ff8c33']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff6b00', '#ffffff', '#ff8c33']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section id="contact" className="relative py-24 w-full z-10 overflow-hidden">
      {/* Background large decorative glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-primary/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-outfit text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            <span className="text-primary font-mono text-xl sm:text-2xl mr-2">06.</span>
            Contact
          </h2>
          <div className="h-[1px] flex-1 bg-white/10 max-w-md" />
        </div>

        {/* Form Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Direct Info Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold block">
                // Get in Touch
              </span>
              <h3 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Let's discuss <br />
                your next project.
              </h3>
              <p className="font-poppins text-sm text-muted leading-relaxed">
                Whether you have a specific project idea, need a MERN Stack resource, or just want to chat about web technology, don't hesitate to reach out. I will respond within 24 hours.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div 
                onClick={() => copyToClipboard('YOUR_EMAIL@example.com', 'email')}
                className="glass-panel p-5 rounded-2xl flex items-center justify-between border border-white/5 hover:border-primary/20 cursor-pointer group transition-all duration-300 select-none"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-muted uppercase tracking-widest mb-0.5">Email</span>
                    <span className="font-poppins text-sm text-white font-medium break-all">YOUR_EMAIL@example.com</span>
                  </div>
                </div>
                <div className="text-muted hover:text-white transition-colors pl-2">
                  {copiedField === 'email' ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />}
                </div>
              </div>

              {/* Phone Card */}
              <div 
                onClick={() => copyToClipboard('+123 456 7890', 'phone')}
                className="glass-panel p-5 rounded-2xl flex items-center justify-between border border-white/5 hover:border-primary/20 cursor-pointer group transition-all duration-300 select-none"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-muted uppercase tracking-widest mb-0.5">Phone</span>
                    <span className="font-poppins text-sm text-white font-medium break-all">+123 456 7890</span>
                  </div>
                </div>
                <div className="text-muted hover:text-white transition-colors pl-2">
                  {copiedField === 'phone' ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />}
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-panel p-5 rounded-2xl flex items-center border border-white/5 hover:border-primary/20 transition-all duration-300 group select-none">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-all duration-300 mr-4">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-muted uppercase tracking-widest mb-0.5">Location</span>
                  <span className="font-poppins text-sm text-white font-medium">YOUR_LOCATION</span>
                </div>
              </div>
            </div>

            {/* Social handles bar */}
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted hover:text-primary border border-white/5 hover:shadow-glow transition-all duration-300" aria-label="GitHub Profile">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted hover:text-primary border border-white/5 hover:shadow-glow transition-all duration-300" aria-label="LinkedIn Profile">
                <FaLinkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted hover:text-primary border border-white/5 hover:shadow-glow transition-all duration-300" aria-label="Twitter Profile">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 border border-white/5 flex flex-col justify-between h-full relative">
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-[10px] text-muted uppercase tracking-widest font-semibold">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full bg-secondary/65 border border-white/5 focus:border-primary/55 outline-none rounded-xl px-4 py-3.5 text-sm text-white placeholder-muted font-poppins transition-colors duration-300"
                      placeholder="Rubaiya_Hamid"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-mono text-[10px] text-muted uppercase tracking-widest font-semibold">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full bg-secondary/65 border border-white/5 focus:border-primary/55 outline-none rounded-xl px-4 py-3.5 text-sm text-white placeholder-muted font-poppins transition-colors duration-300"
                      placeholder="your_email@domain.com"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-mono text-[10px] text-muted uppercase tracking-widest font-semibold">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full bg-secondary/65 border border-white/5 focus:border-primary/55 outline-none rounded-xl px-4 py-3.5 text-sm text-white placeholder-muted font-poppins transition-colors duration-300"
                    placeholder="Project Consultation / Job Opportunity"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-mono text-[10px] text-muted uppercase tracking-widest font-semibold">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full bg-secondary/65 border border-white/5 focus:border-primary/55 outline-none rounded-xl px-4 py-3.5 text-sm text-white placeholder-muted font-poppins transition-colors duration-300 resize-none"
                    placeholder="Describe your project goals or requirements in detail..."
                  />
                </div>

                {/* Feedback states notifications */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-400 font-poppins text-xs"
                    >
                      <CheckCircle2 size={16} />
                      <span>Thank you! Your message was submitted successfully and EmailJS trigger fired.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 font-poppins text-xs"
                    >
                      <Mail size={16} />
                      <span>An error occurred while sending the message. Please check console or try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Animated Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-primary text-secondary font-outfit text-sm font-extrabold tracking-widest uppercase hover:bg-white hover:text-primary transition-all duration-300 shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed select-none"
                >
                  {isSubmitting ? (
                    <>
                      <span>TRANSMITTING...</span>
                      <div className="w-4 h-4 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
