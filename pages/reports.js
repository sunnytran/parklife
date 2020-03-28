
import Layout from '../components/Layout';

const Reports = (props) => (
	<Layout currentPage={props.currentPage}>
		<div>
			<h1>Reports</h1>
		</div>
	</Layout>
);

Reports.getInitialProps = async function() {
	return {
		currentPage: "reports"
	};
}

export default Reports;

