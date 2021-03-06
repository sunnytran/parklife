
import Layout from '../components/Layout';
import Popup from '../components/Popup';
import RideEntry from '../components/RideEntry';
import MaintenanceButton from '../components/MaintenanceButton';
import Moment from 'moment';
import moment from 'moment';

class Rides extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			rides: [],
			issues: [],
			showRidePop: false,
		}
		
		this.inputRideName   = React.createRef();
		this.inputRideType   = React.createRef();
		this.inputLocation   = React.createRef();
		this.inputStatus	   = React.createRef();
		this.inputBuildDate  = React.createRef();
		this.inputInspection = React.createRef(); 
		this.inputInsurance = React.createRef();

		this.toggleRidePop = this.toggleRidePop.bind(this);
		this.addRide = this.addRide.bind(this);
		this.removeRide = this.removeRide.bind(this);
		this.updateRideStatus = this.updateRideStatus.bind(this);
		this.CompleteButton = this.CompleteButton.bind(this);
		this.completeRide = this.completeRide.bind(this);
	}

	componentDidMount(){
		//fetch("http://localhost:3000/api/staff")
		fetch("https://www.tpmanagement.app/api/rides")
		.then(res => res.json())
		.then (
			(result)=> {
				this.setState({
					rides: result
				});
				console.log(result);
			}
		)

		fetch("https://www.tpmanagement.app/api/maintenance")
		.then(res => res.json())
		.then (
			(result)=> {
				this.setState({
					issues: result
				});
				console.log(result);
			}
		)
	}

	toggleRidePop() {
		this.setState((prev, props) => {
			const newPop = !prev.showRidePop;

			return { showRidePop: newPop };
		});
	}

	addRide() {
		var data = {
			"ride_name": this.inputRideName.current.value,
			"ride_type": this.inputRideType.current.value,
			"creation_date": moment(this.inputBuildDate.current.value, 'M/D/YY'),
			"location": this.inputLocation.current.value,
			"ride_status": this.inputStatus.current.value,
			"last_inspection": moment(this.inputInspection.current.value, 'M/D/YY'),
			"insurance_expiration_date": moment(this.inputInsurance.current.value, 'M/D/YY')
		};

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		headers.append('Origin', 'https://www.tpmanagement.app');
		
		fetch("https://www.tpmanagement.app/api/rides", {
			body: JSON.stringify(data),
			headers: headers,
			method: 'POST',
			mode: 'cors'
		})
			.then(res => console.log(res))
			.catch(error => console.log(error));
	
		this.setState({
			rides: [ ...this.state.rides, data]
		});
		this.toggleRidePop();
	}

	removeRide(i) {
		fetch("https://www.tpmanagement.app/api/rides", {
			method: 'DELETE', 
			headers: {'Content-Type': 'application/json; charset=utf-8'}, 
      body: JSON.stringify({"name": i.ride_name})
    })
		.then((res) => { console.log(res) })
		.catch(error => console.log(error));

		var index = this.state.rides.indexOf(i);
		var tmp = [...this.state.rides];
		tmp.splice(index, 1);
		this.setState({
			rides: tmp
		})
	};

	completeRide(i) {
		var index = this.state.rides.indexOf(i);

		i.ride_status = 'running';
		i.creation_date = moment();
		i.last_inspection = moment();
		i.insurance_expiration_date = moment().add(2, 'years').calendar()

		var data = {
			"target_name": i.ride_name,
			"ride_name": i.ride_name,
			"ride_type": i.ride_type,
			"creation_date": i.creation_date,
			"location": i.location,
			"ride_status": i.ride_status,
			"last_inspection": i.last_inspection,
			"insurance_expiration_date": i.insurance_expiration_date
		};

		fetch("https://www.tpmanagement.app/api/rides", {
			method: 'PUT', 
			headers: {'Content-Type': 'application/json; charset=utf-8'}, 
      body: JSON.stringify(data)
    })
		.then((res) => { console.log(res) })
		.catch(error => console.log(error));

		var tmp = [...this.state.rides];
		tmp[index] = i;
		this.setState({
			rides: tmp
		});
	}

	CompleteButton(props) {
		if (props.ride.ride_status != "construction")
			return null;

		return (
			<button class="button is-small" onClick={() => this.completeRide(props.ride)}>
				<span class="icon">
					<i class="fa fa-check"></i>
				</span>
			</button>
		);
	}

	updateRideStatus(i, status, issue) {
		var index = this.state.rides.indexOf(i);
		
		i.ride_status = status;
		i.last_inspection = moment().format('M/D/YY')

		var tmp = [...this.state.rides];
		tmp[index] = i;


		if (status == 'maintenance') {
			this.setState({
				issues: [ ...this.state.issues, issue ]
			});
		}

		this.setState({
			state: this.state
		});
		this.setState({
			togglePop: false
		});
	}


	render() {
		const rides = this.state.rides;

		return (
			<Layout>
				<div>
					<button onClick={this.toggleRidePop} class="button is-link is-outlined">
						<span class="icon">
							<i class="fa fa-plus"></i>
						</span>
						<span>Add a ride</span>
					</button>

					<Popup closePopup={this.toggleRidePop} showPop={this.state.showRidePop} title="Add a ride" submitText="Add ride" btnFunc={this.addRide}>
						<div class="columns">
							<div class="column is-half field">
								<label class="label">Ride name</label>
								<div class="control">
									<input ref={this.inputRideName} value={this.state.inputRideName} class="input" type="text" placeholder="Ride name" />
								</div>
							</div>
							<div class="column is-half field">
								<label class="label">Type</label>
								<div class="control">
									<input ref={this.inputRideType} class="input" type="text" placeholder="Type" />
								</div>
							</div>
						</div>
						
						<div class="columns">
							<div class="column is-half field">
								<label class="label">Location</label>
								<div class="control">
									<input ref={this.inputLocation} class="input" type="text" placeholder="Location" />
								</div>
							</div>
							<div class="column is-half field">
								<label class="label">Status</label>
								<div class="control">
									<input ref={this.inputStatus} class="input" type="text" placeholder="Status" />
								</div>
							</div>
						</div>

						<div class="columns">
							<div class="column is-third field">
								<label class="label">Build date</label>
								<div class="control">
									<input ref={this.inputBuildDate} class="input" type="text" placeholder="Last inspection" />
								</div>
							</div>
							<div class="column is-third field">
								<label class="label">Last inspection</label>
								<div class="control">
									<input ref={this.inputInspection} class="input" type="text" placeholder="Last inspection" />
								</div>
							</div>
							<div class="column is-third field">
								<label class="label">Insurance expiration</label>
								<div class="control">
									<input ref={this.inputInsurance} class="input" type="text" placeholder="Insurance expiration" />
								</div>
							</div>
						</div>
						
					</Popup>

					<table class="table">
						<thead>
							<th>Ride name</th>
							<th>Type</th>
							<th>Build date</th>
							<th>Location</th>
							<th>Status</th>
							<th>Last inspection</th>
							<th>Insurance expiration</th>
							<th>Action</th>
						</thead>

						<tbody>
							{
								rides.map(i => {

									return (
										<tr class={i.ride_status == "maintenance" ? "has-text-danger" : ""}>
											<td><RideEntry issues={this.state.issues} ride={i} updateRideStatus={this.updateRideStatus.bind(this)} /></td>
											<td>{i.ride_type}</td>
											<td>{Moment(i.creation_date).format('M/D/YY')}</td>
											<td>{i.location}</td>
											<td>{i.ride_status}</td>
											<td>{Moment(i.last_inspection).format('M/D/YY')}</td>
											<td>{Moment(i.insurance_expiration_date).format('M/D/YY')}</td>
											<td>
												<div class="buttons">
													<button class="button is-small" onClick={() => this.removeRide(i)}>
														<span class="icon">
															<i class="fa fa-times"></i>
														</span>
													</button>
													<this.CompleteButton ride={i} />
													<MaintenanceButton ride={i} updateRideStatus={this.updateRideStatus.bind(this)} />
												</div>
											</td>
										</tr>
									);
								})
							}
						</tbody>
					</table>
				</div>
			</Layout>
		)
	}
};

export default Rides;

