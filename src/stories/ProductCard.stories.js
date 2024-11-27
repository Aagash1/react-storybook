import ProductCard from "../components/ProductCard";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
  args: {
  
    name: "Cool Sneakers",
    price: 89.99,
    image: "https://via.placeholder.com/150",
    rating: 4.5,
  },
  argTypes: {
    rating: {control: { type: 'number', min: 1, max: 5 } },
    onAddToCart: {
      action: 'clicked',
    },
  },
};

export const Default = {
  args: {
    inStock: true,
    
  },
};

export const OutOfStock = {
  args: {
    inStock: false,
  },
};

export const OnSale = {
  args: {
    price: 49.99,
  },
};
