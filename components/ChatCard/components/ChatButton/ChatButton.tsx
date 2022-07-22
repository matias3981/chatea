import styled from 'styled-components';
import { QUERIES } from '../../../../constants/breakpoints';


export function ChatButton() {

	return <Button>Chatear</Button>;
}

const Button = styled.button`
	position: fixed;
	left: 16px;
	right: 16px;
	bottom: 32px;
	background: linear-gradient(93.38deg, #37b199 0%, #12a3e1 100%);
	border: initial;
	border-radius: 8px;
	color: #000000;
	padding: 14px 32px;
	font-size: 16px;
	font-weight: 700;
	line-height: 1;
	cursor: pointer;

	&:hover {
		background: linear-gradient(
			93.38deg,
			hsla(168, 53%, 30%, 1) 0%,
			hsla(198, 85%, 30%, 1) 100%
		);
	}

	@media ${QUERIES.tabletAndUp} {
		position: initial;
		max-width: 181px;
		width: 100%;
	}
`;
