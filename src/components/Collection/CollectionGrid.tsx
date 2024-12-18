import { FC } from "react";
import CollectionItem from "./CollectionItem";
import VideoOne from "../../assets/video-one.webm";
import VideoTwo from "../../assets/video-two.webm";
import VideoThree from "../../assets/video-three.webm";

const collections = [
  {
    id: 1,
    video: VideoOne,
  },
  {
    id: 2,
    video: VideoTwo,
  },
  {
    id: 3,
    video: VideoThree,
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
