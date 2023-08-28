import Job from './Job.jsx'

function PropsYEstilos() {
  return (
    <div className="App">
      {/* CREAR COMPONENTE "Job" */}
      <Job salary={9000} position="Position X" company="Amazon" />
      <Job salary={3000} position="Position Y" company="Google" />
      <Job salary={6000} position="Position Z" company="Netflix" />
    </div >
  )
}

// function Job(props) {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h2>{props.position}</h2>
//       <h3>{props.company}</h3>
//     </div>
//   )
// }

export default PropsYEstilos