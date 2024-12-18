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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Image */}
        <div className="w-full aspect-[4/3] bg-gray-100 rounded-t-lg overflow-hidden">
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.id} - View ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-2 p-4 overflow-x-auto bg-gray-50 rounded-b-lg">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-md border-2 ${
                currentImageIndex === index
                  ? "border-black"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <img
                src={image}
                alt={`${product.id} thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
