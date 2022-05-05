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

**STOP AND LET THEM SOLVE THE FIRST TASK (HOME PAGE)**

8. Save the title into JS and render it (emphasize on the {})
9. Create an array of books.
10. Render the first book manually.

```javascript
<div>
  <h3>{books[0].title}</h3>
  <img src={books[0].image} alt={books[0].title} />
</div>
```

11. Don't forget to style it!
12. Render the rest of the data manuallly.
13. Don't show them how to use `.map` yet, they'll do it in the task. You can mention the issues of hardcoding (adding new books, deleting a book, what if we had 100 books? How long will the code be?)
14. Create a data file for the books (books.js) and move the array of books to it. Explain `export default`.
15. In `App.js`, show them how to import the books.

**STOP AND SOLVE THE SECOND TASK (PRODUCT LIST)**

14. Create a Home component and move the title and main image to it. Show them how to use the `rafce` shortcut.
15. Show them how to render the component in `App.js`. Show them the React Dev Tools.
16. Render the Home component several times. Explain that each render is an instance of the component.

```javascript
<Home />
<Home />
<Home />
```

17. Now for the title inside Home.js, instead of hard-coding it pass it as a prop `<Home title="Bookstore" />`.
18. For each instance you rendered of the Home component give it a different title. 

```javascript
<Home title="Bookstore" />
<Home title="Another Bookstore" />
<Home title="A third Bookstore" />
```

19. Open the React Dev Tools and show them that every Home instance is being passed a different title.
20. In `Home.js`, recieve the props and render it.
21. Explain that we can literally pass anything we want as a prop including objects (don't mention functions yet).
