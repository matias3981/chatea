import { getCountries, getCountryCallingCode } from 'libphonenumber-js/min';
import type { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';
import { ChatCard } from '../components/ChatCard';
import { AVAILABLE_COUNTRIES } from '../constants/availableCountries';
import { Country } from '../interfaces';

interface Props {
	countries: Country[];
}

const Home: NextPage<Props> = ({ countries }) => {
	return (
		<Wrapper>
			<ChatCard countries={countries} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: auto;
	height: 100%;
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const countries: Country[] = getCountries()
		.filter((country) => AVAILABLE_COUNTRIES.includes(country))
		.map((country) => ({
			locale_name: new Intl.DisplayNames(['es'], { type: 'region' }).of(
				country
			),
			phone_code: getCountryCallingCode(country),
			country_code: country,
		}));

	return {
		props: {
			countries,
		},
	};
};

export default Home;
