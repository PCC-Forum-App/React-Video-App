import React from "react";

interface Props {
  videoCard: {
    Title: string;
    Channel?: string;
    Link: string;
    Thumbnail?: string;
  };
}

const VideoCard = ({ videoCard }: Props) => {
  return (
    <a className="movie" href={videoCard.Link} target="_blank">
      <div className= "movie">
        <p>{videoCard.Title}</p>
      </div>
      <img src={videoCard.Thumbnail} alt={videoCard.Title} />
      <div></div>
      <div>
        <span>{videoCard.Channel}</span>
        <h3>{videoCard.Title}</h3>
      </div>
    </a>
  );
};

export default VideoCard;
