import {
	formatIncompletePhoneNumber,
	CountryCode,
	CountryCallingCode,
} from 'libphonenumber-js/min';
import { ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';

interface InputProps {
	name: string;
	countryPhoneCode?: CountryCallingCode;
	countryCode: string;
}

export function Input({ name, countryPhoneCode, countryCode }: InputProps) {
	const [inputValue, setInputValue] = useState(`+${countryPhoneCode}`);

	useEffect(() => {
		if (countryPhoneCode) {
			setInputValue(`+${countryPhoneCode}`);
		}
	}, [countryCode, countryPhoneCode]);

	function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
		const newValue = formatIncompletePhoneNumber(
			event.target.value,
			countryCode as CountryCode
		);

		if (countryPhoneCode && newValue.startsWith(`+${countryPhoneCode}`)) {
			setInputValue(newValue);
		}
	}
	return (
		<InputField aria-label='phone number' type={'tel'} name={name} value={inputValue} onChange={handleOnChange} />
	);
}

const InputField = styled.input`
	flex: 1;
	background-color: #f5f5f5;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
	border: initial;
	border-left: 0.5px solid #dbd9d9;
	padding: 8px;

	&:focus-visible,
	:focus {
		outline-color: #28abbd;
		outline-style: solid;
		outline-width: 2px;
		z-index: 2;
	}
`;
