
import Layout from '../components/Layout';

const Rides = (props) => (
	<Layout>
		<div>
			<button class="button is-link is-outlined">
				<span class="icon">
					<i class="fa fa-plus"></i>
				</span>
				<span>Add a ride</span>
			</button>

			<table class="table">
				<thead>
					<th>Ride name</th>
					<th>Type</th>
					<th>Build date</th>
					<th>Location</th>
					<th>Last inspection</th>
					<th>Status</th>
					<th>Insurance expiration</th>
					<th>Action</th>
				</thead>
				<tbody>
					<tr>
						<th>Twister</th>
						<td>Rollercoaster</td>
						<td>1/1/2001</td>
						<td>Red zone</td>
						<td>Never</td>
						<td>Sketch condition</td>
						<td>N/A</td>
						<td>
							<p class="buttons">
								<button class="button is-warning is-small">
									<span class="icon">
										<i class="fa fa-pencil"></i>
									</span>
								</button>

								<button class="button is-danger is-small">
									<span class="icon">
										<i class="fa fa-times"></i>
									</span>
								</button>
							</p>
						</td>
					</tr>
				</tbody>
			</table>
	</div>
	</Layout>
);

export default Rides;

