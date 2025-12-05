import VerticalBarCharts from "../Components/VerticalBarCharts";
import Areachart from "../Components/AreaChart";
import Linecharts from "../Components/Linecharts";

export default function Analyse () {
    return (
        <h1>
            <Linecharts/>
            <br />
            <Areachart />
            <br />
            <VerticalBarCharts />
        </h1>
    )
}