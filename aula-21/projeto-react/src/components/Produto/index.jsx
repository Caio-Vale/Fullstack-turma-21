function Produto(props) {
    
    console.log(props)

    return (
        <>
           <div className="card d-flex justify-content-center align-items-center" style={{ width: '18rem', height:'25rem' }}>
                <img src={props.url} className="card-img-top" style={{ width: '15rem', height:'15rem' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nome}</h5>
                    <p className="card-text">{props.children}</p>
                    <p className="card-text">{props.preco}</p>
                    <a href="#" className="btn btn-warning">Adicionar no Carrinho</a>
                </div>
            </div>
        </>
    )
}

export default Produto