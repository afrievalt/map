import reducer, { fetchStudentFailure, initialState } from './student.duck';

describe('student reducer', () => {
	it('fetchStudentFailure action - updates state', () => {
		// arrange
		const { type } = fetchStudentFailure  
		const action = {
			type,
			payload: "test error"
		}
		const state = {...initialState, loading: true};

		// act
		const result = reducer(state, action);

		// assert
		expect(result).toEqual({
			foundStudent: null,
			loading: false,
			error: 'test error',
			selected: null
		});
	});
});
