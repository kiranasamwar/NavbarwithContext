// Write your code here
// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <>
    <Navbar />

    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const AboutImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

        const bgColor = isDarkTheme ? 'dark' : 'light'
        const aboutTextClassName = isDarkTheme
          ? 'about-text-light'
          : 'about-text-dark'
        return (
          <div className={`home-container ${bgColor}`}>
            <img src={AboutImageUrl} className="home-image" alt="about" />
            <h1 className={`heading ${aboutTextClassName}`}>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
