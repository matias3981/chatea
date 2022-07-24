import styled from 'styled-components';
import { QUERIES } from '../../constants/breakpoints';
import { Country } from '../../interfaces';
import logo from '../../public/images/whatsapp-logo.webp';
import Image from 'next/image';
import { WhatsappNumberForm } from './components/WhatsappNumberForm';

interface ChatCardProps {
	countries: Country[];
}

export function ChatCard({ countries }: ChatCardProps) {
	return (
		<Wrapper>
			<ImageWrapper>
				<Image layout='responsive' src={logo} alt='' />
			</ImageWrapper>
			<Title>Chateá sin agregar</Title>
			<Subtitle>
				Iniciá conversaciones en whatsapp sin tener que agregar el contacto.
			</Subtitle>
			<WhatsappNumberForm countries={countries} />
		</Wrapper>
	);
}

const Wrapper = styled.article`
	background-color: white;
	padding: 40px 16px;
	border-radius: 24px;
	position: relative;

	@media ${QUERIES.tabletAndUp} {
		max-width: 678px;
		margin: auto;
		padding: 32px;
		width: 100%;
		margin: auto;
	}
`;

const ImageWrapper = styled.div`
	width: 97px;
	position: absolute;
	top: -76px;
	left: calc(50% - 97.37px / 2 + 0.18px);

	@media ${QUERIES.tabletAndUp} {
		width: 120px;
		top: -148px;
		left: calc(50% - 120px / 2);
	}
`;

const Title = styled.h1`
	font-weight: 700;
	font-size: calc((28 / 16) * 1rem);
	line-height: 1.125;
	margin-bottom: 8px;

	@media ${QUERIES.tabletAndUp} {
		font-size: calc((48 / 16) * 1rem);
		line-height: 1.5;
	}
`;

const Subtitle = styled.p`
	font-size: calc((14 / 16) * 1rem);
	margin-bottom: 32px;

	@media ${QUERIES.tabletAndUp} {
		font-size: calc((24 / 16) * 1rem);
		line-height: 1;
		margin-bottom: 48px;
	}
`;
