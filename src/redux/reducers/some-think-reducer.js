const IS_LOAD_TRUE = 'IS_LOAD_TRUE';
const IS_LOAD_FALSE = 'IS_LOAD_FALSE'

const initState = {
	isLoading: true
};


const someThinkReducer = (state = initState, action) => {
	switch (action.type) {
		case IS_LOAD_TRUE: {
			return {
				...state,
				isLoading: true,
			}
		}
		case IS_LOAD_FALSE: {
			return {
				...state,
				isLoading: false,
			}
		}
		default: {
			return state;
		}
	}
}

export const isLoadingTrueAC = () => ({ type: IS_LOAD_TRUE });
export const isLoadingFalseAC = () => ({ type: IS_LOAD_FALSE });

export default someThinkReducer;