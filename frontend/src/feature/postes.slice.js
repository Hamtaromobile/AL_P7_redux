import { createSlice } from "@reduxjs/toolkit";

export const postesSlice = createSlice({
	name: "postes",
	initialState: {
		postes: null,
	},
	reducers: {
		setPostesData: (state, { payload }) => {
			state.postes = payload;
		},
		addPoste: (state, { payload }) => {
			state.postes.push(payload);
		},
		editPoste: (state, { payload }) => {
			state.postes = state.postes.map((pic) => {
				if (pic.id === payload[1]) {
					return {
						...pic,
						artist: payload[0],
					};
				} else {
					return pic;
				}
			});
		},
		deletePoste: (state, { payload }) => {
			state.postes = state.postes.filter((pic) => pic.id !== payload);
		},
	},
});

export const { setPostesData, addPoste, editPoste, deletePoste } =
	postesSlice.actions;
export default postesSlice.reducer;
