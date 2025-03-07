"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Bot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: ShieldCheck,
    title: "Unmatched quality",
    description: "Get more natural and high-resolution results.",
  },
  {
    icon: Zap,
    title: "Fast and intuitive",
    description: "Transform your photos professionally with just one tap.",
  },
  {
    icon: Bot,
    title: "Advanced AI technology",
    description: "Achieve flawless edits without losing details",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
            Why Choose Our App?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make our app stand out from the crowd.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group hover:bg-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-500">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>
    </section>
  );
}
