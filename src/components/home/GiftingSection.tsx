import { Link } from 'react-router-dom';
import { Gift, Heart, Cake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const occasions = [
  {
    icon: Gift,
    title: 'Festive Gifting',
    description: 'Diwali, Rakhi, Christmas – make every celebration sweeter with our premium gift boxes.',
    image: '/placeholder.svg',
  },
  {
    icon: Heart,
    title: 'Love & Romance',
    description: 'Express your feelings with the language of chocolate. Perfect for anniversaries and special moments.',
    image: '/placeholder.svg',
  },
  {
    icon: Cake,
    title: 'Corporate Gifts',
    description: 'Impress clients and appreciate employees with elegant chocolate hampers.',
    image: '/placeholder.svg',
  },
];

export const GiftingSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block text-sm font-medium text-accent tracking-wider uppercase mb-4">
            Gift with Love
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Perfect for Every Occasion
          </h2>
          <p className="text-muted-foreground text-lg">
            Our beautifully packaged chocolates make unforgettable gifts. 
            Spread joy and sweetness to your loved ones.
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {occasions.map((occasion, index) => (
            <div
              key={occasion.title}
              className="group bg-background rounded-3xl overflow-hidden card-float animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-accent/10 to-primary/10 p-8 flex items-center justify-center">
                <img
                  src={occasion.image}
                  alt={occasion.title}
                  className="w-2/3 h-2/3 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center text-accent">
                  <occasion.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {occasion.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {occasion.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/shop?category=gift-boxes">
            <Button size="lg" className="btn-premium">
              Explore Gift Boxes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
