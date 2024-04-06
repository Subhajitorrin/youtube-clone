import React from "react";
import Card from "./Card";

function HomeCardList({ completeVideoList }) {
  return (
    <>
      {completeVideoList.map((item, index) => {
        const image = item.snippet.thumbnails.high.url;
        const title = item.snippet.title;
        const channel = item.snippet.channelTitle;
        const views = item.statistics.viewCount;
        const time = item.snippet.publishedAt;
        const id = item.id.videoId;
        // console.log(item);
        return (
          <Card
            key={index}
            image={image}
            title={title}
            channel={channel}
            views={views}
            time={time}
            id={id}
          />
        );
      })}
    </>
  );
}

export default HomeCardList;
