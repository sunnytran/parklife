
import Head from 'next/head';
import Link from 'next/link';
import NavLink from './NavLink';
import styled, { keyframes } from 'styled-components'

// stop unstyled flash
// react router for link is-active
// rollercoaster animation
// text layout for content

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const gradient = keyframes`
			from {
				-webkit-filter: hue-rotate(0deg);
			}
			to {
				-webkit-filter: hue-rotate(-360deg);
			}
		`

		const Title = styled.h1`
			color: #fff;
			background-image: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			
			animation: ${gradient} 30s ease infinite;
		`

		return (
			<div>
				<head>
						<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />
					</head>

					<aside class="menu">
						<ul class="menu-list">
							<li>
								<Title>
									<h1 class="title is-1 is-spaced animated jello">
											Parklife
									</h1>
								</Title>
							</li>
							<li>
								<ul>
									<li>
										<NavLink linkName={"Home"} linkUrl={"/"}>
										</NavLink>
									</li>
									<li>
										<NavLink linkName={"Rides"} linkUrl={"/rides"}>
										</NavLink>
									</li>
									<li>
										<NavLink linkName={"Concessions"} linkUrl={"/concessions"}>
										</NavLink>
									</li>
									<li>
										<NavLink linkName={"Tickets"} linkUrl={"/tickets"}>
										</NavLink>
									</li>
									<li>
										<NavLink linkName={"Maintenance"} linkUrl={"/maintenance"}>
										</NavLink>
									</li>
									<li>
										<NavLink linkName={"Reports"} linkUrl={"/reports"}>
										</NavLink>
									</li>
									<li>
										<NavLink linkName={"Staff"} linkUrl={"/staff"}>
										</NavLink>
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

