import { FC } from "react";
import CollectionGrid from "./CollectionGrid";

const Collection: FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-4xl font-light tracking-wider text-gray-900">
              COLLECTION DISPLAY
            </h2>
          </div>
          <p className="text-gray-600 text-center max-w-2xl">
            Discover our exclusive collections that range from traditional to
            contemporary designs, each crafted with the finest fabrics and
            adorned with intricate embroidery and embellishments.
          </p>
        </div>

        <CollectionGrid />
      </div>
    </section>
  );
};

export default Collection;
