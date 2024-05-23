// Write your code here
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationData} = props
  const {vaccinationByAge} = vaccinationData
  return (
    <div className="PieChart">
      <h1>Vaccination By Age</h1>
      <ResponsiveContainer width={1000} height={300}>
        <PieChart>
          <Pie
            data={vaccinationByAge}
            cx="50%"
            cy="50%"
            startAngle={0}
            endAngle={360}
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="blue" />
            <Cell name="45-60" fill="pink" />
            <Cell name="Above 60" fill="green" />
          </Pie>
          <Tooltip />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationByAge
