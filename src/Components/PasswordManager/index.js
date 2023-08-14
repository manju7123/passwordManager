import {Component} from 'react'

import {v4} from 'uuid'

import Passwords from '../Passwords/index'

import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    userInput: '',
    passwordInput: '',
    passwordList: [],
    searchInput: '',
    isPasswordVisible: false,
  }

  deleteItem = id => {
    const {passwordList} = this.state
    const resItems = passwordList.filter(each => each.id !== id)
    this.setState({
      passwordList: resItems,
    })
  }

  onCheckBoxChange = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }))
  }

  onSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onAddDetails = event => {
    event.preventDefault()
    const {websiteInput, userInput, passwordInput} = this.state
    const newPasswordItem = {
      id: v4(),
      website: websiteInput,
      userName: userInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordItem],
      websiteInput: '',
      userInput: '',
      passwordInput: '',
    }))
  }

  onWebsiteChange = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onUserChange = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onPasswordChange = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  render() {
    const {
      websiteInput,
      userInput,
      passwordInput,
      passwordList,
      searchInput,
      isPasswordVisible,
    } = this.state

    const filteredItems = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="password-manager-card">
          <img
            className="password-manager-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </div>
        <div className="add-password-card">
          <form className="form-card" onSubmit={this.onAddDetails}>
            <h1 className="form-heading"> Add New Password </h1>
            <div className="form-input-card">
              <div className="input-container">
                <img
                  className="form-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
              </div>
              <input
                className="input"
                value={websiteInput}
                type="text"
                onChange={this.onWebsiteChange}
                placeholder="Enter Website"
              />
            </div>
            <div className="form-input-card">
              <div className="input-container">
                <img
                  className="form-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
              </div>
              <input
                className="input"
                value={userInput}
                type="text"
                onChange={this.onUserChange}
                placeholder="Enter Username"
              />
            </div>
            <div className="form-input-card">
              <div className="input-container">
                <img
                  className="form-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
              </div>
              <input
                className="input"
                value={passwordInput}
                type="password"
                onChange={this.onPasswordChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="form-button-card">
              <button className="form-btn" type="submit">
                Add
              </button>
            </div>
          </form>
          <div className="add-password-image-card">
            <img
              className="add-password-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="passwords-card">
          <div className="passwords-inner-card">
            <h1 className="inner-card-heading">
              Your Passwords
              <p className="inner-card-span"> {passwordList.length} </p>
            </h1>
            <div className="search-card">
              <img
                className="search-image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Search"
                onChange={this.onSearch}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="check-box-card">
            <input
              className="check-box"
              onChange={this.onCheckBoxChange}
              id="checkBox"
              type="checkbox"
            />
            <label className="label-element" htmlFor="checkBox">
              Show Passwords
            </label>
          </div>
          {filteredItems.length !== 0 ? (
            <ul className="list-items">
              {filteredItems.map(each => (
                <Passwords
                  key={each.id}
                  listItem={each}
                  deleteItem={this.deleteItem}
                  showPassword={isPasswordVisible}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-card">
              <img
                className="no-passwords-image"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p className="paragraph"> No Passwords </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
