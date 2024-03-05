import { useSelector } from "react-redux";

function GamePage() {
  const game = useSelector((state) => state.game);
  console.log(game)
  return (
    <>
      <div>
      Hola
      </div>
    </>
  );
}

export default GamePage;
