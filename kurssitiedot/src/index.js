import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => {
    return <h1>{name}</h1>
}

const Content = ({p1, p2, p3, e1, e2, e3}) => {
    return (
        <div>
            <Part name={p1} exercises={e1}/>
            <Part name={p2} exercises={e2}/>
            <Part name={p3} exercises={e3}/>
        </div>
    )
}

const Total = ({totalAmount}) => {
    return <p>Yhteensä: {totalAmount}</p>
}

const Part = ({name, exercises}) => {
    return <p>{name} {exercises}</p>
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            }, 
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            }, 
            {
                name: 'Komponenttien tila',
                exercises: 14
            }
        ]
    }

    return ( 
        <div>
            <Header name={course.name} />
            <Content 
                p1={course.parts[0].name} p2={course.parts[1].name} p3={course.parts[2].name}
                e1={course.parts[0].exercises} e2={course.parts[1].exercises} e3={course.parts[2].exercises}
            />
            <Total totalAmount={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
        </div>
    )
}

ReactDOM.render( <App /> , document.getElementById('root'))