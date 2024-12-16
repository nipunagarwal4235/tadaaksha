import { FC, useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { products } from "./productData";
import { ProductType } from "./types";

const ProductGrid: FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductGrid;
