import React from "react";

export default function Paginacao({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="Paginacao">
      <div className="PaginacaoMargem">
      {gotoPrevPage && <button className="Botao" onClick={gotoPrevPage}>Anterior</button>} 
      </div>
      <div>
      {gotoNextPage && <button className="Botao" onClick={gotoNextPage}>Próximo</button>}
      </div>
    </div>
  );
}