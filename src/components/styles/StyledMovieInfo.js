import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../Config';

export const StyledMovieInfo = styled.div`
	background: ${props => (props.backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')` : '#000')};
	background-size: 100%, cover;
	background-position: center, center !important;
	width: 100%;
	box-sizing: border-box;
	animation: animateMovieinfo 1s;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 85px 20px;
	background-repeat: no-repeat;

	@media screen and (max-width: 768px) {
		background-size: cover !important;
	}

	@media screen and (max-width: 1024px) {
		padding: 63px 20px; !important;
	}

	.movieinfo-content {
		max-width: 1280px;
		min-height: 450px;
		margin: 0 auto;
		background: rgb(0, 0, 0, 0.7);
		border-radius: 20px;
		position: relative;
	}

	.movieinfo-thumb {
		width: 300px;
		float: left;

		@media screen and (max-width: 768px) {
			width: 100% !important;
		}
	}

	.movieinfo-text {
		font-family: Arial, Helvetica, sans-serif;
		padding: 40px;
		color: #fff !important;
		overflow: hidden;

		h1 {
			font-family: 'Abel', sans-serif;
			font-size: 48px;
			margin: 0;
			color: #fff !important;

			@media screen and (max-width: 1000px) {
				font-size: 32px !important;
			}
		}

		h3 {
			font-size: 16px;
			line-height: 0;
			margin-top: 30px;
			margin-bottom: 15px;
			color: #fff !important;
			font-weight: bold;
		}

		p {
			font-family: 'Abel', sans-serif;
			font-size: 18px;
			line-height: 26px;
		}
	}

	.rating-director {
		display: flex;
		justify-content: flex-start;
	}

	.score {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 35px;
		background: #fff;
		color: #000;
		font-weight: 800;
		border-radius: 25px;
		margin: 0px 0 0 0;
	}

	.director {
		margin: 0 0 0 40px;

		p {
			margin: 0;
		}
	}

	@media screen and (max-width: 768px) {
		min-height: 600px;
		height: auto;
	}

	@keyframes animateMovieinfo {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
