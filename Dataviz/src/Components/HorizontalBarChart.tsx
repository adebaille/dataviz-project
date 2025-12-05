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

export default function HorizontalBarChart() {
    // Appel API avec React Query
  const { data, isPending, error } = useQuery({
    queryKey: ["HorizontalBarChart"],
    queryFn: async () => {
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
    // Gestion des Query Params
      url.searchParams.set("select", "ardt_lieu, count(*) as total");
      url.searchParams.set("group_by", "ardt_lieu");
      url.searchParams.set("where", "startswith(ardt_lieu,'75')");

      const response = await fetch(url.toString());
      return response.json();
    },
  });

  if (isPending) return <p>Chargement</p>;
  if (error) return <p>Error : {error.message}</p>;

  const temp = [];

  for (const el of data.results) {
    // Condition pour garder seulement les arrondissements commençant par 75
    if (el.ardt_lieu && el.ardt_lieu.startsWith("75")) {
      temp.push({
        ardt: el.ardt_lieu,
        total: el.total,
      });
    }
  }

// Construction Graphique
  return (
    <LineChart
      layout="vertical"
      style={{
        width: "100%",
        maxWidth: "300px",
        maxHeight: "70vh",
        aspectRatio: 1 / 1.618,
      }}
      responsive
      data={temp}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="total" type="number" width="auto" />
      <YAxis dataKey="ardt" type="category" width="auto" />
      <Tooltip />
      <Legend />
      <Line dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}
