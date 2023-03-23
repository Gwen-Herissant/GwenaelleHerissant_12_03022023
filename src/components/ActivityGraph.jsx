import "../styles/graph-activity.css";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


/**
 * Generated custom tooltip for the barChart
 * @param {array} active checks if the tooltip is active
 * @param {array} playload handles the position of the tooltip relative to the mouse's position
 * @returns the content that is to be displayed in the tooltip
 */
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="activity_custom-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};


/**
 * Generates the barChart for the activity data
 * @param {array} sessions contains every user sessions with some data 
 * @returns barchart displaying sessions's data : kg and kCal
 */
export default function ActivityGraph({sessions}){
  return(
    <div className="activity-graph">
      <p className="activity-graph_title">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={sessions}
            margin={{
              top: 15,
              right: 20,
              left: 25,
              bottom: 23,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="2" />
            <XAxis dataKey="id" tickLine={false} />
            <Label value="Activité quotidienne" offset={0} position="insideTop" />
            <YAxis orientation="right" axisLine={false} tickLine={false} />
            <Tooltip 
              content={<CustomTooltip />}
              wrapperStyle={{ outline: "none" }}
            />
            
            <Legend verticalAlign="top" align="right" height={60} iconType="circle" iconSize={8} />
            <Bar dataKey="kilogram" name="Poid (kg)" fill="#282D30" barSize={7} radius={[3.5, 3.5, 0, 0]} isAnimationActive={false} /> 
            <Bar dataKey="calories" name="Calories brûlées (Kcal)" fill="#E60000" barSize={7} radius={[3.5, 3.5, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
}


//Prop types à ajouter
ActivityGraph.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number
    })
  )
};