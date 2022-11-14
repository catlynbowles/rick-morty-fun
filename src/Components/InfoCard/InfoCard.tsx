

type info = {
  label: string
  status: string
  image: string
  species: string
  id: string
}

const InfoCard = ({label, status, image, species, id}: info) => {
  return (
    <div>
      <h3>{label}</h3>
      <img src={image}></img>
      <p>{status}</p>
      <p>{species}</p>
      <button>More Info</button>
    </div>
  )
}

export default InfoCard