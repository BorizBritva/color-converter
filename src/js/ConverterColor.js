import {useState} from 'react'
import {convertColorToRGB} from './utilities'
import BlockModel from './BlockModel'

function ConverterColor(props) {
  const [form, setForm] = useState({
    hex: "",
    error: false,
    formFone: [48, 92, 224],
    blockFone: [28, 72, 2004]
  })

  const handleSubmit = (e) => {e.preventDefault()}

  const handleInput = ({target}) => {
    const {name, value} = target

    setForm((prevForm) => {
      if (convertColorToRGB(value, form.formFone)) {
        return {...new BlockModel(convertColorToRGB(value, form.formFone)), [name]: value}
      }
      return {...prevForm, [name]: value, error: true}
    })
  }

  return (
    <form className="converter" onSubmit={handleSubmit} style={{backgroundColor: "rgb(" + [...form.formFone] + ")"}}>
      <div>
        <label htmlFor="hex">
          <input id="hex" name="hex" value={form.hex} onChange={handleInput}/>
        </label>
        <div className="rgb" style={{backgroundColor: "rgb(" + [...form.blockFone] + ")"}}>
          {form.error ? "Ошибка!" : "rgb(" + [...form.formFone] + ")"}
        </div>
      </div>
    </form>
  )
}


export default ConverterColor
