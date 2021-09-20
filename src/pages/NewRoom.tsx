import { Button } from "../components/Button";

import illustation from "../assets/illustration.svg";
import logo from "../assets/logo.svg";

import "../styles/auth.scss";

export function NewRoom() {
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
          <h2>Criar uma nova sala</h2>
          <div className="separator"> ou entre em uma sala </div>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          {// eslint-disable-next-line jsx-a11y/anchor-is-valid
          }
          <p>Quer entrar em uma sala existent? <a href = "#"> Clique aqui</a>
          </p>
        </div>
      </main>
    </div>
  );
}
