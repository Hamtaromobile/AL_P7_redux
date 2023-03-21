import { configureStore } from "@reduxjs/toolkit";
import postesReducer from "../feature/postes.slice";

export default configureStore({
	reducer: {
		postes: postesReducer,
	},
});
