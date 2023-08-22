function Lists() {
  const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin"]

  return (
    <div className="App">
      {/* 1.- */}
      {/* <h1>{names[0]}</h1> */}
      {
        names.map((name, key) => {
          return <h1 key={key}>{name}</h1>
        })
      }
    </div>
  )
}

export default Lists