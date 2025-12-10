import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import { useQuery } from "@tanstack/react-query";
import { Rectangle } from "recharts";



export default function SimpleBarchart() {
  const { data, isPending, error } = useQuery({
    queryKey: ["SimpleBarcharts2"],
    queryFn: async () => {
      const url = new URL("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records");
      url.searchParams.set("select", "nom_realisateur, count(*) as total");
      url.searchParams.set("limit", "11")
      url.searchParams.set("order_by", "total DESC" )
      url.searchParams.set("group_by", "nom_realisateur");

      const reponse = await fetch(url.toString());
      return reponse.json();
    },
  }); 
  if (isPending) return <p>Chargement</p>;
  if (error) return <p>Error : {error.message}</p>;

  const temp = [];

  for (const el of data.results) {
    if (el.nom_realisateur !== null) {
    temp.push({
      nom_realisateur: el.nom_realisateur,
      total: el.total,
    })
  };
  }
console.log(temp);
  return (
    <>
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={temp}
      margin={{
        top: 10,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey= "nom_realisateur" />
      <YAxis width="auto" fill="black" label={{ value: 'Par ordre décroissant', angle: -90, position: 'insideLeft'}}/>
      <Tooltip />
      <Legend />
      <Bar dataKey="total" fill="#d85e5eff" activeBar={<Rectangle fill="purple" stroke="purple" />} />
    </BarChart>
    </>
  );
}

