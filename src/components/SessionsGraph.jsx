import "../styles/graph-sessions.css";
import {LineChart, Line,  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * 
 * @param {array} sessions of objects containing day of session and length of session 
 * @returns line chart
 */

export default function SessionsGraph({sessions}){
  return(
    <div className="sessions-graph">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={sessions}>
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} />
          <XAxis dataKey="day"/>
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}