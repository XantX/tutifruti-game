import './button-pixel.css'

export interface ButtonProps {
  title: string
}

function ButtomPixel(props: ButtonProps) {
  return (
    <>
      <button>{props.title}</button>
    </>
  )
}

export default ButtomPixel
