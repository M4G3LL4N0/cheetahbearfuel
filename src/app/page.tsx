import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] relative">
        <div className="absolute inset-0">
          <Image
            src="/hero-cheetah-bear.png"
            alt="Cheetah Bear Fuel"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center space-y-8 px-4">
          <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CHEETAH BEAR FUEL
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">
            TWO BEAST ONE CAN
          </h2>
          
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Why be one beast when you can be two? The ultimate fusion of speed and strength in every can.
          </p>
          
          <Link 
            href="#waitlist"
            className="inline-block px-8 py-4 text-xl font-bold uppercase bg-primary text-black rounded-full hover:bg-primary/90 transition-all"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>

      {/* Product Teaser Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Energy', 'Protein', 'Electrolytes', 'Focus'].map((feature, i) => (
            <div key={i} className="bg-black/20 p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-all">
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary">{feature}</h3>
              <p className="text-zinc-300">
                {feature === 'Energy' && 'Unleash raw power with our energy blend'}
                {feature === 'Protein' && 'Build strength with premium protein'}
                {feature === 'Electrolytes' && 'Stay hydrated and balanced'}
                {feature === 'Focus' && 'Sharpen your mind with mushroom extract'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Vibe Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold uppercase mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            American Performance Redefined
          </h2>
          <p className="text-xl text-zinc-300">
            Cheetah Bear Fuel is more than a drink - it's a lifestyle. Combining the speed of a cheetah with the strength of a bear, we've created the ultimate performance fuel for those who demand more from life. Whether you're crushing it in the gym, dominating the boardroom, or pushing your limits in the great outdoors, Cheetah Bear Fuel gives you the edge you need to perform at your peak.
          </p>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold uppercase mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Be First. Be Fast.
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Join the waitlist today and be the first to experience the ultimate performance fuel.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-black/20 text-white rounded-full border border-white/10 focus:border-primary/50 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-black font-bold uppercase rounded-full hover:bg-primary/90 transition-all"
            >
              Join Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-300">
            &copy; {new Date().getFullYear()} Cheetah Bear Fuel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
