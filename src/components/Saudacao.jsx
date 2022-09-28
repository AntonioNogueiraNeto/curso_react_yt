function Saudacao({nome}) {
    function gerarsaudacao(algumnome){
        return `olá mundo eu me chamo ${algumnome}`
    }

    return(
    <>
    {
        nome && 
        <p>{gerarsaudacao(nome)}</p>
    }
    </>

    )
}

export default Saudacao