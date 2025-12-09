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
    //filtre par type tournage
    <>
    <label htmlFor="types"> Filtre par type de tournage</label>
      <select
        name="types"
        id="types"
        value={type}
        onChange={(element) => setType(element.target.value)}>
        <option value="All">All</option>
        {typeTournages?.results?.map((item: Record<string, string>) => (
          <option key={item.type_tournage} value={item.type_tournage}>
            {item.type_tournage}
          </option>
        ))}
      </select>

      {/*Filtre par année de tournage*/}
      <label htmlFor="currentYear"> Filtre par année de tournage</label>
      <select
        name="year"
        id="year"
        value={currentYear}
        onChange={(element) => setCurrentYear(element.target.value)}>
        <option value="All">All</option>
        {year?.results?.map((item: Record<string, string>) => (
          <option key={item.year} value={item.year}>
            {item.year}
          </option>
        ))}
      </select>

      {/*Construction graphique */}
      <ComposedChart
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
          bottom: 10,
          left: 0,
        }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="ardt" type="category" scale="band" width="auto" />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" barSize={20} fill="#6d69ccff" />
      </ComposedChart>
    </>
  );
}
