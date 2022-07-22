import Image from 'next/image';
import styled from 'styled-components';
import SmilingFaceWithHeart from '../../../../public/images/smiling-face-with-heart-eyes.png';
import GrinningSquintingFace from '../../../../public/images/grinning-squinting-face.png';
import AstonishedFace from '../../../../public/images/astonished-face.png';
import SmilingFaceWithSunglasses from '../../../../public/images/smiling-face-with-sunglasses.png';
import SmirkingFace from '../../../../public/images/smirking-face.png';

import { QUERIES } from '../../../../constants/breakpoints';

export function EmojisBackground() {
	return (
		<Wrapper>
			<SmilingFaceWithHeartWrapper>
				<Image src={SmilingFaceWithHeart} alt='' />
			</SmilingFaceWithHeartWrapper>
			<GrinningSquintingFaceWrapper>
				<Image src={GrinningSquintingFace} alt='' />
			</GrinningSquintingFaceWrapper>
			<AstonishedFaceWrapper>
				<Image src={AstonishedFace} alt='' />
			</AstonishedFaceWrapper>
			<SmilingFaceWithSunglassesWrapper>
				<Image src={SmilingFaceWithSunglasses} alt='' />
			</SmilingFaceWithSunglassesWrapper>
			<SmirkingFaceWrapper>
				<Image src={SmirkingFace} alt='' />
			</SmirkingFaceWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	overflow: hidden;
	position: absolute;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	max-width: 1440px;
	width: 100%;
	height: 100%;
`;

const SmilingFaceWithHeartWrapper = styled.div`
	position: absolute;
	width: 60px;
	right: 5%;
	top: 2%;
	transform: rotate(15deg);

	@media ${QUERIES.tabletAndUp} {
		width: 90px;
		top: 5%;
		right: 0%;
	}

	@media ${QUERIES.laptopAndUp} {
		width: 145px;
		top: 10%;
		right: 7%;
	}
`;

const GrinningSquintingFaceWrapper = styled.div`
	position: absolute;
	width: 62px;
	left: 10%;
	top: 20%;
	transform: rotate(-30deg);

	@media ${QUERIES.tabletAndUp}{
		width: 110px;
		top: 20%;
		right: 7%;
	}

	@media ${QUERIES.laptopAndUp} {
		width: 140px;
		top: 42%;
		left: 18%;
	}
`;

const AstonishedFaceWrapper = styled.div`
	position: absolute;
	width: 80px;
	right: 10%;
	top: 62%;
	transform: rotate(45deg);

	@media ${QUERIES.tabletAndUp} {
		width: 90px;
		top: 70%;
		right: 15%;
	}

	@media ${QUERIES.laptopAndUp} {
		width: 120px;
		top: 72%;
		right: 10%;
	}
`;

const SmilingFaceWithSunglassesWrapper = styled.div`
	position: absolute;
	width: 62px;
	left: 5%;
	top: 82%;
	transform: rotate(-45deg);

	@media ${QUERIES.tabletAndUp} {
		width: 70px;
		top: 80%;
		left: 5%;
	}
	
	@media ${QUERIES.laptopAndUp} {
		width: 90px;
		top: 80%;
		left: 5%;
	}
`;

const SmirkingFaceWrapper = styled.div`
	display: none;

	@media ${QUERIES.laptopAndUp} {
		display: block;
		position: absolute;
		width: 120px;
		left: 5%;
		top: 0%;
		transform: rotate(-45deg);
	}
`;
