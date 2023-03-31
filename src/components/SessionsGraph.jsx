import "../styles/graph-sessions.css";
import {LineChart, Line,  XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Generated custom tooltip for the lineChart
 * @param {array} active checks if the tooltip is active
 * @param {array} playload handles the position of the tooltip relative to the mouse's position
 * @returns the content that is to be displayed in the tooltip
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="session_custom-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
}


/**
 * Generates lineChart for sessions data
 * @param {array} sessions of objects containing day of session and length of session 
 * @returns line chart
 */
export default function SessionsGraph({sessions}){
  return(
    <div className="sessions-graph">
      <p className="sessions-graph_title" >Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={sessions}> 
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} isAnimationActive={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize={12} fontWeight={500} stroke="#fff" opacity={0.5} />
          <Tooltip 
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

//Prop types à ajouter
SessionsGraph.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number
    })
  )
};