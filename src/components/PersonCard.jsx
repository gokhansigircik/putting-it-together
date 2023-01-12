import React, { Component } from "react";

export class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
    };
  }

  render() {
    const { personName, personHair } = this.props;
    const { age } = this.state;
    const birthday = () => this.setState({ age: this.state.age + 1 });

    return (
      <div className="card mb-3">
        <div className="card-body">
          <h2>{personName}</h2>
          <p className="card-text">Age: {age}</p>
          <p className="class-text">Hair Color: {personHair}</p>
          <button className="btn btn-success" onClick={birthday}>Birthday</button>
        </div>
      </div>
    );
  }
}

export default PersonCard;
