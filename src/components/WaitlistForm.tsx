'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    
    const form = e.currentTarget;
    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value
    };

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      
      if (data.ok) {
        setMessage("You're in! Thanks for joining the waitlist.");
        form.reset();
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First name"
            className="glass px-6 py-3 text-white rounded-full focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
            required
            minLength={2}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last name"
            className="glass px-6 py-3 text-white rounded-full focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
            required
            minLength={2}
          />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="glass px-6 py-3 text-white rounded-full focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
          required
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-black font-bold uppercase rounded-full hover:opacity-90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              Joining <span className="loading-spinner" />
            </>
          ) : (
            'Join Now'
          )}
        </button>
      </div>
      <div className="min-h-6">
        <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-fadeIn">
          {message}
        </p>
      </div>
    </form>
  );
}
