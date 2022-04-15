const SET_IMAGES_FAVORITES = 'GET_IMAGES_FAVORITES'

let iniState = {
	images: [{
		alt_description: null,
		blur_hash: null,
		categories: [],
		color: null,
		created_at: null,
		current_user_collections: [],
		description: null,
		height: null,
		id: null,
		liked_by_user: false,
		likes: null,
		links: { self: null, html: null, download: null },
		promoted_at: null,
		sponsorship: { impression_urls: Array(1), tagline: null, tagline_url: null, sponsor: {} },
		topic_submissions: {},
		updated_at: null,
		urls: { raw: 'https://n1s1.starhit.ru/88/e1/69/88e169bf202b3e6bc7f9dd411b70f7c4/368x460_0_cee6389f5412c30ed5384e92235a9f6e@1080x1350_0xac120003_19503755701636307290.jpg', full: null },
		user: { id: null, updated_at: null, username: null, name: null, first_name: null },
		width: null,
	},],
	teargetImage: 0,
}

const favoritesReducer = (state = iniState, action) => {
	switch (action.type) {
		case SET_IMAGES_FAVORITES: {
			return {
				...state,
				images: action.payload
			}
		}
		default: {
			return state
		}
	}
}

export const setImagesFavoritesAC = (images) => ({ type: SET_IMAGES_FAVORITES, payload: images });


export default favoritesReducer;