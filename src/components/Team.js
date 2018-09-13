import React, { Component } from 'react';
import '../styles/App.css';

class Team extends Component {
    
    constructor(props){
        super(props);
    }
    
  render() {
    return (
        <div>
           <label>Name: {this.props.name}</label><br/> 
            <label>TLA: {this.props.tla}</label><br/> 
            <img src={this.props.logo} className="logo" alt="logo" /><br/>
            <label>Address: {this.props.address}</label><br/> 
            <label>Phone: {this.props.phone}</label><br/> 
            <label>Website: {this.props.website}</label><br/> 
            <label>Email: {this.props.email}</label><br/> 
            <label>Founded: {this.props.founded}</label><br/> 
            <label>Club Colors: {this.props.clubColors}</label><br/> 
        </div>
    );
  }
}

export default Team;