import { FC } from "react";
import { ProductType } from "./types";

interface ProductCardProps {
  product: ProductType;
  onClick: () => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
        <img
          src={product.images[0]}
          alt={product.id.toString()}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ProductCard;
