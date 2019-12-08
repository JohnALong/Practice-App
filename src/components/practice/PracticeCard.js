import React, { Component } from 'react';

class PracticeCard extends Component {
  render() {
    console.log("props in card", this.props)
    return (
      <div>
        <div>
          <h3>Name: <span>{this.props.practice.builder.name}</span></h3>
          <p>Style: {this.props.practice.style.name}</p>
        </div>
      </div>
    );
  }
}

export default PracticeCard;