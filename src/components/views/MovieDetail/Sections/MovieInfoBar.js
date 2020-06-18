import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../../../helpers';

import { StyledMovieInfoBar } from '../../../styles/StyledMovieInfoBar';

const MovieInfoBar = ({ movie }) => (
	<StyledMovieInfoBar>
		<div className="movieinfobar-content">
			<div className="movieinfobar-content-col">
				<FontAwesome className="fa-time" name="clock-o" size="2x" />
				<span className="movieinfobar-info">Run time: {calcTime(movie.runtime)}</span>
			</div>

			<div className="movieinfobar-content-col">
				<FontAwesome className="fa-budget" name="money" size="2x" />
				<span className="movieinfobar-info">Budget: {convertMoney(movie.budget)}</span>
			</div>

			<div className="movieinfobar-content-col">
				<FontAwesome className="fa-revenue" name="ticket" size="2x" />
				<span className="movieinfobar-info">Revenue: {convertMoney(movie.revenue)}</span>
			</div>
		</div>
	</StyledMovieInfoBar>
);

export default MovieInfoBar;
