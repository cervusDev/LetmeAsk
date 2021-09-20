import { FormEvent } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import { Button } from "../components/Button";

import logo from "../assets/logo.svg";
import googleImg from "../assets/google-icon.svg";
import illustation from "../assets/illustration.svg";

import "../styles/auth.scss";
import { useState } from "react";

export function Home() {
  const history = useHistory();

  const { user, signinWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signinWithGoogle();
    }
    history.push("/room/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`/room/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists.");
      return;
    }

    history.push(`/room/${roomCode}`);
  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleImg} alt="logo google" />
            Crie sua sala
          </button>
          <div className="separator"> ou entre em uma sala </div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
