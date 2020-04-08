
import Layout from '../components/Layout';
import Popup from '../components/Popup';

class Staff extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			staff: [],
			showPop: false
		}
		
		this.inputFirst	= React.createRef();
		this.inputLast	= React.createRef();

		this.addMember = this.addMember.bind(this);
		this.togglePop = this.togglePop.bind(this);
	}

	componentDidMount(){
		//fetch("http://localhost:3000/api/staff")
		fetch("https://www.tpmanagement.app/api/staff")
		.then(res => res.json())
		.then (
			(result)=> {
				this.setState({
					staff: result
				});
				console.log(result);
			}
		)
	}

	togglePop() {
		this.setState((prev, props) => {
			const newPop = !prev.showPop;

			return { showPop: newPop };
		});
	}

	addMember() {
		//var data = {
			//"shop_name": this.inputShopName.current.value,
			//"location": this.inputShopLocation.current.value,
			//"creation_date": moment().format(),
			//"shop_type": this.inputShopType.current.value,
		//};

		//console.log(data);

		//let headers = new Headers();
		//headers.append('Content-Type', 'application/json');
		//headers.append('Accept', 'application/json');
		//headers.append('Origin', 'https://www.tpmanagement.app');
		
		//fetch("https://www.tpmanagement.app/api/shops", {
			//body: JSON.stringify(data),
			//headers: headers,
			//method: 'POST',
			//mode: 'cors'
		//})
			//.then(res => console.log(res))
			//.catch(error => console.log(error));
	
		//this.setState({
			//stores: [ ...this.state.stores, data]
		//});
		//this.togglePop();
	}

	render() {
		const staff = this.state.staff;

		return (
			<Layout>
				<div>
					<button onClick={this.togglePop} class="button is-link is-outlined">
						<span class="icon">
							<i class="fa fa-plus"></i>
						</span>
						<span>Add a staff member</span>
					</button>

					<Popup closePopup={this.togglePop} showPop={this.state.showPop} title="Add a staff member" btnFunc={this.addMember} submitText="Add staff member">
						<div class="field">
							<label class="label">First name</label>
							<div class="control">
								<input ref={this.inputFirst} class="input" type="text" placeholder="First name" />
							</div>
						</div>
						<div class="field">
							<label class="label">Last name</label>
							<div class="control">
								<input ref={this.inputLast} class="input" type="text" placeholder="Last name" />
							</div>
						</div>
					</Popup>

						<table class="table">
							<thead>
								<th>First name</th>
								<th>Last name</th>
								<th>Delete</th>
							</thead>

							<tbody>
								{
									staff.map(i => {
										return (
											<tr>
												<td>{i.first_name}</td>
												<td>{i.last_name}</td>
												<td>
													<button class="button is-small">
														<span class="icon">
															<i class="fa fa-times"></i>
														</span>
													</button>
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

export default Staff;
