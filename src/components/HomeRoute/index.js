import {Link} from 'react-router-dom'
import './index.css'

const HomeRoute = () => {
  return (
    <div className="home-page">
      <button type="button" className="logo-button">
        <img
          src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1735278985/apple-watch-design-studio-logo_1_tkpgp5.jpg"
          alt="logo-image"
          className="logo-img"
        />
      </button>

      <div className="home-content-container">
        <p className="apple-para">Apple Watch Studio</p>
        <h1 className="choose-heading">
          Choose a case. <br /> Pick a band. <br /> Create your own style.
        </h1>
        <Link to="/preview">
          <button className="get-button" type="button">
            Get started
          </button>
        </Link>
        <img
          src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1735281603/Screenshot_2024-12-27_102538_pjqup0.png"
          alt="watch"
          className="home-watch-img"
        />
      </div>
    </div>
  )
}

export default HomeRoute
