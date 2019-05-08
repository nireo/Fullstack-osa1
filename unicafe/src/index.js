import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.value}</td>
                </tr>
            </tbody>
        </table>
    )
}

const Statistics = (props) => {
    if (props.total === 0 || isNaN(props.total) === true){
        return <p>ei yhtäkään palautetta annettu</p>
    }
    return (
        <div>
            <Statistic name="hyvä" value={props.good} />
            <Statistic name="neutraali" value={props.neutral} />
            <Statistic name="huono" value={props.bad} />
            <Statistic name="yhteensä" value={props.total} />
            <Statistic name="keskiarvo" value={props.average} />
            <Statistic name="positiivista" value={props.positive} />
        </div>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [average, setAverage] = useState(0)
    const [totalLenght, setTotalLength] = useState(0)
    const total = good + neutral + bad

    return ( 
        <div >
            <h1>Anna palautetta</h1>
            <button onClick={() => {
                setGood(good + 1);
                setAverage(average + 1); 
                setTotalLength(totalLenght + 1)
            }}>Hyvä</button>

            <button onClick={() => {
                setNeutral(neutral + 1);
                setTotalLength(totalLenght + 1)
            }}>Neutraali</button>

            <button onClick={() => {
                setBad(bad + 1);
                setAverage(average - 1); 
                setTotalLength(totalLenght + 1)
            }}>Huono</button>

            <h1>Statistiikka</h1>
            <Statistics 
                good={good} neutral={neutral} bad={bad} 
                total={total} average={average / totalLenght} positive={good / total * 100}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))