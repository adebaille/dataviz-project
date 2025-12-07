import Areachart from "../Components/AreaChart";
import Linecharts from "../Components/Linecharts";
import HorizontalBarChart from "../Components/HorizontalBarChart";
import SimpleBarchart from "../Components/VerticalBarCharts";

export default function Analyse() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 space-y-6">
      <h1 className="text-3xl font-bold">Analyse</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-3">Nombre de tournages par année</h2>
          <Linecharts />
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-3">Types × Année</h2>
          <SimpleBarchart />
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-3">Répartition par type de tournage</h2>
          <Areachart />
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-3">Tournages par arrondissement</h2>
          <HorizontalBarChart />
        </div>

      </div>
    </div>
  )
}