
import Link from 'next/link';

class NavLink extends React.Component {
	constructor(props) {
		super(props);

		//this.state = {
			//active: 'Home'
		//};
		//this.handleClick = this.handleClick.bind(this);
	}

	//handleClick(linkName) {
		//this.setState({ active: this.props.linkName});
	//}

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

