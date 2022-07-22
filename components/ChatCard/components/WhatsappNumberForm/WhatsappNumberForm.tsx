import { CountryCode, parsePhoneNumber } from 'libphonenumber-js/min';
import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../../../constants/breakpoints';
import { WHATSAPPURL } from '../../../../constants/whatsappUrl';
import { Country } from '../../../../interfaces';
import { ChatButton } from '../ChatButton';
import { FlagSelector } from '../FlagSelector';

interface ChatCardProps {
	countries: Country[];
}

interface FormElements extends HTMLFormControlsCollection {
	phoneNumber: HTMLInputElement;
}

interface IWhatsappNumberForm extends HTMLFormElement {
	readonly elements: FormElements;
}

export function WhatsappNumberForm({ countries }: ChatCardProps) {
	// TODO: Over here we should set a defaultCountry wich will be available from the IP of the client
	const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

	function handleOnChange(countryCode: string) {
		const country = countries.find((c) => c.country_code === countryCode);
		if (country) {
			setSelectedCountry(country);
		}
	}

	function handleOnSubmit(event: FormEvent<IWhatsappNumberForm>) {
		event.preventDefault();
		const number = event.currentTarget.elements.phoneNumber?.value;
		const phoneNumber = parsePhoneNumber(
			number,
			selectedCountry.country_code as CountryCode
		).number.replace('+', '');
		if (phoneNumber) {
			location.assign(WHATSAPPURL.concat(phoneNumber));
		}
	}

	return (
		<FlagSelectorWrapper onSubmit={handleOnSubmit}>
			<FlagSelector
				countries={countries}
				selectedCountry={selectedCountry}
				onChange={handleOnChange}
			/>
			<ChatButton />
		</FlagSelectorWrapper>
	);
}

const FlagSelectorWrapper = styled.form`
	display: block;
	position: relative;

	@media ${QUERIES.tabletAndUp} {
		display: flex;
		gap: 20px;
	}
`;
