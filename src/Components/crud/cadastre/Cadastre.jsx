import cadastre from '../crud.module.css';
import { urlUser } from '../../api';
import { useHistory } from 'react-router';

export const Cadastre = () => {
    const link = useHistory();
    const addUser = e => {
        e.preventDefault()
        let values = document.querySelectorAll(`.${cadastre.input}`), valid = false;

        values.forEach(el => {
            if(el.value === ''){
                el.style.border = '1px solid red';
                valid = true;
            }
        });

        if(!valid){
            let data = {
                login: values[0].value,
                email: values[1].value,
                password: values[2].value
            }

            fetch(urlUser, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).then(a => {
                values && link.push('/login');    
            })
            
        }        
    }

    return(
        <section className={cadastre.area}>
            <h1>Cadastre-se</h1>
            <form action="" className={cadastre.form}>
                <label htmlFor="user">
                    <input className={cadastre.input} placeholder="Usuário" name="user" type="text" />
                </label>
                <label htmlFor="password">
                    <input className={cadastre.input} placeholder="E-mail" name="email" type="email"/>
                </label>
                <label htmlFor="password">
                    <input className={cadastre.input} placeholder="Senha" name="password" type="text"/>
                </label>
                <button onClick={addUser} className={cadastre.button}>Entrar</button>
            </form>
        </section>
    )
}