const getCurrentInM = 'GET_CURRENT_UIMG'

let initState = {
	currentImg: {
		id: "kifaUS-iNEU",
		liked_by_user: false,
		user: {
			name: null,
			twitter_username: null,
		},
		urls: {
			raw: null,
			full: null
		}
	}
}

const imageReducer = (state = initState, action) => {
	switch (action.type) {
		case getCurrentInM: {
			return {
				...state,
				currentImg: action.payload
			}
		}
		default: {
			return state
		}
	}
}


export const getCurrentImgAC = (img) => ({ type: getCurrentInM, payload: img });

export default imageReducer;