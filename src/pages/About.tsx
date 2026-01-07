import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Leaf, Award, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion for Craft',
    description: 'Every bar is made with love and attention to detail that mass production can never match.',
  },
  {
    icon: Leaf,
    title: 'Pure Ingredients',
    description: 'We source the finest cocoa and use only real, natural ingredients in our chocolates.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'No shortcuts, no compromises. Just honest, premium chocolate that speaks for itself.',
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'Supporting local suppliers and creating opportunities in our community.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-accent tracking-wider uppercase mb-4">
              Our Story
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Crafted with Love, Made in India
            </h1>
            <p className="text-lg text-muted-foreground">
              Born from a passion for authentic chocolate-making, Choco-Tales brings you 
              handcrafted chocolates that celebrate real ingredients and traditional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-card shadow-soft-lg">
                <img
                  src="/placeholder.svg"
                  alt="Our chocolate making process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-soft">
                <p className="font-display text-3xl font-semibold">2020</p>
                <p className="text-sm text-primary-foreground/80">Founded</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                From Kitchen Experiments to Premium Chocolates
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  It started with a simple question: why can't Indian chocolate be as good as 
                  the best in the world? Our founder, a passionate home cook with a love for 
                  all things cocoa, set out to create chocolates that could stand alongside 
                  the finest international brands.
                </p>
                <p>
                  After months of experimentation in a small Mumbai kitchen, perfecting recipes 
                  with real cocoa, fresh milk, and premium dry fruits, Choco-Tales was born. 
                  Today, we still make every bar with the same care and attention to detail 
                  as those first kitchen experiments.
                </p>
                <p>
                  Our mission is simple: to bring you honest, delicious chocolate made with 
                  real ingredients you can taste and trust. No palm oil, no artificial flavors, 
                  no shortcuts – just pure chocolate bliss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="inline-block text-sm font-medium text-accent tracking-wider uppercase mb-4">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
              Our Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-6">
            Ready to Taste the Difference?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Experience the rich, authentic taste of handcrafted Indian chocolates.
          </p>
          <Link to="/shop">
            <Button size="lg" className="btn-premium">
              Shop Our Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
