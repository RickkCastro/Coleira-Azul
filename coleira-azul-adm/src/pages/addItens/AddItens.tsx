import "./styles.css";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../backend/firebase";
import { getAuth } from "firebase/auth";

export function AddItensPG() {
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [cover_img, setCover_img] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [relese_date, setRelese_date] = useState<number>(0);
  const [type, setType] = useState<string>("Filme");
  const [num_eps, setNum_eps] = useState<number>(0);
  const [director, setDirector] = useState<string>("");

  const itemCollection = collection(db, "itens");

  function handleEnviar() {
    if (name != "" && desc != "" && cover_img != "" && director != "") {
      addItemToDB();
    } else {
      alert("Erro: valores vazios encontrados");
    }
  }

  async function addItemToDB() {
    const newItem = await addDoc(itemCollection, {
      name,
      desc,
      cover_img,
      duration,
      relese_date,
      type,
      num_eps,
      director,
    });

    console.log(newItem);
	alert("Item enviado!");
	location.reload()
  }

  useEffect(() => {
	console.log(auth.currentUser)
  },[])

  return (
    <div>
      <h1 className="title">Adicionar itens</h1>

      <div className="Form">
        <label className="label">
          <span className="labelTitle">Nome:</span>
          <input
            type={"text"}
            name="name"
            className="input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <label className="label">
          <span className="labelTitle">Imagem de capa (URL):</span>
          <input
            type={"text"}
            name="cover_img"
            onChange={(e) => setCover_img(e.target.value)}
            value={cover_img}
          />
        </label>

        <label className="label">
          <span className="labelTitle">Tipo do item:</span>
          <select
            className="SelectTrigger"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option>Filme</option>
            <option>Série</option>
            <option>Especial</option>
          </select>
        </label>

        <label className="label">
          <span className="labelTitle">Duração (Seg):</span>
          <input
            type={"number"}
            name="duration"
            onChange={(e) => setDuration(parseInt(e.target.value))}
            value={duration}
          />
        </label>

        <label className="label">
          <span className="labelTitle">Número de episódio:</span>
          <input
            type={"number"}
            name="num_eps"
            onChange={(e) => setNum_eps(parseInt(e.target.value))}
            value={num_eps}
          />
        </label>

        <label className="label">
          <span className="labelTitle">Data de lançamento:</span>
          <input
            type={"number"}
            name="relese_date"
            onChange={(e) => setRelese_date(parseInt(e.target.value))}
            value={relese_date}
          />
        </label>

        <label className="label">
          <span className="labelTitle">Diretor:</span>
          <input
            type={"text"}
            name="director"
            onChange={(e) => setDirector(e.target.value)}
            value={director}
          />
        </label>

        <label className="labelDesc">
          <span className="labelTitle">Descrição:</span>
          <textarea
            rows={5}
            className={"desc"}
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </label>
      </div>
      <label className="label">
        <input
          type={"button"}
          name="enviar"
          value={"Enviar"}
          className={"btEnviar"}
          onClick={handleEnviar}
        />
      </label>
    </div>
  );
}
