# React - Day 1 Book Shop

## What is this demo?
A book store with a description and a list of books.

## What are the objectives?

1. Creating a react project.
2. Creating functional components.
3. Pass props from parent to component to child.

## Steps

Do not clone and use this, follow the steps to create a project like this one with the students.

## Instructor Notes

### Steps
1. Create a react project `npx create-react-app book-store`.
2. `cd book-store` `npm start`.
3. Play around in app.js
4. Show that we must have a parent tag.
5. Show that we must add className not class.
6. Place a ready css file.
7. Add an image and title for your website.
8. Save the title into JS and render it (emphasize on the {})
9. Create an array of books.



11. Render the first book manually.
```javascript
<div>
  <h3>{books[0].title}</h3>
  <img src={books[0].image} alt={books[0].title} />
</div>
```
11. Don't forget to style it!
12. Render the rest of the data manuallly.
13. Show them how to use `.map` instead of manually rendering the data. (No components and props yet)

**STOP AND SOLVE THE TASK**

9. create a book component from data file book[0]
10. lets move home in its own component as well 
11. add three books, fix style (wrap in one div)
12. create a list of books component
13. props from list of books to book
14. destructure css to add a css file for each component

