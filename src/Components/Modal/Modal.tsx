type Prop = {
  ele: undefined | {
    name: string
  }
  setDetailView: any
}

const Modal = ({ele, setDetailView}: Prop) => {
  return (
    <div>{ele?.name}<br />
    <button onClick={() => setDetailView(false)}>Close</button>
    </div>
  )
}

export default Modal