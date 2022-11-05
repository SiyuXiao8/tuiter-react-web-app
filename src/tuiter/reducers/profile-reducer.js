import {createSlice} from "@reduxjs/toolkit";
import profileArray from '../data/profile.json';

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileArray,
    reducers: {
        updateFirstName(state, action) {
            state.firstName = action.payload;
        },
        updateLastName(state, action) {
            state.lastName = action.payload;
        },
        updateBio(state, action) {
            state.bio = action.payload;
        },
        updateLocation(state, action) {
            state.location = action.payload;
        },
        updateWebsite(state, action) {
            state.website = action.payload;
        },
        updateBirth(state, action) {
            state.dateOfBirth = action.payload;
        }
    }
});

export const {  updateFirstName, updateLastName,
                updateBio, updateLocation,
                updateWebsite, updateBirth} = profileSlice.actions;
export default profileSlice.reducer;