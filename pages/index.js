
import Layout from '../components/Layout';

const Index = (props) => (
	<Layout currentPage={props.currentPage}>
		<div>
			<h1>Home</h1>
		</div>
	</Layout>
);

Index.getInitialProps = async function() {
	return {
		currentPage: "home"
	};
}

export default Index;

