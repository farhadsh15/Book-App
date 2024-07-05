import React, { useState } from "react";
import styles from "./BookCard.module.css";
import { AiFillHeart } from "react-icons/ai";

function BookCart({ data, data: { id, image, title, author, pages, language }, setLikes, likes }) {
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setIsLike((like) => !like)
    if (!likes.find(item => item.id === id)) {
        setLikes(like => [...like, data])
    }
    if (likes.find(item => item.id === id)) {
        setLikes((like) => like.filter((item) => item.id !== id))
    }
  }

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <p>{title}</p>
        <p>{author}</p>
        <div>
          <span>{pages} pages</span>
          <span>{language}</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart color={isLike ? "red" : "#e0e0e0"} fontSize="1.8rem" />
      </button>
    </div>
  );
}

export default BookCart;
