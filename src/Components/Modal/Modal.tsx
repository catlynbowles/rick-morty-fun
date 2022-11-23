import './Modal.scss'
import { getShowInfo } from '../../apiCalls'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

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

const Modal = ({ ele, setDetailView }: Prop) => {
  const [answer, setAnswer] = useState(false)

  const getDetails = () => {
    return 'hi'
  }

  useEffect(() => {
    // if (ele) {
    //   Promise.allSettled(ele.origin.map((ele: any) => getShowInfo(ele)))
    //     .then(data =>  console.log(data))
    // }
  }, [])

  return (
    <div className='modal'>
      <p>{ele?.name}</p>
      <p>{ele?.location.name}</p>
      {getDetails() && getDetails()}
      <h2>How many episodes was {ele?.name} in ?</h2>
      <button onClick={() => setAnswer(!answer)}>{answer ? 'Hide Answer' : 'Show Answer'}</button>
      {answer && 
      <div>
        <h3>{ele?.episode.length}</h3>
        <Link to={`${ele?.name}/episodes`}>See Detailed List</Link>
      </div>
      }
      <button onClick={() => setDetailView(false)}>Close</button>
    </div>
  )
}

export default Modal