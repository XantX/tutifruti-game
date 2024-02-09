import ButtomPixel from "../../components/buttom/buttom-pixel";
import InputPixel from "../../components/imput/input-pixel";
import SelectorPixel from "../../components/selector/selector-pixel";
import "./config-menu-page.css";

function ConfigMenuPage() {
  return (
    <>
      <div className="config-menu-page">
        <div className="option-columns row">
          <div className="column">
            <div className="row">
              <div className="card">
                <p>Agregar player</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <div className="card">
                <p>Seleccionar alfabeto</p>
                <SelectorPixel name="languages" options={['espaniol', 'ingles']}></SelectorPixel>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <p>Tiempo de ronda</p>
                <InputPixel></InputPixel>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <div className="card">
                <p>Cantidad de rondas</p>
                <InputPixel></InputPixel>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <ButtomPixel title="Comenzar"></ButtomPixel>
        </div>
      </div>
    </>
  );
}

export default ConfigMenuPage;
