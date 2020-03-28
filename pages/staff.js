
import Layout from '../components/Layout';

const Staff = (props) => (
	<Layout currentPage={props.currentPage}>
		<div>
			<h1>Staff</h1>
		</div>
	</Layout>
);

Staff.getInitialProps = async function() {
	return {
		currentPage: "staff"
	};
}

export default Staff;

