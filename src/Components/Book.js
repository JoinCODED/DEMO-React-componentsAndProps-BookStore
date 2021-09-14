import React from 'react'

export default function Book(props) {
    return (
        <div class="book">
            <img
                alt={props.bookData.name}
                src={props.bookData.img}
            />
            <p>{props.bookData.name}</p>
            <p>{props.bookData.price} KD</p>
        </div>
    )
}
