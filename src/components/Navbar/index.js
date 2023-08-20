// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <>
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const onClickThemChange = () => {
          toggleTheme()
        }

        const themeImageURL = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

        const navbarBgClassName = isDarkTheme
          ? 'navbar-bg-dark'
          : 'navbar-bg-light'

        const websiteLogoImageURL = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

        const navItemClassName = isDarkTheme
          ? 'list-text-dark-theme'
          : 'list-text-light-theme'

        return (
          <div className={`nav-card ${navbarBgClassName}`}>
            <img
              src={websiteLogoImageURL}
              alt="website logo"
              className="website-logo"
            />
            <ul className="ul-order-container">
              <Link to="/" className={`link-item  ${navItemClassName}`}>
                <li className="list-item">Home</li>
              </Link>
              <Link to="/about" className={`link-item  ${navItemClassName}`}>
                <li className="list-item">About</li>
              </Link>
            </ul>
            <button
              data-testid="theme"
              type="button"
              className="button"
              onClick={onClickThemChange}
            >
              <img src={themeImageURL} alt="theme" className="website-logo" />
            </button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Navbar
