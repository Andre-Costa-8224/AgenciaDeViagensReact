import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, useAuth } from '../../providers/auth';

const Perfil = () => {

    const {user, setUser} = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("user")
        setUser({
            nome: ""
        })
    }

    var log = <p className='cor-alert'><i class="material-icons">warning</i><p className=''>faça login ou cadastre-se</p></p>

    var aparece = <section><Link to={"/"}><button type={"submit"} className='btn btn-primary' onClick={handleLogout}>SAIR</button></Link></section>

    if (user.nome == "") {
        log = ""
        aparece = <section><Link to={"/perfil"}><button type={"submit"} disabled className='btn btn-primary' onClick={handleLogout}>SAIR</button></Link></section>
    }

  return(
      <html>
          <head><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/></head>
    <div className='App-header'>
        <section style={{backgroundColor: "wheat", padding: "20px", borderRadius: "8px"}}>
            <h1>Perfil</h1>
            <h3>Nome: {user.nome}</h3>
        </section>
        <br />
        
        {aparece}
    </div>
    </html>
  );
}

export default Perfil;