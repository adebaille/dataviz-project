
import Areachart from "../Components/AreaChart";
import Linecharts from "../Components/Linecharts";
import HorizontalBarChart from "../Components/HorizontalBarChart";
import SimpleBarchart from "../Components/VerticalBarCharts";

export default function Analyse () {
    return (
        <>
            <Linecharts/>
            <SimpleBarchart />
            <Areachart />
            <HorizontalBarChart />
        </>
    )
}