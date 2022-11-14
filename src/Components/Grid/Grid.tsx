import { useEffect } from "react"
import {getShowInfo} from '../../apiCalls'
import {useState} from 'react'
import InfoCard from '../InfoCard/InfoCard'

type Selection = {
  selection: string
}

type Element = {
  param1: string
  param2: string
  param3: string
  param4: string
  id: string
  // episode: Array<string>
}

const Grid = ({selection}: Selection) => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    getShowInfo(selection)
      .then(data => setInfo(data.results))
  }, [selection])

  const generateInfoCards = (param1: string, param2: string, param3: string, param4?: string) => {
    return info.map((ele: Element) => {
      return (
        <InfoCard 
          label={ele[param1 as keyof Element]}
          status={ele[param2 as keyof Element]}
          species={ele[param3 as keyof Element]}
          image={ele[param4 as keyof Element]}
          id={ele.id}
        />
      )
    })
  }

  return (
    <div>{selection}
      <div>{selection === 'character' ? generateInfoCards('name', 'status', 'species', 'image') : 
        selection === 'location' ? generateInfoCards('name', 'type', 'dimension') : 
        selection === 'episode' ? generateInfoCards('name', 'air_date', 'episode') : null}</div>
    </div>
  )
}

export default Grid