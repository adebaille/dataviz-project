
import Areachart from "../Components/AreaChart";
import Linecharts from "../Components/Linecharts";
import HorizontalBarChart from "../Components/HorizontalBarChart";

export default function Analyse () {
    return (
        <h1>
            <Linecharts/>
            <br />
            <Areachart />

            <HorizontalBarChart />
        </h1>
    )
}