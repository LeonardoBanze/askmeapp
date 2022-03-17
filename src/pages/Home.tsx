import { useNavigate } from "react-router-dom";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import '../styles/auth.scss';


import { Button }  from "../components/Button";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


 

export const Home = () => {
  const history = useNavigate();

  const {signInWithGoogle, user} = useContext(AuthContext)

 async function navigateToNewRoom(){
    if (!user){
     await signInWithGoogle();
    }
        history('/rooms/new'); 
  }
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
          <button onClick={navigateToNewRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o codigo da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};
