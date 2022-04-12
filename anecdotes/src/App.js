import { useState } from 'react'

// -- Latihan 1.12 --
// const App = () => {
//   const anecdotes = [
//     "If it hurts, do it more often",
//     "Adding manpower to a late software project makes it later",
//     "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code account for the other 90 percent of the development time.",
//     "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     "Premature optimization is the root of all evil",
//     "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code ad cleverly as possible, you are, by definition, not smart enought to debug it.",
//     "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients"
//   ]

//   const [selected, setSelected] = useState(0)

//   const randomAnecdote = () => {
//     // const min = 1
//     // const max = 7
//     // const rand = min + (Math.random() * (max - min))
//     const rand = Math.floor(Math.random() * anecdotes.length)
//     setSelected(rand)
//   }

//   return (
//     <div>
//       { anecdotes[selected] } <br/>
//       <button onClick={ randomAnecdote }>Next Anecdote</button>
//     </div>
//   );
// }

// -- Latihan 1.13 --
// const App = () => {
//   const anecdotes = [
//     "If it hurts, do it more often",
//     "Adding manpower to a late software project makes it later",
//     "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code account for the other 90 percent of the development time.",
//     "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     "Premature optimization is the root of all evil",
//     "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code ad cleverly as possible, you are, by definition, not smart enought to debug it.",
//     "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients"
//   ]

//   const [selected, setSelected] = useState(0)
//   const [votes, setVotes] = useState(Array(7).fill(0))

//   const voting = () => {
//     const newVotes = [...votes]
//     newVotes[selected] += 1
//     setVotes(newVotes)
//   }

//   const randomAnecdote = () => {
//     const rand = Math.floor(Math.random() * anecdotes.length)
//     setSelected(rand)
//   }

//   return (
//     <div>
//       <p>
//          { anecdotes[selected] } <br/>
//          has { votes[selected] } votes
//       </p>
//       <button onClick={ voting }>Vote</button>
//       <button onClick={ randomAnecdote }>Next Anecdote</button>
//     </div>
//   );
// }


// -- Latihan 1.14 --
const MostVotes = ({ anecdotes, votes }) => {
  const highestVote = Math.max(...votes)
  const highIndex = votes.indexOf(highestVote)
  const mostVote = anecdotes[highIndex]

  return(
    <div>
      <p>
        { mostVote } <br/>
        has { highestVote } votes
      </p>      
    </div>
  );
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code account for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code ad cleverly as possible, you are, by definition, not smart enought to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients"
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))

  const voting = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const randomAnecdote = () => {
    const rand = Math.floor(Math.random() * anecdotes.length)
    setSelected(rand)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the Day</h1>
        <p>
          { anecdotes[selected] } <br/>
          has { votes[selected] } votes
        </p>
        <button onClick={ voting }>Vote</button>
        <button onClick={ randomAnecdote }>Next Anecdote</button>
      </div>
      <div>
        <h1>Anecdote with Most Votes</h1>
        <MostVotes anecdotes={ anecdotes } votes={ votes }/>
      </div>
    </div>
  );
}

export default App;
