import "./config-menu-page.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtomPixel from "../../components/buttom/buttom-pixel";
import InputPixel from "../../components/imput/input-pixel";
import PlayerList from "../../components/player-list/player-list";
import SelectorPixel from "../../components/selector/selector-pixel";
import { Player } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startGame } from "../../redux/gameSlice"
import ModalPixel from "../../components/modal/modal-pixel";
import CounterPixel from "../../components/counter/counter-pixel";


function ConfigMenuPage() {
  const navigate = useNavigate()
  const game = useSelector((state) => state.game);
  const [players, setPlayer] = useState<Player[]>([]);
  const [roundTime, setRoundTime] = useState<number>(0);
  const [roundQuantity, setRoundQuantity] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  const handleToggleModal = () => {
    setModalOpen(!modalOpen)
  }
  const validData = () => {
    if (players.length == 0) {
      return false
    }
    if (roundTime == 0) {
      return false
    }
    if (roundQuantity == 0) {
       return false
    }
    return true
  }

  useEffect(() => {
    setPlayer(game.players)
    setRoundTime(game.roundTime)
    setRoundQuantity(game.roundQuantity)
  }, [game])

  return (
    <>
      <div className="config-menu-page">
        <ButtomPixel styles="button-pixel-config" title="Salir" action={() => {
          console.log('limpiando al salir')
          setPlayer([])
          setRoundTime(0)
          setRoundQuantity(0)
          dispatch(startGame({ players: [], roundTime: 0, roundQuantity: 0}))
          navigate('/')
        }}></ButtomPixel>
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
                <InputPixel styles="input-pixel" value={roundTime} index={0} onChange={(value: number) => { setRoundTime(value)}} type="number" ></InputPixel> sec 
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
            const validForm = validData()
            if(validForm) {
              dispatch(startGame({players, roundTime, roundQuantity}))
              setModalOpen(true)
            } else {
              console.log('Faltan datos')
            }
            }}></ButtomPixel>
          <ButtomPixel styles="button-pixel-config" title="Reset" action={() => { 
            setPlayer([])
            setRoundTime(0)
            setRoundQuantity(0)
            dispatch(startGame({players, roundTime, roundQuantity}))
            }}></ButtomPixel>
        </div>
        <ModalPixel isOpen={modalOpen} toggleModal={handleToggleModal} activeToggleModal={false}>
          <h2>Inicio de ronda</h2>
          <CounterPixel reset={false} time={5} isActive={true} action={() => {
            navigate('/game')
          }}></CounterPixel>
        </ModalPixel>
      </div>
    </>
  );
}

export default ConfigMenuPage;
