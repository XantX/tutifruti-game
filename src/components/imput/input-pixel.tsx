interface InputPixelProp {
  value: string | number;
  type: string;
  index: number;
  onChange: (() => void) | ((value: number) => void) | ((index: number, value: string) => void) | undefined;
}
function InputPixel(props: InputPixelProp) {
  return (
    <>
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => {
          if (props.type === 'text' && typeof props.onChange === 'function') props.onChange(props.index, e.target.value);
          if (props.type === 'number' && typeof props.onChange === 'function') {
            if (parseInt(e.target.value) >= 0) props.onChange(parseInt(e.target.value))
          }
        }}
      />
    </>
  );
}

export default InputPixel;
