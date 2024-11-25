import { useState } from "react";

export default async function Registrar() {

event.preventDefault();
try {
  await fetch('http://localhost:3000/usuarios', {

 method: 'POST',
 headers: {'Content-Type': 'application/json'},
 body: JSON.stringify({
        nome:nome,
        email:email
    }) 
  });
} catch {
    alert("Ocorreu um erro na aplicação! :(" );
}

  return (

    <main>
    <form onSubmit={handleRegistro}>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Registrar</button>
    </form>
  </main>
        
  );
}