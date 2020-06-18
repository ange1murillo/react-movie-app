import React, { useEffect, useState } from 'react';
// import { Button } from 'antd';
import { Row } from 'react-bootstrap';
// import axios from 'axios';
import { API_URL, API_KEY } from '../../Config';
import GridCard from '../../commons/GridCards';
// import MainImage from '../../views/LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import MovieInfoBar from './Sections/MovieInfoBar';
// import { set } from 'mongoose';
// import Grid from 'antd/lib/card/Grid';
// import { FaRegCaretSquareLeft } from 'react-icons/fa';

// endpointForMovieInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;

// endpointForCasts = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

function MovieDetailPage(props) {
	const movieId = props.match.params.movieId;
	const [Movie, setMovie] = useState([]);
	const [Casts, setCasts] = useState([]);
	const [LoadingForMovie, setLoadingForMovie] = useState(true);
	const [LoadingForCasts, setLoadingForCasts] = useState(true);
	// const [ActorToggle, setActorToggle] = useState(false);

	useEffect(() => {
		const endpointForMovieInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
		fetchMovieDetails(endpointForMovieInfo);
	}, []);

	// const toggleActorView = () => {
	// 	setActorToggle(!ActorToggle);
	// };

	const fetchMovieDetails = endpoint => {
		fetch(endpoint)
			.then(response => response.json())
			.then(response => {
				console.log(response);
				setMovie(response);
				setLoadingForMovie(false);

				let endpointForCasts = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
				fetch(endpointForCasts)
					.then(response => response.json())
					.then(response => {
						console.log(response);
						setCasts(response.cast);
					});
				setLoadingForCasts(false);
			});
	};
	return (
		<div>
			{/* Header */}
			{!LoadingForMovie ? <MovieInfo movie={Movie}></MovieInfo> : <div>Loading...</div>}
			<MovieInfoBar movie={Movie}></MovieInfoBar>
			{/* Body */}
			<div style={{ width: '90%', margin: '1rem auto' }}>
				{/* Movie Info */}

				<br />

				{/* Actors Grid*/}

				{/* <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
					<Button onClick={toggleActorView}>Toggle Actor View </Button>
				</div> */}

				<h2>Actors</h2>
				<hr />

				<Row>
					{!LoadingForCasts ? (
						Casts.map((cast, index) => (
							<React.Fragment key={index}>
								<GridCard
									actor
									image={cast.profile_path}
									characterName={cast.character}
									actorName={cast.name}
								></GridCard>
							</React.Fragment>
						))
					) : (
						<div>Loading...</div>
					)}
				</Row>

				<br />
			</div>
		</div>
	);
}

export default MovieDetailPage;
