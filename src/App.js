import React, { Component } from 'react';
import Main from './components/Main';
import SingleJob from './components/SingleJob';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import PropTypes from "prop-types";


class App extends Component {
  state = {
    desc: null,
    city: null,
    loading: false,
    searchitem: null,
    results: null
  }

  searchJobs = (e) => {
    e.preventDefault();

    this.setState({loading: !this.state.loading})

    axios.get(`https://jobs.github.com/positions.json?description=${this.state.desc}&location=${this.state.city}`).then(res => {
      if (res.data.length == 0 || !res.data) {
        this.setState({results: 'No result based on the job or city you entered.',loading: !this.state.loading})
      } else {
        this.setState({results: res.data,loading: !this.state.loading})
      }
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  getJobDesc = (e) => {
    const desc = e.target.value;
    this.setState({desc})
  }

  getCity = (e) => {
    const city = e.target.value;
    this.setState({city})
  }

  render() {
    return (
      <BrowserRouter>
        <section className="BG">
          <div className="container">
              <Route exact path="/" render={() => {
                return (<Main results={this.state.results} searchJobs={this.searchJobs} getJobDesc={this.getJobDesc} getCity={this.getCity} />)
              }} />
              <Route path="/jobs/:job" render={() => {
                return (<SingleJob results={this.state.results} />)
              }} />
          </div>
        </section>
      </BrowserRouter>
    )
  }
}

export default App;


