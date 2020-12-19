// validateFields replaces the need to write Imperative: if (isTinInvalid(tin))
// {   result.tin = "Invalid"; } if (!providerType) { 		result.providerType =
// "Required"; } if (providerType.length > 1) { 		result.providerType = "Too
// long"; }
//
// Declarative usage: validateFields(values, { 		tin: isTinInvalid,  // see
// lambda notes at bottom 		providerType: [isRequired, getMaxLen(1)]
// 		"name.firstName": isRequired  })
//
//  Notice dot notation is allowed "name.firstName" 2 levels deep ONLY  more
// than 2 levels are not allowed: "provider.name.firstName" //error  you can
// validate deep values like this: 	validateFields(values, { 		tin:
// isTinInvalid, 		providerType: isRequired 		provider:
// validateFields(values.provider, {"name.firstName": isRequired})  })
//
// Also note, if the field has multiple validation rules, you can pass them in
// an array. 		providerType: [isRequired, getMaxLen(1)] They will be evaluated
// from left to right.  The first error will be returned following rules will
// not be validated
//
// see spec file for more usage examples

export const getFuncValidateFields = validationRules => rawFieldsValues => {
		const fieldValues = rawFieldsValues == null
				? {}
				: rawFieldsValues;
		return Object
				.keys(validationRules)
				.reduce((acc, cur) => {
						// handle dot notation a.b or a in keys
						const [root,
								leaf] = cur.split('.'); // we only go 2 levels
						const key = leaf || root;
						const leafFieldValues = leaf
								? fieldValues[root] || {}
								: fieldValues;
						const value = leafFieldValues[key];

						// handle implicit multiple validation rules
						const rule = validationRules[cur]; // cur may be "a.b"
						const isFieldInvalidFunction = Array.isArray(rule)
								? validateMultiple(...rule)
								: validationRules[cur];
						const errorMessage = isFieldInvalidFunction(value, fieldValues);
						const isInvalid = !!errorMessage;
						if (isInvalid) {
								const errorNode = leaf
										? {
												[root]: {
														[leaf]: errorMessage
												}
										}
										: {
												[key]: errorMessage
										};
								return {
										...acc,
										...errorNode
								};
						}
						return acc;
				}, {} // init acc
				);
};

export const getIsTooLong = (maxLength) => (fieldValue) => {
		const remove = (fieldValue
				?.length || 0) - maxLength;
		const isTooLong = remove > 0;
		const isSingular = remove === 1;
		const addS = isSingular
				? ''
				: 's';
		return isTooLong
				? `Too long by ${remove} character${addS}`
				: '';
};

export const MAX_STATE_LENGTH = 2;
const isStateInvalid = (state = '') => state
		?.length === MAX_STATE_LENGTH
				? ''
				: 'Invalid';
export const isRequired = (fieldValue = '') => fieldValue
		?.length === 0
				? '-Required'
				: '';

export const getRegExInvalid = (regex) => (fieldValue = '') => regex.test(fieldValue)
		? ''
		: 'Invalid';
const getRegExInvalidOrEmpty = (regex) => (fieldValue = '') => {
		if (fieldValue === '') {
				return '';
		}
		return regex.test(fieldValue)
				? ''
				: 'Invalid';
};

const phoneRegEx = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
export const isPhoneInvalid = getRegExInvalidOrEmpty(phoneRegEx);

const usZipRegEx = /^\d{5}$|^\d{9}$|^\d{5}-\d{4}$/;
export const isZipInvalid = getRegExInvalid(usZipRegEx);

const numPattern = /^\d+$/;
export const isNumberInvalid = getRegExInvalid(numPattern);

export const validateMultiple = function validateMultiple() {
		const outerArguments = [...arguments];
		return (value, allValues) => outerArguments.reduce((acc, cur) => acc || cur(value, allValues), '' // init acc
		);
};

const getReduceAllFieldsEmpty = (fieldValues) => (acc, cur, i) => {
		return acc && !fieldValues[cur];
};
const VALID = "";
const INVALID = "Invalid"
const SUPPRESS = "-"
const INVALID_FOR_NOW = SUPPRESS + INVALID
// https://emailregex.com/
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const getFuncFilterOutInvalidEmail = email => emailPart => emailPattern.test(email + emailPart) 
export const isEmailInvalid = email => {
		if (!email) {
			return VALID;
		}
		if (emailPattern.test(email)) {
				return VALID;
		} else {
				const inProgress = ["@x.com", "x.com", ".com"];
				const validInProgress = inProgress.filter(getFuncFilterOutInvalidEmail(email))
				const canBecomeValid = validInProgress.length
				return canBecomeValid ? INVALID_FOR_NOW : INVALID
		}
}

export const isDateInvalid = (date = '') => {
		if (date
				?.length > 10) {
				return 'Invalid';
		}
		const datePattern = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i;
		return datePattern.test(date)
				? ''
				: 'Invalid';
};

export const getIsNumberInRange = (min, max) => (fieldValue = '') => {
		const toInt = parseInt(fieldValue);
		return toInt > max
				? `Must be under ${max}`
				: toInt < min
						? `Must be at least ${min}`
						: '';
};

export const mustMatch = (fieldName, toMatch) => (fieldValue) => {
		return fieldValue !== toMatch
				? `${fieldName}s do not match`
				: '';
};
// lambda validateFields takes an object with lambda functions with the
// following definitions: 	(fieldValue, allFieldValues) => ifError ? "Error
// Message" : "" // allFieldValues is only used if your validation depends on
// other fields values: 	ex: fieldValue > allFieldsValues.departureDate