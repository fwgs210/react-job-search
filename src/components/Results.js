import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Results extends Component {

	render() {
		if (typeof this.props.results == 'string') {
			return (
				<div>{this.props.results}</div>
			)
		} else if (this.props.results) {
			return (
				<div>
					{this.props.results.map((each, key) => {
	                          return (
	                            <Link to={`/jobs/${each.id}`} id={each.id} key={key} className="job-list">
	                            	<h4>{each.title}</h4>
	                            	<p>{each.company} - {each.location}</p>
	                            </Link>
	                          )
	                        })
	                }
				</div>
			)
		} else {
			return (
				// nothing
				<div></div>
			)
		}
	}
}

export default Results;