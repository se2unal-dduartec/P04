import React, { Component } from 'react';
import '../styles/App.css';
import Team from './Team';
import axios from 'axios';

class TeamList extends Component {
    constructor(props){
        super(props);
        this.state = {
            teams : []
        };
    }
    
    componentWillMount(){
        axios({
            headers: { 'X-Auth-Token': '545c97ceb95c4af2865f2e5cb4003d26' },
            method:'get',
            url:' https://api.football-data.org/v2/competitions/2021/teams',
        })
    .then((res)=>{
        const teams = res.data.teams;
        this.setState({teams : teams});
        console.log(this.state.teams);
    })
    .catch(function (error) {
        console.log(error);
    });
    }
    
  render() {
      const todoItems = this.state.teams.map((todo) =>
        <div key={todo.id} className="team">
         {<Team 
         name= {todo.name}
        tla= {todo.tla}
        logo= {todo.crestUrl}
        address= {todo.address}
        phone= {todo.phone}
        website= {todo.website}
        email= {todo.email}
        founded= {todo.founded}
        clubColors= {todo.clubColors}
         />}
         </div>
        );
    return (
      <div>
        {todoItems}
      </div>
    );
  }
}


export default TeamList;