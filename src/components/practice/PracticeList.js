import React, { Component } from 'react'
//import the components we will need
import PracticeCard from './PracticeCard'
import APIManager from '../../modules/APIManager'

class PracticeList extends Component {
    //define what this component needs to render
    state = {
        practices: [],
    }

    componentDidMount() {
        console.log("Practice List: componentDidMount")
        APIManager.getAll()
            .then((practices) => {
                this.setState({
                    practices: practices
                })
            })
    }

    render() {
        console.log("Practice LIST: Render", this.state);

        return (
            <div className="container-cards">
                {this.state.practices.map(practice => <PracticeCard
                    key={practice.id} practice={practice} />
                )}
            </div>
        )
    }
}

export default PracticeList