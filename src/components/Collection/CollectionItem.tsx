import { FC } from "react";

interface CollectionItemProps {
  video: string;
}

const CollectionItem: FC<CollectionItemProps> = ({ video }) => {
  return (
    <div className="aspect-auto overflow-hidden bg-gray-200">
      <video autoPlay loop muted width="640" height="360">
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CollectionItem;
