// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const statusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'LOADING',
}

class CowinDashboard extends Component {
  state = {vaccinationData: [], status: statusList.initial}

  componentDidMount() {
    this.fetchDataList()
  }

  fetchDataList = async () => {
    this.setState({status: statusList.inProgress})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok) {
      const data = await response.json()
      const formatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({vaccinationData: formatedData, status: statusList.success})
    } else if (response.status === 404) {
      this.setState({status: statusList.failure})
    }
  }

  getViewDetails = () => {
    const {status, vaccinationData} = this.state
    switch (status) {
      case statusList.success:
        return (
          <>
            <VaccinationCoverage vaccinationData={vaccinationData} />
            <VaccinationByGender vaccinationData={vaccinationData} />
            <VaccinationByAge vaccinationData={vaccinationData} />
          </>
        )
      case statusList.failure:
        return (
          <div className="failureView">
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
            <h1>Something went wrong</h1>
          </div>
        )
      case statusList.inProgress:
        return (
          <div data-testid="loader" className="loader">
            <Loader type="ThreeDots" color="blue" width={80} height={80} />
          </div>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1>Co-WIN</h1>
        </nav>
        <section className="bgContainer">
          <h1>CoWIN Vaccination in India</h1>
          {this.getViewDetails()}
        </section>
      </>
    )
  }
}
export default CowinDashboard
