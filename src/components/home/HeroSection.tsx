import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignatureDarkChocolate from "@/assets/Signature Dark Chocolate.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="space-y-4">
              <span className="inline-block text-sm font-medium text-accent tracking-wider uppercase">
                Handcrafted in India
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight">
                Crafted with Love.{" "}
                <span className="text-primary">Savored with Joy.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Premium Indian handcrafted chocolates made with real cocoa, real
                milk, and real dry fruits. Experience indulgence in its purest
                form.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/shop">
                <Button size="lg" className="btn-premium group text-base px-8">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-base px-8">
                  Our Story
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              {["100% Handcrafted", "No Preservatives", "GST Included"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Floating chocolate pieces effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-amber-700/10 to-orange-800/20 rounded-full blur-2xl transform rotate-12" />

              {/* Image Card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-soft-lg flex items-center justify-center">
                <img
                  src={SignatureDarkChocolate}
                  alt="Signature Dark Chocolate"
                  className="w-[95%] h-[80%] object-contain"
                />
              </div>

              {/* Floating Price Tag */}
              <div className="absolute -bottom-4 -left-4 bg-background rounded-2xl p-4 shadow-soft animate-fade-in">
                <p className="text-sm text-muted-foreground">Starting from</p>
                <p className="font-display text-2xl font-semibold text-primary">
                  ₹100
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full px-4 py-2 shadow-soft animate-fade-in">
                <p className="text-sm font-medium">50g Bars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
