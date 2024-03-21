import { useState } from 'react';
import Map from '../components/Map';
import Catalog from '../components/Catalog';
import styles from '../styles/dashboard.module.css';

const Dashboard = ({ polygons }) => {
  const [selectedPolygonId, setSelectedPolygonId] = useState(null);

  return (
    <div className={styles.container}>
      <Map polygons={polygons} setSelectedPolygon={setSelectedPolygonId} className={styles.map} />
      <Catalog selectedPolygonId={selectedPolygonId} polygons={polygons} className={styles.catalog} />
    </div>
  );
};

export default Dashboard;

export async function getStaticProps() {
  // Obtenha dados de polígonos da sua fonte de dados
  const polygons = await fetch('http://localhost:3000/api/polygons').then((res) => res.json());

  return {
    props: {
      polygons
    }
  };
}