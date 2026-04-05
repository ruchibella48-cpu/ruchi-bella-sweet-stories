import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fieldImg from "@/assets/sugarcane-field.jpg";
import makingImg from "@/assets/jaggery-making.jpg";
import heroImg from "@/assets/hero-jaggery.jpg";

const timeline = [
  { year: "The Dream", text: "A vision to bring back the authentic taste of traditional jaggery — the kind our grandmothers used to make." },
  { year: "The Search", text: "Travelling across rural India to find the finest organic sugarcane farms and the most skilled jaggery artisans." },
  { year: "The Craft", text: "Partnering with farming communities who practice ethical, chemical-free agriculture and traditional jaggery-making." },
  { year: "Ruchi Bella", text: "Launching India's first curated organic jaggery brand — bringing the warmth of tradition to modern kitchens." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={fieldImg} alt="Our story" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-jaggery-dark/60" />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-jaggery-honey font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-jaggery-cream max-w-3xl"
          >
            A Journey Back to Sweetness
          </motion.h1>
        </div>
      </section>

      {/* Nostalgia */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div>
                <p className="text-jaggery-caramel font-body text-sm tracking-[0.3em] uppercase mb-4">Childhood Memories</p>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 leading-snug">
                  Remember the taste of <span className="text-jaggery-caramel italic">gur</span> from grandma's kitchen?
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  The warm, golden sweetness that melted on your tongue. The piece of jaggery your grandmother would break off after every meal. The chai that tasted like no café could ever replicate.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Ruchi Bella was born from that very memory — a longing for the authentic sweetness that modern sugar has stolen from our lives. We set out on a journey across India's heartland to rediscover and preserve this forgotten treasure.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-warm-lg">
                <img src={heroImg} alt="Traditional jaggery" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-jaggery-caramel font-body text-sm tracking-[0.3em] uppercase mb-3">Our Journey</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">How It All Began</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="flex gap-6 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-jaggery-caramel flex-shrink-0" />
                    {i < timeline.length - 1 && <div className="w-0.5 h-full bg-jaggery-caramel/20 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-heading text-xl text-jaggery-caramel mb-2">{item.year}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={makingImg} alt="Jaggery production" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-jaggery-dark/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal>
            <div className="text-center px-6 max-w-3xl">
              <h2 className="font-heading text-3xl md:text-4xl text-jaggery-cream mb-4">Traditional Craft, Modern Standards</h2>
              <p className="font-body text-jaggery-cream/80 leading-relaxed">
                Every batch is handcrafted using age-old methods — slowly cooked in iron pans, stirred by skilled artisans, and tested to meet the highest organic standards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-10 shadow-warm">
                <h3 className="font-heading text-2xl text-foreground mb-4">Our Mission</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To make organic jaggery a staple in every Indian kitchen by preserving traditional methods, supporting rural farming communities, and offering an uncompromised, chemical-free sweetener.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-card rounded-2xl p-10 shadow-warm">
                <h3 className="font-heading text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  A world where sweetness comes from nature, not factories. Where every spoonful of jaggery connects you to the earth, to tradition, and to the simple joys of life.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
