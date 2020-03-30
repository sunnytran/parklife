
import Head from 'next/head';
import Nav from './Nav';

import styled, { keyframes } from 'styled-components'

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const NavColumn = styled.div`
			width: 11%;
			margin-left: 2.5%;
		`

		return (
			<div>
				<head>
					<title>Parklife</title>
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.1/css/bulma.min.css" />
				</head>

				<section class="section is-small">
						<div class="columns">
							<NavColumn>
								<Nav />
							</NavColumn>

							<div class="column is-rest">
								<section class="section is-small">
										{this.props.children}
								</section>

							</div>
						</div>
				</section>
			</div>
		);
	}
}

export default Layout;

