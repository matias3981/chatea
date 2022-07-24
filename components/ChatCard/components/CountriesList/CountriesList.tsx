import { ListboxOption } from '@reach/listbox';
import Image from 'next/image';
import styled from 'styled-components';
import checkIcon from '../../../../public/images/check.png';
import { Country } from '../../../../interfaces';

interface CountriesListProps {
	countries: Country[];
	selectedCountry: string | null;
}

export function CountriesList({
	countries,
	selectedCountry,
}: CountriesListProps) {
	return (
		<>
			{countries.map((country) => (
				<ListboxOptionWrapper
					key={country.country_code}
					value={country.country_code}
				>
					<div>
						<span
							className={`fp fp-rounded ${country.country_code.toLowerCase()}`}
						></span>
					</div>
					<p>{`${country.locale_name} (+${country.phone_code})`}</p>
					{selectedCountry && selectedCountry === country.country_code && (
						<CheckWrapper>
							<Image
								style={{ verticalAlign: 'middle' }}
								alt=''
								width={24}
								height={24}
								src={checkIcon}
							/>
						</CheckWrapper>
					)}
				</ListboxOptionWrapper>
			))}
		</>
	);
}

const ListboxOptionWrapper = styled(ListboxOption)`
	padding: initial;
	display: flex;
	padding: 8px 16px;
	border-bottom: 1px solid #f5f5f5;
	gap: 8px;

	& [data-current-selected] {
		font-weight: 800;
	}
`;

const CheckWrapper = styled.div`
	margin-left: auto;
	display: flex;
	align-items: center;
	width: 24px;
`;
