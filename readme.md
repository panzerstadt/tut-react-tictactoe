# reactjs tutorial (tic tac toe)

- Reactjs + webpack + babel

first commit : working version of a tic tac toe game
second commit : TODO

## how to run
1. double click on `src/client/app/index.html`

## how to edit

> all this does is make webpack watch your jsx files and compile them into bundle.js when there are changes

1. `cd` project folder
2. `npm install` to download all dependencies
3. `npm run dev`. this runs webpack in dev mode
4. double click `index.html`


## additional bits
- [from chapter: Wrapping Up](https://reactjs.org/tutorial/tutorial.html#wrapping-up)

If you have extra time or want to practice your new skills, here are some ideas for improvements you could make, listed in order of increasing difficulty:

1. Display the location for each move in the format (col, row) in the move history list.
2. Bold the currently selected item in the move list.
3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
4. Add a toggle button that lets you sort the moves in either ascending or descending order.
5. When someone wins, highlight the three squares that caused the win.
6. When no one wins, display a message about the result being a draw.
7. Throughout this tutorial, we have touched on a number of React concepts including elements, components, props, and state. For a more in-depth explanation for each of these topics, check out the rest of the documentation. To learn more about defining components, check out the React.Component API reference.