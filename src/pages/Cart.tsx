import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotal, clearCart } = useCart();

  const generateWhatsAppMessage = () => {
    const itemsList = items
      .map(item => `${item.quantity}x ${item.product.name} (₹${item.product.price * item.quantity})`)
      .join('\n');
    
    const message = `Hi! I'd like to order:\n\n${itemsList}\n\n*Total: ₹${getTotal()}*\n\nPlease confirm availability and delivery details.`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = '919876543210'; // Replace with actual number
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <Layout>
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-card flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any chocolates yet. 
                Let's fix that!
              </p>
              <Link to="/shop">
                <Button size="lg" className="btn-premium">
                  Browse Chocolates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-card py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Your Cart
          </h1>
          <p className="text-muted-foreground mt-2">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-6 bg-card rounded-2xl p-6 card-float"
                >
                  {/* Image */}
                  <div className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-amber-900/10 to-amber-600/10 rounded-xl flex items-center justify-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <Link
                          to={`/product/${item.product.id}`}
                          className="font-display text-lg font-medium text-foreground hover:text-primary transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {item.product.weight}
                        </p>
                      </div>
                      <p className="font-display text-lg font-semibold text-primary whitespace-nowrap">
                        ₹{item.product.price * item.quantity}
                      </p>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center bg-background rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-medium text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-8 sticky top-24">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">₹{getTotal()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">
                      {getTotal() >= 500 ? 'Free' : '₹50'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">GST</span>
                    <span className="text-foreground">Included</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-8">
                  <div className="flex justify-between">
                    <span className="font-display text-lg font-medium text-foreground">
                      Total
                    </span>
                    <span className="font-display text-2xl font-semibold text-primary">
                      ₹{getTotal() >= 500 ? getTotal() : getTotal() + 50}
                    </span>
                  </div>
                  {getTotal() < 500 && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Add ₹{500 - getTotal()} more for free shipping
                    </p>
                  )}
                </div>

                <Button
                  size="lg"
                  onClick={handleWhatsAppOrder}
                  className="w-full btn-premium bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  You'll be redirected to WhatsApp to complete your order
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
