import React, { useState } from "react";

function HideTab() {
  const [secret, setSecret] = useState("");
  const [key, setKey] = useState(null);
  const [error, setError] = useState(null);

  const hide = async () => {
    setError(null);
    setKey(null);
    const res = await fetch("http://127.0.0.1:8000/api/hide/", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ secret })
    });
    if (!res.ok) {
      const err = await res.json();
      setError(err.detail || "Error");
      return;
    }
    const data = await res.json();
    setKey(data.key);
  };

  return (
    <div>
      <h2>Ocultar</h2>
      <textarea rows={6} value={secret} onChange={e=>setSecret(e.target.value)} />
      <br/>
      <button onClick={hide}>Ocultar y generar Key</button>
      {key && <div>
        <p>Key (cópiala): <code>{key}</code></p>
      </div>}
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}

function RevealTab() {
  const [key, setKey] = useState("");
  const [secret, setSecret] = useState(null);
  const [error, setError] = useState(null);

  const reveal = async () => {
    setError(null); setSecret(null);
    const res = await fetch("http://127.0.0.1:8000/api/reveal/", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ key })
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.detail || "Error");
      return;
    }
    setSecret(data.secret);
  };

  return (
    <div>
      <h2>Revelar</h2>
      <input value={key} onChange={e=>setKey(e.target.value)} placeholder="Ingresa la key"/>
      <button onClick={reveal}>Revelar</button>
      {secret && <div>
        <h3>Secreto:</h3>
        <pre>{secret}</pre>
      </div>}
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("hide");
  return (
    <div style={{padding:20, fontFamily:"sans-serif"}}>
      <h1>One-time secret</h1>
      <nav>
        <button onClick={()=>setTab("hide")}>Ocultar</button>
        <button onClick={()=>setTab("reveal")}>Revelar</button>
      </nav>
      <hr/>
      {tab === "hide" ? <HideTab/> : <RevealTab/>}
      <footer style={{marginTop:20}}>
        <small>Backend: http://127.0.0.1:8000 | RedisInsight: http://localhost:8001</small>
      </footer>
    </div>
  );
}