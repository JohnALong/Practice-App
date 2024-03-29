import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

class PracticeDetail extends Component {

    state = {
        image: "default_cues.jpg",
        builderName: "",
        styleName: ""
    }

    componentDidMount() {
        console.log("PracticeDetail: ComponentDidMount", this.props);
        APIManager.get(this.props.practiceId)
            .then((practice) => {
                this.setState({
                    image: practice.image,
                    builderName: practice.builder.name,
                    styleName: practice.style.name
                });
            });
    }

    render() {
        console.log("detail render", this.state)
        console.log("props render", this.props)
        return (
            <div className="card">
                <div className="card-content">
                <img src={require(`../cue_images/${this.state.image}`)} alt="cue" />
                    <h3>Name: <span>{this.state.styleName}</span></h3>
                    <p>Breed: {this.state.builderName}</p>
                </div>
            </div>
        );
    }
}

export default PracticeDetail;

