import Modal from "../Modal/Modal"
import './DetailView.scss'

type Prop = {
  ele?: {
    name: string
    location: {
      name: string
    }
  
  episode: string[]
  }
  setDetailView: any
}

const DetailView = ({ ele, setDetailView}: Prop) => {
  return (
    <div className='modal-cont'>
      <Modal ele={ele} setDetailView={setDetailView}/>
    </div>
  )
}

export default DetailView