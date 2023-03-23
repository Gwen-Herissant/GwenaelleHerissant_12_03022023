import "../styles/graph-score.css";
import { Legend, ResponsiveContainer, RadialBar, RadialBarChart } from 'recharts';
import PropTypes from 'prop-types';


/**
 * Generates radialBar chart for day's score
 * @param name number + string
 * @param score number
 * @param {array} data 
 * @returns pie chart
 */

export default function ScoreGarph({score}){

  const name = Math.floor(score * 100) + "%";

  const data = [
    {
      name: "",
      score: 1,
      //fill: "#8884d8"
      opacity: 0
    },
    {
      name: name,
      score: score,
      fill: "#FF0000",
    }
  ];

  return(
    <div className="score-graph">
      <p className="score-graph_title" >Score</p>
      <div className="score-graph_wrapper" style={{ backgroundColor: "#FFFFFF", borderRadius: "50%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            // width={400}
            // height={200}
            cx="50%"
            cy="50%"
            innerRadius={23}
            outerRadius={100}
            barSize={8}
            data={data}
          >
            <RadialBar
              minAngle={15}
              cornerRadius="50%"
              background
              clockWise
              dataKey="score"
              isAnimationActive={false}
            />
            <Legend iconSize={0} layout="vertical" align="center" verticalAlign="middle" content={<CustomLegend />} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
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