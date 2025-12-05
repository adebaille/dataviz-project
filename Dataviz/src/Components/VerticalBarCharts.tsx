import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import { useQuery } from "@tanstack/react-query";
import { Rectangle } from "recharts";



export default function SimpleBarchart() {
  const { data, isPending, error } = useQuery({
    queryKey: ["SimpleBarcharts"],
    queryFn: async () => {
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?select=type_tournage&group_by=GROUP%20BY&limit=20"

      );
      url.searchParams.set("select", "type_tournage, count(*) as total");
      url.searchParams.set("group_by", "type_tournage");

      const reponse = await fetch(url.toString());
      return reponse.json();
    },
  });

  if (isPending) return <p>Chargement</p>;
  if (error) return <p>Error : {error.message}</p>;

  const temp = [];

  for (const el of data.results) {
    temp.push({
      type_tournage: el.type_tournage,
      total: el.total,
    });
  }

  return (
    <>
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={temp}
      margin={{
        top: 5,
        right: 0,
        left: 30,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey= "type_tournage" />
      <YAxis width={40} fill="black" label={{ value: 'Nombre de tournages', angle: -90, position: 'insideLeft',}}/>
      <Tooltip />
      <Legend />
      <Bar dataKey="type_tournage" name= "Répartition par type de tournage" fill="black" activeBar={<Rectangle fill="red" stroke="blue" />} />
      <Bar dataKey="total" fill="#82ca9d" activeBar={<Rectangle fill="red" stroke="purple" />} />
    </BarChart>
    </>
  );
}

