import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState([
        0, 0, 0, 0, 0, 0
    ])
    const [topPoints, setTopPoints] = useState(0)

    const handleClick = () => {
        points[selected] += 1
        setPoints(points)
        const biggestNumber = Math.max(...points)
        setTopPoints(points.indexOf(biggestNumber))
    }


    console.log(points)
    console.log(selected)

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>{props.anecdotes[selected]}</div>
            <button onClick={() => handleClick()}>vote</button>
            <button onClick={() => setSelected(Math.floor(Math.random() * 6))}>next anecdote</button>
            <h1>Anecdote with the most votes</h1>
            <div>{anecdotes[topPoints]}</div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)