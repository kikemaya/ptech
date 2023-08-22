function App() {
  // 1.- const name = "Enrique";
  // 2.-
  const name = <h1>Enrique</h1>;

  // 3.-
  const age = <h2>24</h2>
  const email = <h2>enrique@enrique.com</h2>
  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  );

  return (
    <>
      <div className="App">
        {/* 2.-  */}
        {/* <h1>{name}</h1> */}
        {name}
        {name}
        {name}
        {/* 3.- 
        <div>
          {name}
          {age}
          {email}
        </div>
        <div>
          {name}
          {age}
          {email}
        </div> */}
        {/* 3.  */}
        {user}

        {/* 4.  */}
        {/* 5.- Props for string are passed with "", another values, with {} */}
        <User name="Pedro" age={21} email="pedro@email.com" />
        <User name="Lola" age={21} email="cinthya@email.com" />
        <User name="Enrique" age={21} email="enrique@email.com" />
      </div>
    </>
  )
}

// Javascript function. RETORNAN VALORES (PRIMITIVOS O REFERENCIAS). COMIENZAN EN MINUS
function getName() {
  return "Pedro"
}

// JSX component. RETORNAN UI. COMIENZAN EN MAYUS.
function GetNameComponent() {
  return <h1>Pedro</h1>
}

// 5.
// const props = {
//   name: "Pedro",
//   age: 21,
//   email: "pedro@pedro.com",
// }

// 4.- 
// 5. object "props"
function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  )
}

export default App
