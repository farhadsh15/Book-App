import React, { useState } from "react";
import { books as booksData } from "../constants/mockData";

import BookCart from "./BookCard";
import SideCard from "./SideCard";
import styles from "./BookList.module.css";
import SearchBox from "./SearchBox";

function BookList() {
  const [books, setBooks] = useState(booksData)
  const [likes, setLikes] = useState([]);
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    if (!!search) {
        const newBooks = booksData.filter((book) => book.title.toLowerCase().includes(search))
        setBooks(newBooks)
    } else {
        setBooks(booksData)
    }
    setLikes([])
  }

  return (
    <>
        <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler} />
        <div className={!!likes.length ? styles.container : ""}>
            <div className={!!likes.length ? styles.books : ""}>
                {books.map((book) => (
                <BookCart
                    key={book.id}
                    data={book}
                    setLikes={setLikes}
                    likes={likes}
                />
                ))}
            </div>
            {!!likes.length && (
                <div className={!!likes.length ? styles.likes : ""}>
                    <h5>Likes List</h5>
                {likes && likes.map((like) => <SideCard key={like.id} data={like} />)}
                </div>
            )}
        </div>
    </>
  );
}

export default BookList;
