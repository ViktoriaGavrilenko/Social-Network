import React from 'react';
import {
	follow, getUsers, setCurrentPage, toggleFollowingProgress,
	unfollow
} from "../../redux/users-reducer";
import connect from "react-redux/es/connect/connect";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {

		this.props.getUsers(pageNumber, this.props.pageSize);

	}

	render() {

		return <>
		{this.props.isFetching ? <Preloader />: null}
		<Users totalUsersCount={this.props.totalUsersCount}
		       pageSize={this.props.pageSize}
		       currentPage={this.props.currentPage}
		       onPageChanged={this.onPageChanged}
		       users={this.props.users}
		       follow={this.props.follow}
		       unfollow={this.props.unfollow}
		       followingInProgress={this.props.followingInProgress}
		/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
   users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

/*let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(follow(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollow(userId));
		},
		setUsers: (users) => {
			dispatch(setUsers(users));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPage(pageNumber));
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setUsersTotalCount(totalCount));
		},
		toggleIsFetchig: (isFetchig) => {
			dispatch(toggleIsFetchig(isFetchig));
		}
	}
}*/

export default connect(mapStateToProps,
	{ follow, unfollow,
		setCurrentPage,
		toggleFollowingProgress, getUsers })(UsersContainer);