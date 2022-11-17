

type info = {
  label: string
  status: string
  image: string
  species: string
  id: string
  showDetails: any
}

const InfoCard = ({label, status, image, species, id, showDetails}: info) => {
  return (
    <div>
      <h3>{label}</h3>
      <img src={image}></img>
      <p>{status}</p>
      <p>{species}</p>
      <button onClick={() => showDetails(id)}>More Info</button>
    </div>
  )
}

export default InfoCard