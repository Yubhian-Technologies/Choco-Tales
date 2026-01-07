import SignatureDarkChocolate from '@/assets/Signature Dark Chocolate.jpg';
import Milkchocolate from '@/assets/Milk chocolate.jpg';
import DryFruitChocolate from '@/assets/dry fruit chocolate.jpg';
import DarkIntense from '@/assets/Dark Intense.jpg'
import ClassicTrioPack from '@/assets/Classic Trio Pack.jpg'
import LuxuryGiftBox from '@/assets/Luxury Gift Box.jpg'
import FamilyFavPack from '@/assets/Family Fav Pack.jpg'

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'chocolate-bars' | 'combo-packs' | 'gift-boxes';
  variant: 'dark' | 'milk' | 'dry-fruit' | 'assorted';
  weight: string;
  ingredients: string[];
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  // Chocolate Bars
  {
    id: 'dark-chocolate-50g',
    name: 'Signature Dark Chocolate',
    description: 'Rich, intense dark chocolate crafted with premium cocoa beans. A symphony of deep flavors for the true connoisseur.',
    price: 120,
    category: 'chocolate-bars',
    variant: 'dark',
    weight: '50g',
    ingredients: ['Premium Cocoa Mass', 'Cocoa Butter', 'Sugar', 'Natural Vanilla'],
    image: SignatureDarkChocolate,
    featured: true,
  },
  {
    id: 'milk-chocolate-50g',
    name: 'Creamy Milk Chocolate',
    description: 'Silky smooth milk chocolate made with farm-fresh milk. Perfectly balanced sweetness in every bite.',
    price: 100,
    category: 'chocolate-bars',
    variant: 'milk',
    weight: '50g',
    ingredients: ['Cocoa Butter', 'Whole Milk Powder', 'Sugar', 'Cocoa Mass', 'Natural Vanilla'],
    image: Milkchocolate,
    featured: true,
  },
  {
    id: 'dry-fruit-chocolate-50g',
    name: 'Dry Fruit Delight',
    description: 'Premium chocolate generously studded with roasted almonds, cashews, and raisins. A celebration of textures.',
    price: 140,
    category: 'chocolate-bars',
    variant: 'dry-fruit',
    weight: '50g',
    ingredients: ['Cocoa Mass', 'Almonds', 'Cashews', 'Raisins', 'Cocoa Butter', 'Sugar'],
    image: DryFruitChocolate,
    featured: true,
  },
  {
    id: 'dark-intense-50g',
    name: 'Dark Intense 72%',
    description: 'For those who appreciate the purest form of chocolate. 72% cocoa for an unforgettable experience.',
    price: 130,
    category: 'chocolate-bars',
    variant: 'dark',
    weight: '50g',
    ingredients: ['Premium Cocoa Mass 72%', 'Cocoa Butter', 'Cane Sugar'],
    image: DarkIntense,
    featured: true
  },
  {
    id: 'milk-hazelnut-50g',
    name: 'Hazelnut Milk Chocolate',
    description: 'Creamy milk chocolate with crunchy roasted hazelnuts. A classic combination perfected.',
    price: 135,
    category: 'chocolate-bars',
    variant: 'milk',
    weight: '50g',
    ingredients: ['Cocoa Butter', 'Hazelnuts', 'Whole Milk Powder', 'Sugar', 'Cocoa Mass'],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 'fig-almond-50g',
    name: 'Fig & Almond Bliss',
    description: 'Dark chocolate with sweet figs and crunchy almonds. An exotic flavor journey.',
    price: 140,
    category: 'chocolate-bars',
    variant: 'dry-fruit',
    weight: '50g',
    ingredients: ['Cocoa Mass', 'Dried Figs', 'Almonds', 'Cocoa Butter', 'Sugar'],
    image: '/placeholder.svg',
  },

  // Combo Packs
  {
    id: 'trio-classics',
    name: 'Classic Trio Pack',
    description: 'Our three signature flavors in one elegant pack. Perfect for those who want it all.',
    price: 340,
    category: 'combo-packs',
    variant: 'assorted',
    weight: '150g (3 x 50g)',
    ingredients: ['Dark Chocolate', 'Milk Chocolate', 'Dry Fruit Chocolate'],
    image: ClassicTrioPack,
    featured: true,
  },
  {
    id: 'dark-lovers-pack',
    name: 'Dark Lovers Collection',
    description: 'Three exquisite dark chocolate variants for the sophisticated palate.',
    price: 360,
    category: 'combo-packs',
    variant: 'dark',
    weight: '150g (3 x 50g)',
    ingredients: ['Signature Dark', 'Dark Intense 72%', 'Dark with Sea Salt'],
    image: '/placeholder.svg',
  },
  {
    id: 'family-pack-6',
    name: 'Family Favorites Pack',
    description: 'Six handpicked chocolates for the whole family to enjoy. Something for everyone.',
    price: 650,
    category: 'combo-packs',
    variant: 'assorted',
    weight: '300g (6 x 50g)',
    ingredients: ['2x Dark', '2x Milk', '2x Dry Fruit Chocolates'],
    image: FamilyFavPack,
  },

  // Gift Boxes
  {
    id: 'luxury-gift-box',
    name: 'Luxury Gift Box',
    description: 'An elegant presentation of our finest chocolates. Wrapped in premium packaging for that special someone.',
    price: 550,
    category: 'gift-boxes',
    variant: 'assorted',
    weight: '200g (4 x 50g)',
    ingredients: ['Signature Dark', 'Creamy Milk', 'Dry Fruit Delight', 'Hazelnut Milk'],
    image: LuxuryGiftBox,
    featured: true,
  },
  {
    id: 'celebration-hamper',
    name: 'Celebration Hamper',
    description: 'The ultimate chocolate gift. Six premium bars in a handcrafted wooden box.',
    price: 850,
    category: 'gift-boxes',
    variant: 'assorted',
    weight: '300g (6 x 50g)',
    ingredients: ['Complete Signature Collection'],
    image: '/placeholder.svg',
  },
  {
    id: 'festive-treasure',
    name: 'Festive Treasure Box',
    description: 'Perfect for Diwali, Rakhi, or any celebration. Beautifully adorned gift box with our finest selection.',
    price: 750,
    category: 'gift-boxes',
    variant: 'assorted',
    weight: '250g (5 x 50g)',
    ingredients: ['Curated Festival Collection'],
    image: '/placeholder.svg',
  },
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'chocolate-bars', name: 'Chocolate Bars' },
  { id: 'combo-packs', name: 'Combo Packs' },
  { id: 'gift-boxes', name: 'Gift Boxes' },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductsByCategory = (category: string) => 
  category === 'all' ? products : products.filter(p => p.category === category);

export const getProductById = (id: string) => products.find(p => p.id === id);
