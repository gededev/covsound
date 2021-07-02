import { useState } from 'react'

const RadioButton = (props) => {

    const [radioState, setRadioState] = useState(props.value)
    
    return (
        <div>
            <input id={`${props.name}Choice1`} type="radio" name={props.name} onChange={props.onChange} value="Homme" checked={radioState === props.value}/>
            <label for={`${props.name}Choice1`}>Homme</label>
            <input id={`${props.name}Choice2`} type="radio" name={props.name} onChange={props.onChange} value="Femme" checked={radioState === props.value}/>
            <label for={`${props.name}Choice2`}>Femme</label>
        </div>
    )
}

export default RadioButton