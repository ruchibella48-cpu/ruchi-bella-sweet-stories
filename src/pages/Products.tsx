import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import powderImg from "@/assets/product-powder.jpg";
import cubesImg from "@/assets/product-cubes.jpg";
import barImg from "@/assets/product-bar.jpg";
import { Leaf, Droplets, Heart, Sun, Sparkles } from "lucide-react";

const products = [
  {
    name: "Jaggery Powder",
    tagline: "The Everyday Essential",
    image: powderImg,
    description: "Our finely ground jaggery powder is the perfect substitute for refined sugar. It dissolves effortlessly into beverages, desserts, and everyday cooking, carrying with it the rich minerals and warmth of traditional jaggery.",
    benefits: [
      "Rich in iron, magnesium & potassium",
      "Instant dissolving — perfect for beverages",
      "Retains natural molasses nutrients",
      "Low glycemic index compared to sugar",
    ],
    useCases: ["Morning chai & coffee", "Baking & desserts", "Smoothies & milkshakes", "Everyday cooking sweetener"],
  },
  {
    name: "Jaggery Cubes",
    tagline: "Perfectly Portioned Goodness",
    image: cubesImg,
    description: "Each cube is a precisely measured dose of natural sweetness. Drop one into your steaming cup and watch it melt into golden perfection. Our cubes are crafted for convenience without compromising tradition.",
    benefits: [
      "Pre-portioned for consistency",
      "Slow-release energy source",
      "Aids digestion after meals",
      "Natural blood purifier",
    ],
    useCases: ["Drop into chai or coffee", "Post-meal digestive aid", "Energy boost during workouts", "Kids' healthy snack"],
  },
  {
    name: "Jaggery Bar",
    tagline: "The Classic Block",
    image: barImg,
    description: "The traditional form of jaggery, handcrafted in iron pans using centuries-old techniques. Break a piece, taste the authenticity. Our bar is dense, rich, and carries the deepest flavor profile of all our products.",
    benefits: [
      "Highest concentration of minerals",
      "Long shelf life — no preservatives needed",
      "Versatile for cooking and eating",
      "Supports respiratory health",
    ],
    useCases: ["Traditional recipes & sweets", "Break & eat as a snack", "Grating into dishes", "Festive & ceremonial use"],
  },
];

const Products = () => {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-warm">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-jaggery-caramel font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            Our Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl text-foreground mb-4"
          >
            Golden Essences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-body text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Each product is a tribute to tradition — crafted with care, free from chemicals, and rich with nature's goodness.
          </motion.p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={0}>
              <div className={`mb-24 last:mb-0`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-2xl overflow-hidden shadow-warm-lg"
                    >
                      <img src={product.image} alt={product.name} loading="lazy" className="w-full aspect-square object-cover" />
                    </motion.div>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <p className="text-jaggery-caramel font-body text-sm tracking-[0.3em] uppercase mb-2">{product.tagline}</p>
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">{product.name}</h2>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setExpandedProduct(expandedProduct === i ? null : i)}
                      className="text-jaggery-caramel font-body text-sm tracking-wider uppercase flex items-center gap-2 mb-6"
                    >
                      {expandedProduct === i ? "Show Less" : "View Details"}
                      <motion.span animate={{ rotate: expandedProduct === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        ↓
                      </motion.span>
                    </motion.button>

                    <AnimatePresence>
                      {expandedProduct === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-card rounded-xl p-6 shadow-warm">
                              <div className="flex items-center gap-2 mb-3">
                                <Sparkles size={16} className="text-jaggery-caramel" />
                                <h4 className="font-heading text-base text-foreground">Benefits</h4>
                              </div>
                              <ul className="space-y-2">
                                {product.benefits.map((b) => (
                                  <li key={b} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                                    <Leaf size={12} className="text-jaggery-caramel mt-1 flex-shrink-0" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-card rounded-xl p-6 shadow-warm">
                              <div className="flex items-center gap-2 mb-3">
                                <Sun size={16} className="text-jaggery-caramel" />
                                <h4 className="font-heading text-base text-foreground">How to Use</h4>
                              </div>
                              <ul className="space-y-2">
                                {product.useCases.map((u) => (
                                  <li key={u} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                                    <Heart size={12} className="text-jaggery-caramel mt-1 flex-shrink-0" />
                                    {u}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
