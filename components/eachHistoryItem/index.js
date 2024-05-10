import './index.css'

const EachHistory = props => {
  const {historyItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const deleteHistoryItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="each-history">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="history-details-container">
        <img className="history-logo" src={logoUrl} alt="domain logo" />
        <h1 className="history-title">{title}</h1>
        <p className="history-url">{domainUrl}</p>
      </div>
      <img
        className="delete-icon"
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        onClick={deleteHistoryItem}
      />
    </li>
  )
}

export default EachHistory
