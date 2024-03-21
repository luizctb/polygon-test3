"use client"

const Catalog = ({ selectedPolygonId, polygons }) => {
    const selectedPolygon = polygons.find((polygon: { id: any; }) => polygon.id === selectedPolygonId);
  
    return (
      <div>
        <h2>Informações do Polígono Selecionado</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {selectedPolygon && (
              <tr>
                <td>{selectedPolygon.id}</td>
                <td>{selectedPolygon.name}</td>
                <td>{selectedPolygon.description}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Catalog;