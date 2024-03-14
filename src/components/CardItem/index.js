// Write your code here.
import './index.CSS'

const TechCard = props => {
  const {cardItem} = props
  const {title, description, imageUrl, className} = cardItem
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <img src={imageUrl} alt={title} />
    </li>
  )
}

export default TechCard
