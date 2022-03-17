import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import '../styles/auth.scss';

import {Button}  from '../components/Button';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from  "../context/AuthContext";

 

export const NewRoom = () => {
  const {user} = useContext(AuthContext)
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustracao simbolizando perguntas e respostas"
        />
        <strong>Crie aulas de Q&A ao vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h1>{user?.name}</h1>
        <h2>Criar sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  );
};
