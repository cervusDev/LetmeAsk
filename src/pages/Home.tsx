import { Button } from "../components/Button";

import illustation from "../assets/illustration.svg";
import logo from "../assets/logo.svg";
import googleImg from "../assets/google-icon.svg";

import "../styles/auth.scss";

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustation} alt="illustration" />
        <strong>Crie salas de Q&amp;A ao-vivo </strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="letmeask" />
          <button className="create-room">
            <img src={googleImg} alt="logo google" />
            Crie sua sala
          </button>
          <div className="separator"> ou entre em uma sala </div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
