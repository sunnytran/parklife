
import Link from 'next/link';

class NavLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<Link href={this.props.linkUrl}>
					<a>{this.props.linkName}</a>
				</Link>
			</div>
		);
	}
}

export default NavLink;

