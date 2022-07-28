type GreetProps = {
    name: string
}

const Greet = ({name}: GreetProps) => {
  return (
    <div>Greet {name}</div>
  )
}

export default Greet;