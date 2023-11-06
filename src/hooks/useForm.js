/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export const useForm = (initialForm = {}, initialFormValidations = {}) => {
	const [formState, setFormState] = useState(initialForm);
	const [formValidation, setFormValidation] = useState(initialFormValidations);
	const [isFormValid, setIsFormValid] = useState(false);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		for (const validation of Object.values(formValidation)) {
			if (validation !== null) {
				setIsFormValid(false);
				return;
			}
			setIsFormValid(true);
		}
	}, [formValidation]);

	const onResetForm = () => {
		setFormState(initialForm);
	};

	const createValidators = () => {
		const formCheckedValues = {};

		for (const formField of Object.keys(initialFormValidations)) {
			const [fn, errorMessage] = initialFormValidations[formField];
			formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
		}
		setFormValidation(formCheckedValues);
	};

	useEffect(() => {
		createValidators();
	}, [createValidators, formState]);

	return {
		...formState,
		...formValidation,
		formState,
		onInputChange,
		onResetForm,
		isFormValid,
	};
};
