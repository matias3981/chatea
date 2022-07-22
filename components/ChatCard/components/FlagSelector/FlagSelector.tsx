import {
	ListboxButton,
	ListboxInput,
	ListboxList,
	ListboxPopover,
} from '@reach/listbox';
import styled from 'styled-components';
import '@reach/listbox/styles.css';
import arrowDown from '../../../../public/images/down-arrow.svg';
import Image from 'next/image';
import 'flagpack/dist/flagpack.css';
import { Input } from '../Input';
import { CountriesList } from '../CountriesList';
import { Country } from '../../../../interfaces';
import { QUERIES } from '../../../../constants/breakpoints';

interface FlagSelectorProps {
	countries: Country[];
	selectedCountry: Country;
	onChange: (countryCode: string) => void;
}

export function FlagSelector({
	countries,
	selectedCountry,
	onChange,
}: FlagSelectorProps) {
	function handleOnChange(countryCode: string) {
		if (onChange) {
			onChange(countryCode);
		}
	}

	return (
		<Wrapper
			defaultValue={selectedCountry.country_code.toLowerCase()}
			onChange={(value) => handleOnChange(value)}
		>
			{({ value }) => (
				<>
					<Button
						arrow={<Image src={arrowDown} alt='' width={16} height={16} />}
					>
						<span className={`fp fp-rounded ${value?.toLowerCase()}`}></span>
					</Button>
					<Input
						name='phoneNumber'
						countryPhoneCode={selectedCountry.phone_code}
						countryCode={selectedCountry.country_code}
					/>
					<ListboxPopoverWrapper portal={false} style={{ width: 'initial' }}>
						<ListboxListWrapper>
							<CountriesList countries={countries} selectedCountry={value} />
						</ListboxListWrapper>
					</ListboxPopoverWrapper>
				</>
			)}
		</Wrapper>
	);
}

const Wrapper = styled(ListboxInput)`
	display: flex;
	position: relative;
	border-radius: 8px;

	@media ${QUERIES.tabletAndUp} {
		flex: 1;
	}
`;

const Button = styled(ListboxButton)`
	display: flex;
	align-items: center;
	background-color: #f5f5f5;
	border: initial;
	border: 0;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	height: 44px;
	padding: 0px 18px 0px 16px;
	z-index: 1;

	&:focus-visible,
	:focus {
		outline-color: #28abbd;
		outline-style: solid;
		outline-width: 2px;
		z-index: 2;

		@supports (-webkit-appearance: -apple-pay-button) {
			outline-offset: -2px;
		}
	}

	&[aria-expanded='true'] {
		outline-color: #28abbd;
		outline-style: solid;
		outline-width: 2px;
		z-index: 2;

		@supports (-webkit-appearance: -apple-pay-button) {
			outline-offset: -2px;
		}
	}

	& [data-reach-listbox-arrow] {
		display: flex;
		align-items: center;
	}
`;

const ListboxPopoverWrapper = styled(ListboxPopover)`
	position: absolute;
	right: 0;
	left: 0;
	top: 100%;
	border: unset;
	border-radius: 8px;
	padding-bottom: 16px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
	margin-top: 8px;
	max-height: 200px;
	overflow: auto;

	&:focus-within {
		outline: initial;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
	}
`;

const ListboxListWrapper = styled(ListboxList)`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
