import "../styles/graph-performance.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * Generates radarChart for performance data
 * @param {array} data contains object for kinf of performance and its value 
 * @returns radar chart
 */

export default function PerformanceGraph({data}){
  return(
    <div className="performance-graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis dataKey="kind" fontSize={12} fontWeight={500} tick={{ fill: "#fff"}} />
          <Radar name="Mike" dataKey="value" fill="#FF0101B2" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}