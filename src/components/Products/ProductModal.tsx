import { FC, useState } from "react";
import { X } from "lucide-react";
import { ProductType } from "./types";

interface ProductModalProps {
  product: ProductType;
  onClose: () => void;
}

const ProductModal: FC<ProductModalProps> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-4xl">
        {/* Close Button - Now visible on all screen sizes */}
        <button
          onClick={onClose}
          className="absolute -top-4 md:-top-12 right-0 p-2 bg-black/50 md:bg-transparent rounded-full md:rounded-none text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Image */}
        <div className="aspect-[3/4] bg-white">
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.name} - View ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 ${
                currentImageIndex === index
                  ? "ring-2 ring-white"
                  : "opacity-70 hover:opacity-100"
              } transition-opacity`}
            >
              <img
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
