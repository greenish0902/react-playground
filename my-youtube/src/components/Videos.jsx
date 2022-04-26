import React from "react";
import VideoItem from "./VideoItem";
import styles from "./Videos.module.css";

const Videos = (props) => {
  return (
    <div>
      <ul className={styles.ul}>
        {props.items.map((item, index) => {
          return <VideoItem item={item} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Videos;
