import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import PracticeList from './practice/PracticeList'
import PracticeDetail from './practice/PracticeDetail'
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        <Route exact path="/practices" render={(props) => {
          return <PracticeList {...props} {...this.props} />
        }} />

        <Route path="/practices/:practiceId(\d+)" render={(props) => {
          return <PracticeDetail practiceId={parseInt(props.match.params.practiceId)} {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews