import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FinalCTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            Experience Fine Chocolate
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Indulge in the art of handcrafted Indian chocolates. 
            Every bite tells a story of passion, quality, and pure cocoa bliss.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button
                size="lg"
                variant="secondary"
                className="group text-base px-8 bg-background text-foreground hover:bg-background/90"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Trust elements */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-primary-foreground/70">
            <span>✓ Free shipping on orders above ₹500</span>
            <span>✓ 100% Handcrafted</span>
            <span>✓ GST Included</span>
          </div>
        </div>
      </div>
    </section>
  );
};
