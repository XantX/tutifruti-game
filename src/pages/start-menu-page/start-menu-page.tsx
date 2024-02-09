import { Link } from 'react-router-dom';
import ButtomPixel from '../../components/buttom/buttom-pixel';
import './start-menu-page.css'

function StartMenuPage() {
  return (
    <>
      <div className="start-menu-page">
        <div>
          <h1>Start menu</h1>
        </div>
        <div>
          <Link to="/config">
            <ButtomPixel title="Comenzar"></ButtomPixel>
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
