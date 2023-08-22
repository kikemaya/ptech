import jobStyles from './styles/Job.module.css'

function Job(props) {
  return (
    <div>
      {/* <h1 className="name">{props.salary}</h1> */}
      <h1 className={jobStyles.name}>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h3>{props.company}</h3>
    </div>
  )
}

export default Job