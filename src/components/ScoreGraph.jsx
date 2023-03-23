import "../styles/graph-score.css";
import { Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';
import PropTypes from 'prop-types';


/**
 * Generates radialBar chart for day's score
 * @param {array} data 
 * @param {object} style for label
 * @returns pie chart
 */

export default function ScoreGarph({score}){

  const name = Math.floor(score * 100) + "%";

  const blankSpace = 1 - score;

  const data = [
    { name: name, score: score, fill: "#FF0000" },
    { name: "", score: blankSpace, fill: "rgba(0, 0, 0, 0)" }
  ];
  const fill = [
    { name: "", score: 1, fill: "#FFF" }
  ];

  return(
    <div className="score-graph">
      <p className="score-graph_title" >Score</p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={fill}
            dataKey="score"
            cx={90}
            cy={90}
            outerRadius={60}
          />
          <Pie
            data={data}
            dataKey="score"
            cx={90}
            cy={90}
            innerRadius={60}
            outerRadius={68}
            paddingAngle={0}
            cornerRadius={10}
          />
          <Legend iconSize={0} layout="vertical" align="center" verticalAlign="middle" content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
      
    </div>
  );
}

/**
 * Generated custom legend for the pieChart
 * @param {array} playload handles the position of the legend relative to the mouse's position
 * @returns the content that is to be displayed in the legend
 */
const CustomLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="score_custom-legend">
      {
        payload.map((entry, index) => (
          <li key={`item-${index}`}>
            {entry.value}
          </li>
        ))
      }
      <p>de votre objectif</p>
    </ul>
  );
};


//PropTypes
ScoreGarph.propTypes = {
  score: PropTypes.number
}