import { FC } from "react";
import CollectionItem from "./CollectionItem";
import DisplayOne from "../../assets/display-one.png";
import DisplayTwo from "../../assets/display-two.png";
import DisplayThree from "../../assets/display-three.png";

const collections = [
  {
    id: 1,
    name: "Ruby Enchantment",
    description:
      "Hand-embroidered red organza cape with crystal embellishments",
    image: DisplayOne,
    price: "$2,499",
  },
  {
    id: 2,
    name: "Pink Lotus",
    description: "Structured pink lehenga with traditional fan motifs",
    image: DisplayTwo,
    price: "$1,899",
  },
  {
    id: 3,
    name: "Coral Dream",
    description: "Contemporary draped ensemble with detailed handwork",
    image: DisplayThree,
    price: "$2,199",
  },
];

const CollectionGrid: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {collections.map((item) => (
        <CollectionItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CollectionGrid;
