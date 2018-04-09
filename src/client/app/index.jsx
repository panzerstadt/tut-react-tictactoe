import React from 'react';
import { render } from 'react-dom';
import Game from './chessGame.jsx';

// this is the main file that collects all the components
// together and puts them all into index.html
class App extends React.Component {
    render () {
        return (
        <div>
            <h3>tic tac toe Reactjs game</h3>
            <Game />
        </div>
        );
    }
}

render(<App/>, document.getElementById("app"));