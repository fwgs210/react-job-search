import React, { Component } from 'react';
import axios from 'axios';

class SingleJob extends Component {

	componentDidMount() {
	    this.getJobDetail()
	}

	state = {
		jobInfo: null
	}

	getJobDetail = () => {
		const url = window.location.href.split('/');
		const jobId = url[url.length - 1]
		
		// get job info
		if (this.props.results) {
			const jobInfo = this.props.results.filter(e => {
				return e.id === jobId
			})
			console.log(jobInfo[0])
			this.setState({jobInfo: jobInfo[0]})
		}

	}
 
	render() {
		if (this.state.jobInfo) {
			return (
					<div className="row">
						<div className="col-xs-12">
							<div className="block">
								<h1>{this.state.jobInfo.title}</h1>
				                <p>{this.state.jobInfo.company} - {this.state.jobInfo.location}</p>
				                <aside dangerouslySetInnerHTML={{__html:this.state.jobInfo.description}}></aside>
				                <div dangerouslySetInnerHTML={{__html:this.state.jobInfo.how_to_apply}}></div>
				                <a className="apply-button" target="_blank" href={this.state.jobInfo.url}>Apply Now</a>
							</div>
						</div>
					</div>
			)
		} else {
			return (
					<div className="row">
						<div className="col-xs-12">
							<div className="block">
								<h1>404. Wrong request!</h1>
							</div>
						</div>
					</div>
			)
		}
	}
}

export default SingleJob;