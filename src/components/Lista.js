function Lista({ itens }) {
  return (
    <>
      <h3> Lista de Coisas Boas:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>não hà itens na lista!</p>
      )}
    </>
  );
}

export default Lista;
