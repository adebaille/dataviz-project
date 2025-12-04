import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function MonGraphique() {
  const data = [
    { name: 'Janvier', ventes: 400 },
    { name: 'Février', ventes: 300 },
    { name: 'Mars', ventes: 500 },
    { name: 'Avril', ventes: 600},
  ];

  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="ventes" stroke="#8884d8" />
    </LineChart>
  );
}