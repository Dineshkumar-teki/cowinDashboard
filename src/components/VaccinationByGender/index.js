// Write your code here
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationData} = props
  const {vaccinationByGender} = vaccinationData
  return (
    <div className="PieChart">
      <h1>Vaccination By Gender</h1>
      <ResponsiveContainer width={1000} height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByGender}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="blue" />
            <Cell name="Female" fill="pink" />
            <Cell name="Others" fill="yellow" />
          </Pie>
          <Legend iconType="circle" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
