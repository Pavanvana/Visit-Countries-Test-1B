import './index.css'

const EachCountry = props => {
  const {countryDetails, visitCountry} = props
  const {id, name, isVisited} = countryDetails
  const onClickVistBtn = () => {
    visitCountry(id)
  }

  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-button">Visited</p>
      ) : (
        <button className="visit-button" type="button" onClick={onClickVistBtn}>
          Visit
        </button>
      )}
    </li>
  )
}
export default EachCountry
