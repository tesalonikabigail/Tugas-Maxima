import { useState } from 'react'

// -- Latihan 1.6 dan Latihan 1.7 --
// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <h1>Give Feedback</h1>
//         <button onClick = {() => setGood(good+1)}> Good </button>
//         <button onClick = {() => setNeutral(neutral+1)}> Neutral </button>
//         <button onClick = {() => setBad(bad+1)}> Bad </button>
//       </div>
//       <div>
//         <h1>Statistics</h1>
//         <p>Good { good }</p> 
//         <p>Neutral { neutral }</p>
//         <p>Bad { bad }</p>
//         <p>All { good+neutral+bad }</p>
//         <p>Average { ((good * 1)+(bad * (-1)))/(good+neutral+bad) }</p>
//         <p>Positive { good/(good+neutral+bad)  } %</p>
//       </div>
//     </div>
//   );
// }


// -- Latihan 1.8 dan Latihan 1.9 --
// const Statistics = ({ clicks }) => {
//   let total = (clicks.good + clicks.neutral + clicks.bad)
//   let ave = (((clicks.good * 1)+(clicks.bad * (-1))) / total)
//   let positive = (clicks.good / total)

//   //Mengecek jika belum ada button yang di pencet
//   if(total === 0){
//     return(
//       <div>
//         <p> No Feedback Given</p>
//       </div>
//     )
//   }
//   else{
//     return(
//       <div>
//           <p>Good { clicks.good }</p>
//           <p>Neutral { clicks.neutral }</p>
//           <p>Bad { clicks.bad }</p>
//           <p>All  { total }</p>
//           <p>Average { ave }</p>
//           <p>Positive { positive } %</p>
//       </div>
//     )
//   }
// }

// const App = () => {
//   const [clicks, setClicks] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0
//   })

//   return(
//     <div>
//       <div>
//         <h1>Give Feedback</h1>
//           <button onClick = {() => setClicks({good: clicks.good+1, neutral: clicks.neutral+0, bad: clicks.bad+0})}> Good </button>
//           <button onClick = {() => setClicks({good: clicks.good+0, neutral: clicks.neutral+1, bad: clicks.bad+0})}> Neutral </button>
//           <button onClick = {() => setClicks({good: clicks.good+0, neutral: clicks.neutral+0, bad: clicks.bad+1})}> Bad </button>
//       </div>
//       <div>
//         <h1>Statistics</h1>
//         <Statistics clicks = { clicks }/>
//       </div>
//     </div>
//   );
// }


//-- Latihan 1.10 dan Latihan 1.11 --
const StatisticLine = ({ text, value }) => {
  if(text === "Positive"){
    return(
      <tr>
        <td>{ text } { value } %</td>
      </tr>
    )
  }
  else{
    return(
      <tr>
        <td>{ text } { value }</td>
      </tr>
    )
  }
}

const Button = ({ onClick, buttonName }) => {
  return(
    <button onClick = { onClick }>
      { buttonName }
    </button>
  )
}
//Cara untuk component Button (2) tanpa return(), pkenya lngsng () bkn {}
// const Button = ({ onClick, buttonName }) => (
//   <button onClick = { onClick }>
//     { buttonName }
//   </button>
// )

const Statistics = ({ clicks }) => {
  let total = (clicks.good + clicks.neutral + clicks.bad)
  let ave = (((clicks.good * 1)+(clicks.bad * (-1))) / total)
  let positive = (clicks.good / total)

  //Mengecek jika belum ada button yang di pencet
  if(total === 0){
    return(
      <div>
        <p> No Feedback Given</p>
      </div>
    )
  }
  else{
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good" value ={ clicks.good }/>
            <StatisticLine text="Neutral" value = { clicks.neutral }/>
            <StatisticLine text="Bad" value = { clicks.bad }/>
            <StatisticLine text="All" value = { total }/>
            <StatisticLine text="Average" value = { ave }/>
            <StatisticLine text="Positive" value = { positive }/>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const goodClick = () => setClicks({good: clicks.good+1, neutral: clicks.neutral+0, bad: clicks.bad+0})
  const neutralClick = () => setClicks({good: clicks.good+0, neutral: clicks.neutral+1, bad: clicks.bad+0})
  const badClick = () => setClicks({good: clicks.good+0, neutral: clicks.neutral+0, bad: clicks.bad+1})

  return(
    <div>
      <div>
        <h1>Give Feedback</h1>
          <Button onClick = { goodClick } buttonName = "Good"/>
          <Button onClick = { neutralClick } buttonName = "Neutral"/>
          <Button onClick = { badClick } buttonName = "Bad"/>
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics clicks = { clicks }/>
      </div>
    </div>
  );
}

export default App;
