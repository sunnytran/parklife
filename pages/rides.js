
import Layout from '../components/Layout';

const Rides = (props) => (
	<Layout currentPage={props.currentPage}>
		<div>
			<h1>Rides</h1>
		</div>
	</Layout>
);

Rides.getInitialProps = async function() {
	return {
		currentPage: "rides"
	};
}

export default Rides;

