import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-semibold mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const variantColors = {
    dark: 'from-amber-900/20 to-amber-800/10',
    milk: 'from-amber-600/20 to-amber-500/10',
    'dry-fruit': 'from-orange-700/20 to-orange-600/10',
    assorted: 'from-amber-900/10 via-amber-600/10 to-orange-700/10',
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-card py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div className={cn(
              "relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br p-12 flex items-center justify-center",
              variantColors[product.variant]
            )}>
              <img
                src={product.image}
                alt={product.name}
                className="w-3/4 h-3/4 object-contain"
              />
              <span className="absolute top-6 left-6 text-sm font-medium text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full capitalize">
                {product.variant.replace('-', ' ')}
              </span>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-medium text-accent tracking-wider uppercase mb-2">
                {product.category.replace('-', ' ')}
              </span>
              
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-display text-4xl font-semibold text-primary">
                  ₹{product.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {product.weight} • GST Included
                </span>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-medium text-foreground mb-3">
                  Ingredients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="text-sm bg-card text-muted-foreground px-3 py-1.5 rounded-full"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center bg-card rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-4 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-4 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className={cn(
                    "flex-1 btn-premium",
                    added && "bg-green-600 hover:bg-green-600"
                  )}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Add to Cart • ₹{product.price * quantity}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
