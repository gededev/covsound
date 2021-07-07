import { useState } from 'react'

const RadioGroup = (props) => {
    
    return (
        <div className="radio-group">
            <div className="radio-input">
                <input id={`${props.name}Choice1`} type="radio" name={props.name} onChange={props.onChange} value="Homme"/>
                <label for={`${props.name}Choice1`}>Homme</label>
            </div>
            <div className="radio-input">
                <input id={`${props.name}Choice2`} type="radio" name={props.name} onChange={props.onChange} value="Femme"/>
                <label for={`${props.name}Choice2`}>Femme</label>
            </div>
        </div>
    )
}

export default RadioGroup