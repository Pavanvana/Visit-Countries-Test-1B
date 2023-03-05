import './index.css'

const VisitedCountry = props => {
  const {visitedCountryDetails, removeCountry} = props
  const {id, name, imageUrl} = visitedCountryDetails
  const onClickRemoveItem = () => {
    removeCountry(id)
  }
  return (
    <li className="each-country">
      <img src={imageUrl} alt="thumbnail" className="flag-img" />
      <div className="name-and-button-container">
        <p className="country-name">{name}</p>
        <button
          type="button"
          className="remove-button"
          onClick={onClickRemoveItem}
        >
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountry
