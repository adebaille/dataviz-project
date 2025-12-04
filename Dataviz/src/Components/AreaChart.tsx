import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useQuery } from "@tanstack/react-query";

type ApiResult = {
  "year(annee_tournage)": number;
  type_tournage: string;
  nb_tournages: number;
};

type ChartRow = {
  year: number;
  [key: string]: number | string;
};

export default function Areachart() {
  // 1. Appel API avec React Query
  const { data, isPending, error } = useQuery({
    queryKey: ["Areachart"],
    queryFn: async () => {
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
      url.searchParams.set(
        "select",
        "year(annee_tournage),type_tournage,count(*) as nb_tournages"
      );
      url.searchParams.set("group_by", "annee_tournage,type_tournage");

      const response = await fetch(url.toString());
      return response.json();
    },
  });

  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {(error as Error).message}</p>;

  // 2. Transformer les données pour Recharts
  const grouped: Record<number, ChartRow> = {};

  for (const el of data.results as ApiResult[]) {
    const year = el["year(annee_tournage)"];
    if (!grouped[year]) grouped[year] = { year };
    grouped[year][el.type_tournage] = el.nb_tournages;
  }

  const chartData: ChartRow[] = Object.values(grouped);

  return (
    <AreaChart
      style={{
        width: "100%",
        maxWidth: "700px",
        height :"100%",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={chartData}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis
        width="auto"
        label={{
          value: "Nombre de tournage",
          angle: -90,
          position: "insideLeft",
        }}
      />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="Long métrage"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
        activeDot={{ r: 8 }}
      />
      <Area
        type="monotone"
        dataKey="Série TV"
        stackId="2"
        stroke="#8884d8"
        fill="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Area
        type="monotone"
        dataKey="Téléfilm"
        stackId="3"
        stroke="#df5f42ff"
        fill="#df5f42ff"
        activeDot={{ r: 8 }}
      />
      <Area
        type="monotone"
        dataKey="Série Web"
        stackId="5"
        stroke="#ffc658"
        fill="#ffc658"
        activeDot={{ r: 8 }}
      />
    </AreaChart>
  );
}
