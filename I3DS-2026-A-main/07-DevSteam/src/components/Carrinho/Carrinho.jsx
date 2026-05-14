const Carrinho = ({ isAberto, onClose, itens = [] }) => {
  if (!isAberto) return null;

  return (
    <>
      {/* Overlay escuro */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 999 }}
        onClick={onClose}
      ></div>

      {/* Carrinho */}
      <div
        className="position-fixed end-0 top-0 mt-4 me-3"
        style={{ width: "350px", maxHeight: "90vh", zIndex: 1000 }}
      >
        <div className="card bg-dark border-info">
          <div className="card-header bg-dark border-info d-flex justify-content-between align-items-center">
            <h5 className="text-info mb-0">🛒 Carrinho</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>
          <div
            className="card-body"
            style={{ overflowY: "auto", maxHeight: "calc(90vh - 120px)" }}
          >
            {itens.length === 0 ? (
              <p className="text-muted text-center mb-0">
                Seu carrinho está vazio
              </p>
            ) : (
              <div className="d-grid gap-3">
                {itens.map((item, index) => (
                  <div
                    key={`${item.nome}-${index}`}
                    className="d-flex align-items-center gap-3 border border-secondary rounded p-2"
                  >
                    <img
                      src={item.imagem}
                      alt={item.nome}
                      width="60"
                      height="60"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-bold text-white">{item.nome}</div>
                      <div className="text-info">{item.preco}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="card-footer bg-dark border-info text-center">
            <button className="btn btn-info w-100">Ir para Carrinho</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrinho;
