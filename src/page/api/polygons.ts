import type { NextApiRequest, NextApiResponse } from 'next';

// Simulação de dados de polígonos
const polygons = [
  { id: 1, name: 'Polígono 1', coordinates: [[-0.08, 51.509], [-0.06, 51.503], [-0.047, 51.51], [-0.065, 51.52], [-0.08, 51.509]], description: 'Descrição do Polígono 1' },
  { id: 2, name: 'Polígono 2', coordinates: [[-0.06, 51.5], [-0.05, 51.48], [-0.04, 51.52], [-0.06, 51.5]], description: 'Descrição do Polígono 2' },
  // Adicione mais polígonos conforme necessário
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(polygons);
}