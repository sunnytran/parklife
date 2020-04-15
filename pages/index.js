
import Layout from '../components/Layout';
import Popup from '../components/Popup';
import Moment from 'moment';
import moment from 'moment';

import { DateRangePicker } from 'rsuite';

import Chartkick from 'chartkick'
import { LineChart, BarChart } from 'react-chartkick'
import 'chart.js'

class Index extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			visitors: [],
			rainouts: [],
			ridesOn: [],
			rideIssue: [],
			vAvg: [],
			startDate: "2010-1-1",
			endDate: "2020-12-31",
			pickerValue: []
		}

		this.handleDatePick = this.handleDatePick.bind(this);
	}

	componentDidMount(){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		headers.append('Origin', 'https://www.tpmanagement.app');
		
		var earliest = this.state.startDate;
		var today = this.state.endDate;
		var gap = moment(today).diff(moment(earliest), 'days');
		console.log(earliest +" " + today + " |||");
		console.log(gap + "<-- this gap");

		fetch("https://www.tpmanagement.app/api/reports", {
			body: JSON.stringify({ "report" : "visitors", "days" : gap  }),
			headers: headers,
			method: 'POST',
			mode: 'cors'
		})
		.then(res => res.json())
		.then (
			(result)=> {
				this.setState({
					visitors: result[0],
					vAvg: result[1]
				});
			}
		)
		.catch(error => console.log(error));

		fetch("https://www.tpmanagement.app/api/reports", {
			body: JSON.stringify({ "report" : "rainouts_old", "start" : "2000-1-1", "end": today  }),
			headers: headers,
			method: 'POST',
			mode: 'cors'
		})
		.then(res => res.json())
		.then (
			(result)=> {
				this.setState({
					rainouts: result[0]
				});
				console.log(JSON.stringify(result) +"<--rainouts");
			}
		)
		.catch(error => console.log(error));

		fetch("https://www.tpmanagement.app/api/reports", {
			body: JSON.stringify({ "report" : "rides_on", "start" : "2000-12-31", "end": "2020-12-31"}),
			headers: headers,
			method: 'POST',
			mode: 'cors'
		})
		.then(res => res.json())
		.then (
			(result)=> {
				this.setState({
					ridesOn: result
				});
			}
		)
		.catch(error => console.log(error));

		fetch("https://www.tpmanagement.app/api/reports", {
			body: JSON.stringify({ "report" : "ride_issue", "start" : "2000-12-31", "end": "2020-12-31" }), headers: headers,
			method: 'POST',
			mode: 'cors'
		})
		.then(res => res.json())
		.then (
			(result)=> {
				this.setState({
					rideIssue: result
				});
			}
		)
		.catch(error => console.log(error));

	}

	handleDatePick(event) {
		var start = event[0];
		var stop = event[1];

		this.setState({ startDate: moment(start).format('YYYY-M-D'), endDate: moment(stop).format('YYYY-M-D') });
	}

	render() {
		var visitors = {};
		this.state.visitors.map((i) => visitors[i.date] = visitors[i.visitor_count]);

		var ridesOn = {};
		this.state.ridesOn.map((i) => ridesOn[i.ride_name] = i.ride_count);

		var rideIssue = {};
		this.state.rideIssue.map((i) => rideIssue[i.ride_name] = i.ride_issues);

		var visitorsAvg = parseInt(this.state.vAvg["average"]);
		var rainoutCount = this.state.rainouts["count"];

		Chartkick.options = {
			library: {animation: {easing: 'easeOutQuart'}}
		}

		return (
			<Layout>
				<div class="columns">
					<div class="column is-2">
						<div class="card">
							<div class="card-content">
								<p class="title">
									{visitorsAvg}
								</p>
								<p class="subtitle">
									Average visitors
								</p>
							</div>
						</div>
					</div>


					<div class="column is-2">
						<div class="card">
							<div class="card-content">
								<p class="title">
									{rainoutCount}
								</p>
								<p class="subtitle">
									Rainouts
								</p>
							</div>
						</div>
					</div>

					
					<div class="column is-3">
						<div class="card">
							<div class="card-content">
								<p class="title">
									{this.state.startDate} - {this.state.endDate}
								</p>
								<p class="subtitle">
									<DateRangePicker onOk={this.handleDatePick} />
								</p>
							</div>
						</div>
					</div>
				</div>
				
					
				<div class="columns">
					<div class="column is-third">
						<h1>Visitors</h1>
						<LineChart data={ visitors } />
					</div>
					<div class="column is-third">
						<h1>Rides</h1>
						<BarChart data={ ridesOn } />
					</div>
					<div class="column is-third">
						<h1>Issues</h1>
						<BarChart data={ rideIssue } />
					</div>
				</div>
			</Layout>
		)
	}
};

export default Index;

