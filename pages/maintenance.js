
import Layout from '../components/Layout';

const Maintenance = (props) => (
	<Layout currentPage={props.currentPage}>
		<div>
			<h1>Maintenance</h1>
		</div>
	</Layout>
);

Maintenance.getInitialProps = async function() {
	return {
		currentPage: "maintenance"
	};
}

export default Maintenance;

