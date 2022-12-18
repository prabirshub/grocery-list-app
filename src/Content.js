const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave', 'Prabir']
    const int = Math.floor(Math.random() * 4)
    return names[int]
  }

  const handleClick = () => {
    console.log("You clicked!")
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked!`)
  }
  const handleClick3 = (e) => {
    console.log(e)
  }
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={()=> handleClick2('Prabir')}>Click it</button>
      <button onClick={(e)=> handleClick3(e)}>Click it</button>
    </main>
  )
}

export default Content
