import React from 'react';
// import { Descriptions, Badge } from 'antd';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../Config';

import GridCard from '../../../commons/GridCards';

// import MainImage from '../../../views/LandingPage/Sections/MainImage';

import { StyledMovieInfo } from '../../../styles/StyledMovieInfo';

const MovieInfo = ({ movie }) => (
	<StyledMovieInfo backdrop={movie.backdrop_path}>
		<div className="movieinfo-content">
			<div className="movieinfo-thumb">
				<GridCard
					image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : null}
					postInfo
					movieId={movie.id}
					movieName={movie.original_title}
				/>
			</div>
			<div className="movieinfo-text">
				<h1>{movie.title}</h1>
				<h3>PLOT</h3>
				<p>{movie.overview}</p>

				<div className="rating-director">
					<div>
						<h3>IMDB RATING</h3>
						<div className="score">{movie.vote_average}</div>
					</div>
					{/* <div className="director">
						<h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
						{movie.directors.map(element => (
							<p key={element.credit_id}>{element.name}</p>
						))}
					</div> */}
				</div>
			</div>
		</div>
	</StyledMovieInfo>
);

// function MovieInfo(props) {

//     const { movie } = props;

//     return (
//         <Descriptions title="Movie Info" bordered>
//         <Descriptions.Item label="Title">{movie.original_title}</Descriptions.Item>
//         <Descriptions.Item label="release_date">{movie.release_date}</Descriptions.Item>
//         <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item>
//         <Descriptions.Item label="runtime">{movie.runtime}</Descriptions.Item>
//         <Descriptions.Item label="vote_average" span={2}>
//         {movie.vote_average}
//         </Descriptions.Item>
//         <Descriptions.Item label="vote_count">{movie.vote_count}</Descriptions.Item>
//         <Descriptions.Item label="status">{movie.status}</Descriptions.Item>
//         <Descriptions.Item label="popularity">{movie.popularity}</Descriptions.Item>
//       </Descriptions>
//     )
// }

export default MovieInfo;
