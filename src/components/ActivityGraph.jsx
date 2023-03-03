import "../styles/graph-activity.css";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * Generates the barChart for the activity data
 * @param {array} sessions contains every user sessions with some data 
 * @returns barchart displaying sessions's data : kg and kCal
 */

export default function ActivityGraph({sessions}){
  return(
    <div className="activity-graph">
      <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" fill="#282D30" /> 
            <Bar dataKey="calories" fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
}