interface SelectorProps {
  options: string[],
  name: string
}
function SelectorPixel(props: SelectorProps) {
  return (
    <>
      <select name={props.name}>
      {
        props.options.map( option => (
          <option key={props.options.indexOf(option)}>
            {option}
          </option>
          )
        )
      }
      </select>
    </>
  )
}

export default SelectorPixel
