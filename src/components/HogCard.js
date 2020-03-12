import React, { Fragment } from "react";

class HogCard extends React.Component {

    state ={
        flipped: false
    }

    handleClick = () => {
        // this.setState(prevState => {
        //     return {flipped: !prevState.flipped}
        // })

        this.setState({
            flipped: !this.state.flipped
        })
    }

  render() {
    //console.log("", this.state)
    return (
        // if flipped is true render this
        this.state.flipped ? 
        <div onClick={this.handleClick}>
            <br></br>
            <h3>Name:{this.props.hog.name} </h3>
            <h3>Speciality: {this.props.hog.speciality}</h3>
            <h3>Greased: {this.props.hog.greased}</h3>


            <h3>Weight: {this.props.hog.weight} </h3>
            <h3>Highest Medal:{this.props.hog['highest medal achieved']} </h3>
            <br></br>
        </div> :
        // if flipped is false render this
      <div>
          <br></br>
          <h3 onClick={this.handleClick}>Name: {this.props.hog.name}</h3>
         <br></br>
      </div>
    );
  }
}

export default HogCard;