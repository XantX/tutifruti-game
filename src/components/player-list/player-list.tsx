import './player-list.css'
import { Dispatch, SetStateAction } from "react"
import ButtomPixel from "../buttom/buttom-pixel"
import { Player } from "../../types/types"
import InputPixel from '../imput/input-pixel'

interface PlayerListProps {
  players: Player[],
  setPlayer: Dispatch<SetStateAction<Player[]>>
}

function PlayerList(props: PlayerListProps) {
  const addPlayer = () => {
    const newPlayer = { name: "" }
    props.setPlayer([...props.players, newPlayer])
  }
  const removePlayer = (index: number) => {
    const newPlayers = [...props.players]
    newPlayers.splice(index, 1)
    props.setPlayer([...newPlayers])
  }
  const handleChange = (index: number, value: string) => {
    const newPlayers = [...props.players]
    newPlayers[index].name = value
    props.setPlayer(newPlayers)
  }
  return (
    <>
      <div>
        <ButtomPixel title="+" action={addPlayer}></ButtomPixel>
        <div className="player-view">
          {
            props.players.map((player, index) => (
              <div key={index}>
                <InputPixel type="text" value={player.name} onChange={handleChange} index={index}/>
                <ButtomPixel title="-" action={() => {removePlayer(index)}}></ButtomPixel>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default PlayerList;
