import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="destItem">
      <img src={imgUrl} alt={name} className="festImg" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
