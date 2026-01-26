import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 text-center">
          
          <div className="p-5 hero-card-magic">
            
            <div style={{ fontSize: '3rem', marginBottom: '-10px' }}>°o°</div>

            <h1 className="display-4 fw-bold mb-3" style={{ color: '#000000' }}>
              {greeting}
            </h1>
            <p className="lead mb-4 text-muted" style={{ fontSize: '1.2rem' }}>
              Donde cada sorbo es una aventura y cada bocado tiene polvo de hadas.
            </p>
            
            <button className="btn btn-danger btn-lg rounded-pill btn-magic-red">
              ✨ Explorar el Menú
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
