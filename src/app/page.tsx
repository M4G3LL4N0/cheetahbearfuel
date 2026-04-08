import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[100vh] relative overflow-hidden">
        <div className="absolute inset-0 glow-effect">
          <Image
            src="/hero-cheetah-bear.png"
            alt="Cheetah Bear Fuel"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        </div>
        
        <div className="relative z-10 text-center space-y-8 px-4 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
            CHEETAH BEAR<br />FUEL<span className="text-secondary">.</span>
          </h1>
          
          <div className="h-24 md:h-32 overflow-hidden">
            <div className="animate-text-rotate">
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">
                SPEED × STRENGTH
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">
                FOCUS × ENERGY
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">
                TWO BEAST ONE CAN
              </h2>
            </div>
          </div>
          
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Why be one beast when you can be two? The ultimate fusion of speed and strength in every can.
          </p>
          
          <Link 
            href="#waitlist"
            className="inline-block px-8 py-4 text-xl font-bold uppercase bg-gradient-to-r from-primary to-secondary text-black rounded-full hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Be First. Be Fast. Join Now
          </Link>
        </div>
      </section>

      {/* Product Teaser Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Energy', 'Protein', 'Electrolytes', 'Focus'].map((feature, i) => (
            <div key={i} className="glass p-8 rounded-2xl hover:border-primary/50 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-2xl font-bold uppercase mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {feature}
              </h3>
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

      {/* Flavors Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold uppercase mb-16 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            EXPLORE OUR FLAVORS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Arctic Blast',
                description: 'Cool mint with a hint of citrus',
                color: '#6d5dfc',
                nutrition: {
                  calories: 15,
                  caffeine: 200,
                  protein: 10
                }
              },
              {
                name: 'Tropical Fury',
                description: 'Exotic mango and passionfruit',
                color: '#ff3864',
                nutrition: {
                  calories: 20,
                  caffeine: 180,
                  protein: 12
                }
              },
              {
                name: 'Midnight Berry',
                description: 'Rich blackberry and acai',
                color: '#ff6b35',
                nutrition: {
                  calories: 18,
                  caffeine: 150,
                  protein: 8
                }
              }
            ].map((flavor, i) => (
              <div 
                key={i}
                className="glass p-8 rounded-2xl border-transparent hover:border-primary/50 transition-all hover:scale-[1.02] group relative overflow-hidden flavor-item cursor-pointer"
                onClick={() => {
                  const modal = document.getElementById(`nutrition-modal-${i}`);
                  modal?.classList.remove('hidden');
                  modal?.classList.add('flex');
                }}
              >
                <div 
                  className="flavor-can"
                  style={{ 
                    backgroundColor: flavor.color,
                    border: `4px solid ${flavor.color}`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 from-primary/10 to-secondary/10 transition-opacity duration-300" />
                <div 
                  className="w-16 h-16 rounded-full mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{ 
                    backgroundColor: flavor.color,
                    boxShadow: `0 0 20px ${flavor.color}`
                  }}
                />
                <h3 className="text-2xl font-bold uppercase mb-4">
                  {flavor.name}
                </h3>
                <p className="text-zinc-300 mb-6">
                  {flavor.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-zinc-300">
                    <span>Calories</span>
                    <span>{flavor.nutrition.calories}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Caffeine (mg)</span>
                    <span>{flavor.nutrition.caffeine}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Protein (g)</span>
                    <span>{flavor.nutrition.protein}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Nutrition Modals */}
          {[
            {
              name: 'Arctic Blast',
              nutrition: {
                calories: 15,
                caffeine: 200,
                protein: 10,
                sugar: 0,
                sodium: 50,
                potassium: 100,
                vitaminB12: 100,
                vitaminB6: 100,
                magnesium: 50
              }
            },
            {
              name: 'Tropical Fury',
              nutrition: {
                calories: 20,
                caffeine: 180,
                protein: 12,
                sugar: 2,
                sodium: 60,
                potassium: 120,
                vitaminB12: 120,
                vitaminB6: 120,
                magnesium: 60
              }
            },
            {
              name: 'Midnight Berry',
              nutrition: {
                calories: 18,
                caffeine: 150,
                protein: 8,
                sugar: 1,
                sodium: 55,
                potassium: 110,
                vitaminB12: 110,
                vitaminB6: 110,
                magnesium: 55
              }
            }
          ].map((flavor, i) => (
            <div
              key={i}
              id={`nutrition-modal-${i}`}
              className="hidden fixed inset-0 z-50 items-center justify-center bg-black/50 backdrop-blur-sm p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  e.currentTarget.classList.add('hidden');
                  e.currentTarget.classList.remove('flex');
                }
              }}
            >
              <div className="glass p-8 rounded-2xl max-w-md w-full relative">
                <button
                  onClick={() => {
                    const modal = document.getElementById(`nutrition-modal-${i}`);
                    modal?.classList.add('hidden');
                    modal?.classList.remove('flex');
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold uppercase mb-6">
                  {flavor.name} Nutrition Facts
                </h3>
                <div className="space-y-3">
                  {Object.entries(flavor.nutrition).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span>{value}{key === 'calories' ? '' : key === 'caffeine' ? 'mg' : 'mg'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Vibe Section */}
      <section className="py-32 px-4 glass">
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
      <section id="waitlist" className="py-32 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold uppercase mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Be First. Be Fast.
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Join the waitlist today and be the first to experience the ultimate performance fuel.
          </p>
          
          <WaitlistForm />
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
