// -- Latihan 1.1 --
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamental of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1> { course } </h1>
//       <p>
//         { part1 } {exercises1}
//       </p>
//       <p>
//         { part2 } {exercises2}
//       </p>
//       <p>
//         { part3 } {exercises3}
//       </p>

//       <p>Number of exercises { exercises1 + exercises2 + exercises3 }</p>
//     </div>
//   );
// }


// -- Latihan 1.2 --
// const Header = (var1) => {
//   return (
//     <h1>{ var1.course }</h1>
//   )
// }

// const Part = (var1) => {
//   return (
//     <p>{ var1.cName } { var1.xrs }</p>
//   )
// }
// const Content = (var1) => {
//   return (
//     <div>
//         <Part cName = {var1.content[0].part} xrs = {var1.content[0].exercises}/>
//         <Part cName = {var1.content[1].part} xrs = {var1.content[1].exercises}/>
//         <Part cName = {var1.content[2].part} xrs = {var1.content[2].exercises}/>
//     </div>
//   )
// }

// const Total = (var1) => {
//   return (
//     <p>Number of exercises = { var1.total[0].exercises + var1.total[1].exercises + var1.total[2].exercises }</p>
//   )
// }

// // Component
// const App = () => {
//   const course = 'Half Stack application development'
//   const array = {
//     data: [
//       {
//         part: 'Fundamental of React',
//         exercises: 10
//       },
//       {
//         part: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         part: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return(
//     <div>
//       <Header course = { course } />
//       <Content content = { array.data } />
//       <Total total = { array.data } />
//     </div>
//    )
// }


// -- Latihan 1.3 dan Latihan 1.4 --
// const Header = (var1) => {
//   return (
//     <h1>{ var1.course }</h1>
//   )
// }

// const Part = (var1) => {
//   return (
//     <p>{ var1.cName } { var1.xrs }</p>
//   )
// }
// const Content = (var1) => {
//   return (
//     <div>
//         <Part cName = {var1.content[0].name} xrs = {var1.content[0].exercises}/>
//         <Part cName = {var1.content[1].name} xrs = {var1.content[1].exercises}/>
//         <Part cName = {var1.content[2].name} xrs = {var1.content[2].exercises}/>
//     </div>
//   )
// }

// const Total = (var1) => {
//   return (
//     <p>Number of exercises { var1.total[0].exercises + var1.total[1].exercises + var1.total[2].exercises }</p>
//   )
// }

// // Component
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//       {
//         name: 'Fundamental of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]

//   return(
//     <div>
//       <Header course = { course } />
//       <Content content = { parts } />
//       <Total total = { parts } />
//     </div>
//    )
// }


// -- Latihan 1.5 --
const Header = (var1) => {
  return (
    <h1>{ var1.course }</h1>
  )
}

const Part = (var1) => {
  return (
    <p>{ var1.cName } { var1.xrs }</p>
  )
}
const Content = (var1) => {
  return (
    <div>
        <Part cName = {var1.content[0].name} xrs = {var1.content[0].exercises}/>
        <Part cName = {var1.content[1].name} xrs = {var1.content[1].exercises}/>
        <Part cName = {var1.content[2].name} xrs = {var1.content[2].exercises}/>
    </div>
  )
}

const Total = (var1) => {
  return (
    <p>Number of exercises { var1.total[0].exercises + var1.total[1].exercises + var1.total[2].exercises }</p>
  )
}

// Component
const App = () => {
  const course = {
    cName: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamental of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
    <div>
      <Header course = { course.cName } />
      <Content content = { course.parts } />
      <Total total = { course.parts } />
    </div>
   );
}

export default App;
