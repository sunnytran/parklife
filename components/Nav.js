
import Head from 'next/head';
import Link from 'next/link';

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div>
					<head>
						<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />
					</head>

					<aside class="menu">
						<ul class="menu-list">
							<li>
								<h1 class="title is-3 is-spaced animated infinite jello">Parklife</h1>
							</li>
							<li>
								<ul>
									<li>
										<Link href="/">
											<a class={this.props.currentPage == "home" ? "is-active" : undefined}>Home</a>
										</Link>
									</li>
									<li>
										<Link href="/rides">
											<a class={this.props.currentPage == "rides" ? "is-active" : undefined}>Rides</a>
										</Link>
									</li>
									<li>
										<Link href="/concessions">
											<a class={this.props.currentPage == "concessions" ? "is-active" : undefined}>Concessions</a>
										</Link>
									</li>
									<li>
										<Link href="/tickets">
											<a class={this.props.currentPage == "tickets" ? "is-active" : undefined}>Tickets</a>
										</Link>
									</li>
									<li>
										<Link href="/maintenance">
											<a class={this.props.currentPage == "maintenance" ? "is-active" : undefined}>Maintenance</a>
										</Link>
									</li>
									<li>
										<Link href="/reports">
											<a class={this.props.currentPage == "reports" ? "is-active" : undefined}>Reports</a>
										</Link>
									</li>
									<li>
										<Link href="/staff">
											<a class={this.props.currentPage == "staff" ? "is-active" : undefined}>Staff</a>
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</aside>
			</div>
		);
	}
}

export default Nav;

