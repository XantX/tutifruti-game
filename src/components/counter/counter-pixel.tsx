import { useEffect, useState } from "react";

interface CounterPixelProps {
  time: number,
  action: (() => void) | ((arg: string) => void) | ((num: number) => void) | (() => boolean)
  isActive: boolean,
  reset: boolean 
}
function CounterPixel(props: CounterPixelProps) {

  const [countdown, setCountdown] = useState(props.time);
  const time = props.time

  const onTimeEnd = () => {
      const reset: boolean = props.action()
      if( reset == true ) {
        setCountdown(props.time)
      }
  }
  useEffect(() => {
    console.log('Reiniciando..')
    setCountdown(time)
  }, [props.reset])

  useEffect(() => {
    let intervalId: number | undefined;

    if(props.isActive) {
      intervalId = setInterval(() => {
          setCountdown(prevCountdown => {
              if (prevCountdown === 0) {
                clearInterval(intervalId);
                onTimeEnd()
                return 0;
              } else {
                return prevCountdown - 1
              }
              });
          }, 1000);
    } else {
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId);
  }, [onTimeEnd]); 
  return (
    <>
      <div className="time">
        <p>{countdown}</p>
      </div>
    </>
  )
}

export default CounterPixel
