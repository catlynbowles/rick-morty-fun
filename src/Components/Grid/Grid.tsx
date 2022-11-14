import { useEffect } from "react"
import {getShowInfo} from '../../apiCalls'
import {useState} from 'react'
import InfoCard from '../InfoCard/InfoCard'

type Selection = {
  selection: string
}

const Grid = ({selection}: Selection) => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    getShowInfo(selection)
      .then(data => setInfo(data.results))
  }, [selection])

  const generateCharInfoCards = () => {
    return info.map((ele: {name: string; status: string; species: string; image: string}) => {
      return (
        <InfoCard 
          label={ele.name}
          status={ele.status}
          species={ele.species}
          image={ele.image}
        />
      )
    })
  }

  return (
    <div>{selection}
      <div>{generateCharInfoCards()}</div>
    </div>
  )
}

export default Grid