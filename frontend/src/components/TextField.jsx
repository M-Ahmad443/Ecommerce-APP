import "../css/textField.css"
const TextField = ({label,onChange,value,inputProps,errors}) => {

    return (
      <>
      <label className="text-field-lebel" label={label}></label>
      <input className="text-field-input" onChange={onChange} value={value}
       {...inputProps} ></input>
       {errors && <div className="alert">{errors}</div>}
      </>
      
    )
  }
  export default TextField