function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return `Olá, ${algumNome}, como vai?`
  }

  return <p>{gerarSaudacao(nome)}</p>
}

export default Saudacao
