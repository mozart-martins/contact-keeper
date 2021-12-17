
const Spinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="bg-danger text-dark spinner-grow-lg" role="status">
                <span className="visually-hidden">Carregando...</span>
            </div>
        </div>
    )
}

export default Spinner