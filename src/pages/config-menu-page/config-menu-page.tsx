import "./config-menu-page.css";
import { useState } from "react";
import ButtomPixel from "../../components/buttom/buttom-pixel";
import InputPixel from "../../components/imput/input-pixel";
import PlayerList from "../../components/player-list/player-list";
import SelectorPixel from "../../components/selector/selector-pixel";
import { Player } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startGame } from "../../redux/gameSlice"


function ConfigMenuPage() {
  const navigate = useNavigate()
  const [players, setPlayer] = useState<Player[]>([]);
  const [roundTime, setRoundTime] = useState<number>(0);
  const [roundQuantity, setRoundQuantity] = useState<number>(0);
  const dispatch = useDispatch()

  return (
    <>
      <div className="config-menu-page">
        <Link to="/">
          <ButtomPixel styles="button-pixel-config" title="Salir" action={() => {}}></ButtomPixel>
        </Link>
        <div className="option-columns row">
          <div className="column">
            <div className="row">
              <div className="card">
                <p>Agregar player</p>
                <PlayerList players={players} setPlayer={setPlayer}></PlayerList>
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
                <InputPixel styles="input-pixel" value={roundTime} index={0} onChange={(value: number) => { setRoundTime(value)}} type="number" ></InputPixel> min
              </div>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <div className="card">
                <p>Cantidad de rondas</p>
                <InputPixel styles="input-pixel" value={roundQuantity} index={0} onChange={(value: number) => { setRoundQuantity(value)}} type="number" ></InputPixel>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <ButtomPixel styles="button-pixel-config" title="Comenzar" action={() => { 
            dispatch(startGame({players, roundTime, roundQuantity}))
            navigate('/game')
            }}></ButtomPixel>
        </div>
      </div>
    </>
  );
}

export default ConfigMenuPage;
