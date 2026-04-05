import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-jaggery.jpg";
import powderImg from "@/assets/product-powder.jpg";
import cubesImg from "@/assets/product-cubes.jpg";
import barImg from "@/assets/product-bar.jpg";
import fieldImg from "@/assets/sugarcane-field.jpg";
import makingImg from "@/assets/jaggery-making.jpg";
import { Leaf, Shield, Heart, Sun, Coffee, Baby, Flame, Cookie, Droplets } from "lucide-react";

const products = [
  { name: "Jaggery Powder", description: "Finely ground organic jaggery, perfect for everyday sweetening. Dissolves effortlessly into warm beverages and desserts.", image: powderImg },
  { name: "Jaggery Cubes", description: "Perfectly portioned cubes of pure goodness. Drop one into your chai and let memories of home flood back.", image: cubesImg },
  { name: "Jaggery Bar", description: "Traditional block jaggery, crafted the way it has been for centuries. Break a piece and taste authenticity.", image: barImg },
];

const useCases = [
  { icon: Sun, label: "Daily Use", content: "Replace refined sugar in your daily diet with Ruchi Bella jaggery. A spoonful of golden sweetness that nourishes your body with essential minerals like iron, magnesium, and potassium." },
  { icon: Coffee, label: "Chai & Coffee", content: "Transform your morning ritual. Drop a Ruchi Bella jaggery cube into steaming chai or coffee and experience the rich, caramel-like sweetness that refined sugar can never match." },
  { icon: Shield, label: "Immunity", content: "Jaggery is nature's immunity booster. Rich in antioxidants and minerals, Ruchi Bella jaggery helps purify blood, aid digestion, and strengthen your body's natural defenses." },
  { icon: Flame, label: "Baking", content: "Elevate your baking with organic jaggery powder. From cookies to cakes, Ruchi Bella adds a warm, complex sweetness and beautiful golden color to every creation." },
  { icon: Baby, label: "Kids", content: "Give your children the sweetness they love without the guilt. Ruchi Bella jaggery is chemical-free, naturally nutritious, and loved by kids for its delicious caramel flavor." },
  { icon: Droplets, label: "Detox", content: "A small piece of jaggery after meals aids digestion and acts as a natural detox agent. Ancient Ayurvedic wisdom meets modern wellness with Ruchi Bella." },
];

const whyReasons = [
  { icon: Leaf, title: "100% Organic", desc: "Certified organic sugarcane grown without pesticides or synthetic fertilizers." },
  { icon: Shield, title: "Chemical-Free", desc: "No bleaching agents, no preservatives. Just pure, unadulterated jaggery." },
  { icon: Heart, title: "Ethically Sourced", desc: "Fair wages for farmers, sustainable practices, and community upliftment." },
  { icon: Cookie, title: "Traditional Methods", desc: "Age-old techniques passed down through generations of artisanal jaggery makers." },
];

const Index = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Organic Jaggery" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-jaggery-cream leading-tight mb-6"
          >
            Ruchi Bella is India's first curated & ethically-manufactured{" "}
            <span className="text-gradient-gold">Organic Jaggery</span> brand built to bring your childhood memories gushing back!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="font-body text-jaggery-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Step into a world of enchanting flavors and indulgent sweetness with our divine collection of golden essences...
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Link to="/products">
              <Button variant="hero" size="xl">Explore Our Products</Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-jaggery-cream/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-jaggery-cream/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Tagline */}
      <section className="py-24 bg-gradient-warm">
        <ScrollReveal>
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground italic leading-snug max-w-3xl mx-auto">
              "No more sugar coating from now on, enjoy the{" "}
              <span className="text-jaggery-caramel">real deal</span> with Ruchi Bella!"
            </h2>
          </div>
        </ScrollReveal>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-jaggery-caramel font-body text-sm tracking-[0.3em] uppercase mb-3">Our Collection</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">Golden Essences</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-card rounded-2xl overflow-hidden shadow-warm cursor-pointer group"
                  onClick={() => setSelectedProduct(selectedProduct === i ? null : i)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-heading text-xl text-foreground mb-2">{product.name}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <AnimatePresence>
            {selectedProduct !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="mt-12 max-w-3xl mx-auto overflow-hidden"
              >
                <div className="bg-card rounded-2xl p-8 shadow-warm-lg flex flex-col md:flex-row gap-8 items-center">
                  <img
                    src={products[selectedProduct].image}
                    alt={products[selectedProduct].name}
                    className="w-48 h-48 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-heading text-2xl text-foreground mb-3">{products[selectedProduct].name}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{products[selectedProduct].description}</p>
                    <Link to="/products">
                      <Button variant="outline-warm" size="default" className="mt-4">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-jaggery-caramel font-body text-sm tracking-[0.3em] uppercase mb-3">Ways to Enjoy</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">Sweeten Every Moment</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {useCases.map((uc, i) => {
                  const Icon = uc.icon;
                  return (
                    <motion.button
                      key={uc.label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveUseCase(i)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-full font-body text-sm tracking-wide transition-all duration-500 ${
                        activeUseCase === i
                          ? "bg-jaggery-caramel text-jaggery-dark shadow-warm"
                          : "bg-card text-muted-foreground hover:bg-jaggery-cream"
                      }`}
                    >
                      <Icon size={16} />
                      {uc.label}
                    </motion.button>
                  );
                })}
              </div>
            </ScrollReveal>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeUseCase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-warm text-center"
              >
                <div className="w-16 h-16 rounded-full bg-jaggery-honey/20 flex items-center justify-center mx-auto mb-6">
                  {(() => {
                    const Icon = useCases[activeUseCase].icon;
                    return <Icon size={28} className="text-jaggery-caramel" />;
                  })()}
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4">{useCases[activeUseCase].label}</h3>
                <p className="font-body text-muted-foreground leading-relaxed max-w-xl mx-auto">{useCases[activeUseCase].content}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Why Ruchi Bella */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-jaggery-caramel font-body text-sm tracking-[0.3em] uppercase mb-3">Our Promise</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">Why Ruchi Bella?</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whyReasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <ScrollReveal key={reason.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="bg-card rounded-2xl p-8 text-center shadow-warm group"
                  >
                    <div className="w-14 h-14 rounded-full bg-jaggery-honey/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-jaggery-honey/30 transition-colors duration-500">
                      <Icon size={24} className="text-jaggery-caramel" />
                    </div>
                    <h3 className="font-heading text-lg text-foreground mb-2">{reason.title}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Storytelling - Farm & Production */}
      <section className="py-0">
        <div className="relative h-[60vh] overflow-hidden">
          <img src={fieldImg} alt="Sugarcane fields" loading="lazy" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-jaggery-dark/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <ScrollReveal>
              <div className="text-center px-6 max-w-3xl">
                <h2 className="font-heading text-3xl md:text-4xl text-jaggery-cream mb-4">From the Fields of India</h2>
                <p className="font-body text-jaggery-cream/80 text-lg leading-relaxed">
                  Our sugarcane grows in the fertile soils of rural India, kissed by golden sunlight and nurtured by generations of farming wisdom.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-jaggery-deep flex items-center p-12 md:p-16">
            <ScrollReveal direction="left">
              <div>
                <p className="text-jaggery-honey font-body text-sm tracking-[0.3em] uppercase mb-4">The Process</p>
                <h3 className="font-heading text-2xl md:text-3xl text-jaggery-cream mb-4">Crafted with Tradition</h3>
                <p className="font-body text-jaggery-cream/70 leading-relaxed">
                  Every batch of Ruchi Bella jaggery is made using time-honored techniques. Fresh sugarcane juice is slowly boiled in iron pans over wood fire, stirred by skilled artisans who have inherited this craft from their forefathers. No machines, no shortcuts — just pure, patient craftsmanship.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="aspect-square md:aspect-auto overflow-hidden">
            <img src={makingImg} alt="Traditional jaggery making" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-warm">
        <ScrollReveal>
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Experience the Sweetness of Tradition</h2>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Discover our carefully curated collection of organic jaggery products, each one a tribute to India's rich heritage.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/products"><Button variant="hero" size="lg">View Products</Button></Link>
              <Link to="/about"><Button variant="outline-warm" size="lg">Our Story</Button></Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
