import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { EmojisBackground } from '../ChatCard/components/EmojisBackground';
import GlobalStyles from '../GlobalStyles';

type LayoutProps = {
	children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Wrapper>
				{/* <EmojisBackground /> */}
				{children}
			</Wrapper>
		</ThemeProvider>
	);
}

const Wrapper = styled.main`
	height: 100%;
	padding: 16px;
`;
