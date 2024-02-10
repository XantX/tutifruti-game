import ButtomPixel from "../buttom/buttom-pixel";

interface PlayerListProps {
  players: Player[]
}

export interface Player {
  name: string
}

function PlayerList(props: PlayerListProps) {
  return (
    <>
      <div>
        <ButtomPixel title="+"></ButtomPixel>
        <div>
          {
            props.players.map( player => (
              <p>{player.name}</p>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default PlayerList;
