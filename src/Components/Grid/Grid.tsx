import { useEffect } from "react"
import {getShowInfo} from '../../apiCalls'
import {useState} from 'react'

type Selection = {
  selection: string
}

const Grid = ({selection}: Selection) => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    getShowInfo(selection)
      .then(data => setInfo(data.results))
  }, [selection])

  return (
    <div>{selection}</div>
  )
}

export default Grid