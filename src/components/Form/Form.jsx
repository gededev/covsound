import React from "react";
import { useForm , Controller} from "react-hook-form";
import RadioGroup from "../FormParts/RadioGroup";

const Form = (props) => {
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    props.increment(props.step+1)
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {props.step === 0 &&
      <h3>Vous êtes: </h3>
      }
      <Controller
        control={control}
        name="gender"
        defaultValue="Homme"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <RadioGroup onChange={onChange} value={value} name={name}/>
        )}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <button type="submit" className="classic-button">
        Suivant
      </button>
    </form>
  );
}

export default Form