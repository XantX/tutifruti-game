import './button-pixel.css'

export interface ButtonProps {
  title: string,
  action: (() => void) | ((arg: string) => void) | ((num: number) => void),
  styles: string,
}

function ButtomPixel(props: ButtonProps) {
  return (
    <>
      <button onClick={props.action} className={props.styles}>{props.title}</button>
    </>
  )
}

export default ButtomPixel
