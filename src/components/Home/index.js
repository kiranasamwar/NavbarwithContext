// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <>
    <Navbar />

    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const HomeImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

        const bgColor = isDarkTheme ? 'dark' : 'light'
        const homeTextClassName = isDarkTheme
          ? 'home-text-light'
          : 'home-text-dark'

        return (
          <div className={`home-container ${bgColor}`}>
            <img src={HomeImageUrl} className="home-image" alt="home" />
            <h1 className={`heading ${homeTextClassName}`}>Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
