import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
	if(!props.profile) {
		return <Preloader/>
	}
	return (
		<div>
			<div className={s.wrapper}>
				<img src='https://uploads-ssl.webflow.com/5e96913c9bac7c0b5cb3391c/5f44a7398c0cdf460857e744_img-image.jpg' />
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} />
				ava + description
			</div>
		</div>
	);
}

export default ProfileInfo;