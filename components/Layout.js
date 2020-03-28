
import Head from 'next/head';
import Nav from './Nav';

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<head>
					<title>Parklife</title>
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.1/css/bulma.min.css" />
				</head>

				<section class="section is-small">
					<div class="container">
						<div class="columns">
							<div class="column is-2">
								<Nav currentPage={this.props.currentPage}/>
							</div>

							<div class="column">
								{this.props.children}
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Layout;

