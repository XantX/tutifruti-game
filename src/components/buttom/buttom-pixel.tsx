import './button-pixel.css'

export interface ButtonProps {
  title: string
}

function ButtomPixel(props: ButtonProps) {
  return (
    <>
      <button className="button-pixel">{props.title}</button>
    </>
  )
}

export default ButtomPixel
