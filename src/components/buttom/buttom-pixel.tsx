import './button-pixel.css'

export interface ButtonProps {
  title: string,
  action: (() => void) | ((arg: string) => void) | ((num: number) => void),
}

function ButtomPixel(props: ButtonProps) {
  return (
    <>
      <button onClick={props.action} className="button-pixel">{props.title}</button>
    </>
  )
}

export default ButtomPixel
