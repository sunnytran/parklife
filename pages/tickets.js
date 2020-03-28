
import Layout from '../components/Layout';

const Tickets = (props) => (
	<Layout currentPage={props.currentPage}>
		<div>
			<h1>Tickets</h1>
		</div>
	</Layout>
);

Tickets.getInitialProps = async function() {
	return {
		currentPage: "tickets"
	};
}

export default Tickets;

