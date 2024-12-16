import { FC } from "react";

interface CollectionItemProps {
  name: string;
  description: string;
  image: string;
  price: string;
}

const CollectionItem: FC<CollectionItemProps> = ({
  name,
  description,
  image,
  price,
}) => {
  return (
    <div className="group relative overflow-hidden">
      {/* Image Container */}
      <div className="aspect-[2/3] overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-6 text-white">
          <h3 className="text-xl font-light mb-2">{name}</h3>
          <p className="text-sm text-gray-200 mb-2">{description}</p>
          <p className="text-lg font-medium">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
