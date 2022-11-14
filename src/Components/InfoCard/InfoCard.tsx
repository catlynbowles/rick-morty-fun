type info = {
  label: string
  status: string
  image: string
  species: string
}

const InfoCard = ({label, status, image, species}: info) => {
  return (
    <div>
      <h3>{label}</h3>
      <img src={image}></img>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
    </div>
  )
}

export default InfoCard