import './index.css'

const Passwords = props => {
  const profileColors = [
    '#7683cb',
    '#f59e0b',
    '#10b981',
    '#f97316',
    '#14b8a6',
    '#b91c1c',
    '#0ea5e9',
  ]
  const resColor = profileColors[Math.floor(Math.random()) * 10 - 4]
  const {listItem, deleteItem, showPassword} = props
  const {id, website, userName, password} = listItem
  const resPassword = showPassword ? (
    <p className="paragraph"> {password} </p>
  ) : (
    <img
      className="image"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list">
      <div className="initial" style={{background: {resColor}}}>
        {userName[0]}
      </div>
      <div className="list-inner-card">
        <p className="website"> {website} </p>
        <p className="username"> {userName} </p>
        {resPassword}
      </div>
      <div className="btn-card">
        <button
          data-testid="delete"
          className="btn-element"
          type="button"
          onClick={onDelete}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default Passwords
