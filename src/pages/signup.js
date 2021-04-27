import {useState} from 'react';

import { Link, useHistory } from 'react-router-dom'
import Card from '../components/Card';
import Button from '../components/Button';
import AuthLayout from '../components/layouts/AuthLayout'
import { Flex } from '../components/UI';
import Input from '../components/form/Input'
import {signup} from '../services/auth'


const SignupPage = () => {
  const [formData, setFormData]= useState( {name: '', lastname:'', email:'', password:''} );
  const history = useHistory();
  const handleFormSubmit = async(event) =>{
    event.preventDefault();
    const newUser =  await signup(formData.email, formData.password);
    if (newUser) history.push("/"); 
  }


  return (
   <AuthLayout>
    <Flex justify="center" align="center">
     <Card>
        <form onSubmit={handleFormSubmit}>
          <Input label="Nombre" name="name" placeholder="Introduzca su nombre" value={formData.name} onInputChange= {(value)=>{
            setFormData({...formData, name:value})
          }}/>
          <Input label="Apellidos" name="lastname" placeholder="Introduzca su nombre" value={formData.lastname} onInputChange= {(value)=>{
            setFormData({...formData, lastname:value})
          }}/>
          <Input type="email" label="Email" name="email" placeholder="Introduzca su email" value={formData.email} onInputChange= {(value)=>{
            setFormData({...formData, email:value})
          }}/>
          <Input type="password" label="Contraseña" name="password" placeholder="Introduzca su contraseña" value={formData.password} onInputChange= {(value)=>{
            setFormData({...formData, password:value})
          }}/>
          <Button>Enviar</Button>
        </form>
        Signup
      ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
      </Card>
      </Flex>
    </AuthLayout>
    )
  }

export default SignupPage;
  