import React from 'react'
import booksDate from '../Books';
import Book from './Book'
export default function BooksList() {
    const bookList = booksDate.map(book =>
        <Book bookData={book} />
    )
    return (
        <div class="books-list">
            {bookList}
        </div>
    )
}
