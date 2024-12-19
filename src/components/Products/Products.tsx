import { FC } from "react";
import ProductGrid from "./ProductGrid";

const Products: FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-4xl font-lunar font-light tracking-wider text-gray-900">
              SHOP ALL PRODUCTS
            </h2>
          </div>
          <p className="text-gray-600 text-center max-w-2xl">
            We would love to be a part of your special day. Visit our studio or
            get in touch with us to start your bridal journey.
          </p>
        </div>
        <ProductGrid />
      </div>
    </section>
  );
};

export default Products;
