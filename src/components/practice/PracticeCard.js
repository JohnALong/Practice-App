import React, { Component } from 'react';
import { Link } from "react-router-dom"

class PracticeCard extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={require(`../cue_images/${this.props.practice.image}`)} alt="cue" />
          <h3>Name: <span>{this.props.practice.builder.name}</span></h3>
          <p>Style: {this.props.practice.style.name}</p>
          <Link to={`/practices/${this.props.practice.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default PracticeCard;