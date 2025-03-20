"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppleIcon, PlayIcon } from "lucide-react";

export function DownloadSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/5">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
            Get Started Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Download our app now and experience the difference.
            {/* <br />
            Available on iOS and Android. */}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 gap-2"
              onClick={() => {
                window.open(
                  "https://apps.apple.com/tr/app/geniepic/id6741926921?l=tr",
                  "_blank"
                );
              }}
            >
              <AppleIcon className="w-5 h-5" />
              App Store
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 gap-2"
            >
              <PlayIcon className="w-5 h-5" />
              Google Play
            </Button> */}
          </div>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            Coming soon to Android and iOS.
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}
