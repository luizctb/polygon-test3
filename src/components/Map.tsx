"use client"

import { SetStateAction, useState } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ({ polygons, setSelectedPolygon }) => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handlePolygonClick = (feature: SetStateAction<null>) => {
    setSelectedFeature(feature);
    setSelectedPolygon(feature.properties.id); // passa o id do polígono selecionado
  };

  return (
    <ReactMapboxGl
      style="mapbox://styles/mapbox/streets-v11"
      accessToken="pk.eyJ1IjoibHVpenRvbWUiLCJhIjoiY2x0N2o0eHZrMG10ajJrbzhlbG94ZHFteSJ9.71nzP9we6jG5ekSKhNxXBQ"
      containerStyle={{
        height: '100vh',
        width: '70%'
      }}
    >
      <Layer type="fill" id="polygons" paint={{ 'fill-color': '#088', 'fill-opacity': 0.8 }}>
        {polygons.map((polygon: { id: any; coordinates: any; }) => (
          <Feature
            key={polygon.id}
            coordinates={polygon.coordinates}
            onClick={() => handlePolygonClick(polygon)}
          />
        ))}
      </Layer>
    </ReactMapboxGl>
  );
};

export default Map;