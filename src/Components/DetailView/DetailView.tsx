type Prop = {
  id: string
  setDetailView: any
}

const DetailView = ({id, setDetailView}: Prop) => {
  return (
    <div>{id}
    <button onClick={() => setDetailView(false)}>Close</button>
    </div>
  )
}

export default DetailView