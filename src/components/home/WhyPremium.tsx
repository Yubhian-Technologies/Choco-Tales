import { Award, Heart, Sparkles, Timer } from 'lucide-react';

const features = [
  {
    icon: Timer,
    title: 'Small-Batch Production',
    description: 'Each batch is carefully crafted to ensure consistent quality and freshness in every bar.',
  },
  {
    icon: Sparkles,
    title: 'Hygienic Manufacturing',
    description: 'State-of-the-art facilities with strict quality controls for your peace of mind.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every chocolate is handcrafted by skilled artisans who pour their heart into each creation.',
  },
  {
    icon: Award,
    title: 'No Unnecessary Fillers',
    description: 'What you taste is pure chocolate – no palm oil, no artificial flavors, no compromises.',
  },
];

export const WhyPremium = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-card to-transparent" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-card shadow-soft-lg">
              <img
                src="/placeholder.svg"
                alt="Chocolate making process"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-soft max-w-xs">
              <p className="font-display text-3xl font-semibold mb-1">100%</p>
              <p className="text-sm text-primary-foreground/80">Handcrafted with real ingredients</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-medium text-accent tracking-wider uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Premium Quality, Honest Craftsmanship
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We're not just another chocolate brand. We're artisans dedicated to bringing 
              you the finest handcrafted chocolates that India has to offer.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                      <feature.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-medium text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
