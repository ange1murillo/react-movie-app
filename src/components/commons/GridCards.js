import React from 'react';
// import { Card, Avatar, Col, Typography, Row } from 'antd';
import { Col } from 'react-bootstrap';
import NoImage from '../images/no_image.jpg';
import '../App.scss';
import { IMAGE_BASE_URL } from '../Config';

function GridCards(props) {
	let { actor, key, image, movieId, movieName, characterName, actorName, postInfo } = props;
	const POSTER_SIZE = 'w500';

	if (actor) {
		return (
			<Col key={key} xs={6} sm={4} md={3} lg={3}>
				<div
					style={{
						position: 'relative',
						marginBottom: '20px',
						padding: '5px',
						background: '#1c1c1c',
						borderRadius: '20px',
						textAlign: 'center',
					}}
				>
					<img
						style={{ width: '100%', height: '260px', borderRadius: '15px', objectFit: 'cover' }}
						alt={characterName}
						src={image ? `${IMAGE_BASE_URL}${POSTER_SIZE}${image}` : NoImage}
					/>
					<div style={{ margin: '5px 0 5px 0' }}>
						<span style={{ color: 'white', display: 'block' }}>{actorName}</span>
						<span style={{ color: 'white', display: 'block', fontSize: '15px' }}>{characterName}</span>
					</div>
				</div>
			</Col>
		);
	} else if (postInfo) {
		return (
			<div key={key}>
				<div style={{ position: 'relative' }}>
					<img
						className="postInfo-img"
						style={{ width: '100%', borderRadius: '15px' }}
						alt={movieName}
						src={image}
					/>
				</div>
			</div>
		);
	} else {
		return (
			<Col key={key} xs={6} sm={4} md={3} lg={3}>
				<div style={{ position: 'relative', paddingBottom: '20px' }}>
					<a href={`/${movieId}`}>
						<img className="landing-grid-image" alt={movieName} src={image} />
					</a>
				</div>
			</Col>
		);
	}
}

export default GridCards;
