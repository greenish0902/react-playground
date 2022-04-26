import React from "react";
import styles from "./VideoItem.module.css";

const VideoItem = (props) => {
  const snippet = props.item.snippet;
  const datetime = new Date(snippet.publishTime);
  return (
    <li>
      <a href="#">
        <img src={snippet.thumbnails.default.url} alt="video thumbnail" />
        <h4>{snippet.title}</h4>
        <p>{snippet.channelTitle}</p>
        <span className={styles.info}>100만 회</span>
        <span className={styles.info}>{datetime.toString()}</span>
      </a>
    </li>
  );
};

export default VideoItem;
