import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import * as axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";
import withRouter from "react-router-dom/es/withRouter";
import { usersAPI } from "../../api/api";


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = 2;
		}
		usersAPI.getProfile(userId).then(response => {
				this.props.setUserProfile(response.data);
			});
	}
	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile}/>
			</div>
		)
	}
}

let mapStateToProps = (state) => ({
	profile : state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);