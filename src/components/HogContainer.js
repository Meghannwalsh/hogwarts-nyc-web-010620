import React, { Fragment } from "react";
import HogCard from './HogCard'

class HogContainer extends React.Component {
  render() {
    
    return (
      <div>
        <select onChange={(event) => this.props.handleChange(event)}>
          <option value="all">all</option>
          <option  value="greased">greased</option>
          <option  value="ungreased"> ungreased</option>
        </select>
        {this.props.hogs.map((hog, index)=> <HogCard key={index} hog={hog}/>)}
      </div>
    );
  }
}

export default HogContainer;
