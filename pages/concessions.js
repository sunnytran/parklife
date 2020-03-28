
import Layout from '../components/Layout';

const Concessions = (props) => (
	<Layout currentPage={props.currentPage}>
		<div>
			<h1>Concessions</h1>
		</div>
	</Layout>
);

Concessions.getInitialProps = async function() {
	return {
		currentPage: "concessions"
	};
}

export default Concessions;

