import { Leaf, Milk, Cherry, Shield } from 'lucide-react';

const ingredients = [
  {
    icon: Leaf,
    title: 'Real Cocoa',
    description: 'Premium cocoa beans sourced from the finest plantations for rich, authentic flavor.',
  },
  {
    icon: Milk,
    title: 'Real Milk',
    description: 'Farm-fresh whole milk for that creamy, melt-in-your-mouth texture.',
  },
  {
    icon: Cherry,
    title: 'Real Dry Fruits',
    description: 'Hand-selected almonds, cashews, and raisins for perfect crunch and sweetness.',
  },
  {
    icon: Shield,
    title: 'No Preservatives',
    description: 'Made fresh in small batches without artificial additives or preservatives.',
  },
];

export const IngredientPurity = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block text-sm font-medium text-accent tracking-wider uppercase mb-4">
            Pure Ingredients
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What Makes Us Different
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe in transparency. Every bar is made with real, quality ingredients 
            you can taste and trust.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((item, index) => (
            <div
              key={item.title}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
