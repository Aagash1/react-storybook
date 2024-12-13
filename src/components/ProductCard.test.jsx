import {it,expect,describe,vi} from "vitest";
import React from "react";
import ProductCard from './ProductCard';
import { render,screen,fireEvent } from "@testing-library/react";

describe('ProductCard', () => {
  const defaultProps = {
    name: 'Product Name',
    price: 29.99,
    image: 'product-image.jpg',
    rating: 4.5,
    inStock: true,
    onAddToCart: vi.fn(),
  };

  it('renders product information correctly', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('Product Name')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
    expect(screen.getByText('⭐ 4.5')).toBeInTheDocument();
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
  });

  it('shows "Out of Stock" message when product is not in stock', () => {
    render(<ProductCard {...defaultProps} inStock={false} />);

    expect(screen.getByText('Out of Stock')).toBeInTheDocument();
    expect(screen.queryByText('Add to Cart')).toBeNull();
  });

  it('calls onAddToCart when button is clicked', () => {
    render(<ProductCard {...defaultProps} />);

    fireEvent.click(screen.getByText('Add to Cart'));
    expect(defaultProps.onAddToCart).toHaveBeenCalled();
  });

  it('toggles text visibility when "Show Text" button is clicked', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.queryByText('This is toggled text!')).toBeNull();

    fireEvent.click(screen.getByText('Show Text'));
    expect(screen.getByText('This is toggled text!')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Hide Text'));
    expect(screen.queryByText('This is toggled text!')).toBeNull();
  });

  it('renders image with correct alt text', () => {
    render(<ProductCard {...defaultProps} />);

    const img = screen.getByAltText('Product Name');
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('product-image.jpg');
  });
});
