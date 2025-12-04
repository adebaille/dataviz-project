import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useQuery } from "@tanstack/react-query";

export default function Linecharts() {
  const { data, isPending, error } = useQuery({
    queryKey: ["LineCharts"],
    queryFn: async () => {
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?"
      );
      url.searchParams.set("select", "year(annee_tournage), count(*) as total");
      url.searchParams.set("group_by", "annee_tournage");

      const reponse = await fetch(url.toString());
      return reponse.json();
    },
  });

  if (isPending) return <p>Chargement</p>;
  if (error) return <p>Error : {error.message}</p>;

  const temp = [];

  for (const el of data.results) {
    temp.push({
      year: el["year(annee_tournage)"],
      total: el.total,
    });
  }

  return (
    <>
      <LineChart
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "100%",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={temp}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis dataKey="total" width="auto" label={{ value: 'Nombre de tournage', angle: -90, position: 'insideLeft' }}/>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
}
