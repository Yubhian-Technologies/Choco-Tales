import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const variantColors = {
    dark: 'bg-amber-900/10',
    milk: 'bg-amber-600/10',
    'dry-fruit': 'bg-orange-700/10',
    assorted: 'bg-gradient-to-br from-amber-900/10 via-amber-600/10 to-orange-700/10',
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "group block bg-card rounded-2xl overflow-hidden card-float",
        className
      )}
    >
      {/* Image Container */}
      <div className={cn(
        "relative aspect-square p-8 flex items-center justify-center",
        variantColors[product.variant]
      )}>
        <img
          src={product.image}
          alt={product.name}
          className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick Add Button */}
        <Button
          size="icon"
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-primary hover:bg-primary/90 shadow-soft"
        >
          <Plus className="h-4 w-4" />
        </Button>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 text-xs font-medium text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full capitalize">
          {product.variant.replace('-', ' ')}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-semibold text-primary">
            ₹{product.price}
          </span>
          <span className="text-xs text-muted-foreground">
            {product.weight}
          </span>
        </div>
      </div>
    </Link>
  );
};
