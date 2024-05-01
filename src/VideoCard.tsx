import React from "react";

interface Props {
  videoCard: {
    Title: String;
    Channel?: String;
    Link: String;
    Thumbnail?: string;
  };
}

const VideoCard = ({ videoCard }: Props) => {
  return (
    <div className="movie">
      <div>
        <p>{videoCard.Title}</p>
      </div>
      <img src={videoCard.Thumbnail} alt="" />
      <div></div>
      <div>
        <span>{videoCard.Channel}</span>
        <h3>{videoCard.Title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
