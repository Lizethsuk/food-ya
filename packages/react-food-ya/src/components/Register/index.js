import React,{ useState } from 'react';
import Input from '../Input/'
import { FcGoogle } from "react-icons/fc";
import {ImFacebook2} from "react-icons/im"
import { IconContext } from "react-icons"

const Register = ()=>{
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confpass, setConfpass] = useState('')
    const [dni, setDni] = useState('')
    const [direction, setDirection] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')

    const handleChange = (e) => {
        const {name, value } = e.target;
        const cases = {
            "name": setName,
            "surname": setSurname,
            "email": setEmail,
            "pass": setPass,
            "confpass": setConfpass,
            "dni": setDni,
            "direction": setDirection,
            "district": setDistrict,
            "city": setCity
        }
        cases[name](value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(pass!==confpass){
            alert("No coinciden las contraseñas");
        }
        else{
            alert("usuario registrado");
            console.log(name,surname,email,pass,dni,direction,district,city);
        }
        
    }
    return(
        
            <form onSubmit={handleSubmit}>
                <h1>Registrar</h1>
                <div className = "Group">
                <Input name='name' type='text' label='Nombre' onChange={handleChange} />
                <Input name='surname' type='text' label='Apellido' onChange={handleChange}/>
                </div>
                <Input name='email' type='email' label='Correo Electrónico' onChange={handleChange}/>
                <div className = "Group">
                <Input name='pass' type='password' label='Contraseña' onChange={handleChange}/>
                <Input name='confpass' type='password' label='Confirmar Contraseña' onChange={handleChange}/>
                </div>
                <Input name='dni' type='number' label='DNI' onChange={handleChange}/>
                <Input name='direction' type='text' label='Dirección' onChange={handleChange}/>
                <div className='Group'>
                <Input name='district' type='text' label='Distrito' onChange={handleChange}/>
                <Input name='city' type='text' label='Ciudad' onChange={handleChange}/>
                </div>
                <button type="submit" className='Reg-button'>Registrar</button>
                <hr size="3px" color="black"/>
                <IconContext.Provider value={{ size: "40px"}}><a href='https://www.facebook.com/'><ImFacebook2/></a><a href='https://www.google.com/'><FcGoogle/></a></IconContext.Provider>
                
            </form>
       
    )
}

export default Register;