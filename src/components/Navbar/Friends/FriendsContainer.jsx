import Friends from "./Friends";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		users: state.sidebar.friends
	}
}

let FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;