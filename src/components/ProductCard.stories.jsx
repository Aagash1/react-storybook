import ProductCard from "./ProductCard.jsx";
import { userEvent, within ,expect} from '@storybook/test';
import React from "react";
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
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    inStock: true,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    }
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
  decorators: [ (Story) => { return (
    <div style={{ backgroundColor: "red", padding: "20px", borderRadius: "8px" }}>
         
        <Story />
    </div>
  )}],
};

OnSale.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Find the button by its text
  const button = canvas.getByText('Show Text');

  // Simulate a click event
  await userEvent.click(button);

  expect(canvas.getByText('This is toggled text!')).toBeInTheDocument();
};