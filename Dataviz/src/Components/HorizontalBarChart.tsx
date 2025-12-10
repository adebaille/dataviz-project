import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function HorizontalBarChart() {
  // Appel API avec React Query pour paramètre du filtre par type de tournage
  const [type, setType] = useState("All");
  const { data: typeTournages } = useQuery({
    queryKey: ["AllTypeTournages"],
    queryFn: async () => {
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?"
      );
      // Gestion des Query Params
      url.searchParams.set("select", "type_tournage");
      url.searchParams.set("group_by", "type_tournage");

      const response = await fetch(url.toString());
      return response.json();
    },
  });

  // Appel API avec React Query pour paramètre du filtre par année de tournage
  const [currentYear, setCurrentYear] = useState("All");
  const { data: year } = useQuery({
    queryKey: ["Years"],
    queryFn: async () => {
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?"
      );
      // Gestion des Query Params
      url.searchParams.set("select", "year(annee_tournage) as year");
      url.searchParams.set("group_by", "annee_tournage");

      const response = await fetch(url.toString());
      return response.json();
    },
  });
  console.log(year);

  // Appel API avec React Query
  const { data, isPending, error } = useQuery({
    queryKey: ["HorizontalBarChart", type, currentYear],
    queryFn: async () => {
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
      // Gestion des Query Params
      url.searchParams.set("select", "ardt_lieu, count(*) as total");
      url.searchParams.set("group_by", "ardt_lieu");
      url.searchParams.set("where", "startswith(ardt_lieu,'75')");

      if (type !== "All") {
        url.searchParams.append("where", `type_tournage="${type}"`);
      }

      if (currentYear !== "All") {
        url.searchParams.append("where", `annee_tournage=date'${currentYear}'`);
      }

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

  return (
    <>
     <div className="flex h-full gap-4">
      <div className="flex flex-col gap-4 w-18 flex-shrink-0">
        {/* Filtre par type */}
        <div className="mt-[70px]">
          <label 
            htmlFor="types" 
            className="block text-xs font-medium text-gray-700 mb-1.5"
          >
            Type
          </label>
          <select
            name="types"
            id="types"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
          >
            <option value="All">Tous</option>
            {typeTournages?.results?.map((item: Record<string, string>) => (
              <option key={item.type_tournage} value={item.type_tournage}>
                {item.type_tournage}
              </option>
            ))}
          </select>
        </div>

        {/* Filtre par année */}
        <div>
          <label 
            htmlFor="year" 
            className="block text-xs font-medium text-gray-700 mb-1.5"
          >
            Année
          </label>
          <select
            name="year"
            id="year"
            value={currentYear}
            onChange={(e) => setCurrentYear(e.target.value)}
            className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
          >
            <option value="All">Toutes</option>
            {year?.results?.map((item: Record<string, string>) => (
              <option key={item.year} value={item.year}>
                {item.year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Création graphique */}
      <div className="flex-1 min-w-0 flex items-center justify-center">
        <ComposedChart
          style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
          layout="vertical"
          data={temp}
          margin={{
            top:10,
            right: 0,
            bottom: 10,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis 
            dataKey="ardt" 
            type="category" 
            scale="band" 
            width="auto"
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" barSize={20} fill="#6d69ccff" />
        </ComposedChart>
      </div>
    </div>
    </>
  );
}
