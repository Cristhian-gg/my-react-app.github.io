import React from 'react';

const EnlaceBoton = ({ enlace, texto, estilo }) => {
  return (
    <a href={enlace} className={`btn ${estilo}`} target="_blank" rel="noopener noreferrer">
      {texto}
    </a>
  );
};

export default EnlaceBoton;
