type Selection = {
  selection: string
}

// match<{ selection: string; }>'

const Grid = ({selection}: Selection) => {
  return (
    <div>{selection}</div>
  )
}

export default Grid