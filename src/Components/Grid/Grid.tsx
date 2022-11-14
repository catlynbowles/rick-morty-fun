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
}

const Grid = ({selection}: Selection) => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    getShowInfo(selection)
      .then(data => setInfo(data.results))
  }, [selection])

  const generateCharInfoCards = (param1: string, param2: string, param3: string, param4: string) => {
    return info.map((ele: Element) => {
      // console.log(ele[param1])
      return (
        <InfoCard 
          label={ele[param1 as keyof Element]}
          status={ele[param2 as keyof Element]}
          species={ele[param3 as keyof Element]}
          image={ele[param4 as keyof Element]}
        />
      )
    })
  }

  return (
    <div>{selection}
      <div>{selection === 'character' ? generateCharInfoCards('name', 'status', 'species', 'image') : null}</div>
    </div>
  )
}

export default Grid