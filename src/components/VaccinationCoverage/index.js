// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationData} = props
  const {last7DaysVaccination} = vaccinationData
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number * 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="barChart">
      <h1>Vaccination Coverage</h1>
      <ResponsiveContainer width={1000} height={300}>
        <BarChart data={last7DaysVaccination} margin={{top: 40}}>
          <XAxis dataKey="vaccine_date" stroke="silver" />
          <YAxis tickFormatter={dataFormatter} stroke="silver" />
          <Tooltip
            wrapperStyle={{
              width: 120,
              backgroundColor: '#ccc',
            }}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar dataKey="dose_1" name="dose 1" fill="#2d87bb" barSize="20%" />
          <Bar dataKey="dose_2" name="dose 2" fill="#f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
