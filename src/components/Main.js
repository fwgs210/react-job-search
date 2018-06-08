import React, { Component } from 'react';
import Loader from './Loader';
import Results from './Results';
import PropTypes from "prop-types";

class Main extends Component {

  render() {
    return (
          <article className="block">
            <div className="app-header">
              <aside className="header-content">IT job search app. Powered by Github API.</aside>
            </div>
            <div>
              <form className="search-form" onSubmit={this.props.searchJobs}>
                <input type="text" className="search-input" onChange={this.props.getJobDesc} placeholder="job title or keywords" required />
                <input type="text" className="search-input" onChange={this.props.getCity} placeholder="city or town" required />
                <input type="submit" className="search-button" value="Search"/>
              </form>
            </div>
            <Results results={this.props.results} />
          </article>
    );
  }
}

export default Main;
