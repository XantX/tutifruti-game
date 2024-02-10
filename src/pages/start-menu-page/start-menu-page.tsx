import { Link } from 'react-router-dom';
import ButtomPixel from '../../components/buttom/buttom-pixel';
import './start-menu-page.css'

function StartMenuPage() {
  return (
    <>
      <div className="start-menu-page">
        <div className="start-title">
          <div className="letter-box">
            <div className="pixelartT"></div>
          </div>
          <div className="letter-box">
            <div className="pixelartU"></div>
          </div>
          <div className="letter-box">
            <div className="pixelartT"></div>
          </div>
          <div className="letter-box">
            <div className="pixelartI"></div>
          </div>
          <div className="letter-box">
            <div className="pixelartF"></div>
          </div>
          <div className="letter-box">
            <div className="pixelartR"></div>
          </div>
          <div className="letter-box">
            <div className="pixelartU"></div>
          </div>
          <div className="letter-box">
            <div className="pixelartT"></div>
          </div>
          <div className="letter-box">
            <div className="pixelartI"></div>
          </div>
        </div>
        <div>
          <Link to="/config">
            <ButtomPixel title="Comenzar" action={() => {}}></ButtomPixel>
          </Link>
        </div>
        <div>
          languages
        </div>
      </div>
    </>
  )
}

export default StartMenuPage;
