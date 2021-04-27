import styled from 'styled-components';

const Input = styled.input`
    background-color: white;
    border: 1px sold black;
    outline: none;

`
const Label = styled.label`
    font-size:14px;
    display: block;
`

const InputComponent = ({ type = 'text', label, name, placeholder, onInputChange, value }) => {
    const handleInputChange = (event) =>{
        const value = event.target.value;
        onInputChange(value);
    }
    return (
        <div>
        <Label>{label}</Label>
        <Input name={name}  type={type} value={value} placeholder ={placeholder} onChange={handleInputChange}/>
        </div>
    )
}
export default InputComponent;