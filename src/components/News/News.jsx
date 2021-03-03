import React from 'react';
import s from './News.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";


const News = (props) => {
	return (
			<div className={s.art}>
				<div className={s.title}> News</div>
				<div className={s.wrap_news}>
					<div className={s.art_news}>Art news
						<img className={s.art_img} src='img/img_1.png' />
						<div>
							<div><textarea></textarea></div>
							<div><button>Send</button></div>
						</div>
					</div>
					<div className={s.movies}>Movies news
						<img className={s.movies_img} src='img/kino.png'/>
					</div>
					<div className={s.fitness_news}>Fitness news
						<img className={s.fitness_img} src='img/fitness.png' />
					</div>
					<div className={s.food_news}>Food
						<img className={s.food_img} src='img/food.png' />
					</div>
				</div>
			</div>

	)
}

export default News;