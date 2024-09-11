import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobId: '',
    companyName: '',
    jobTitle: '',
    jobRole: '',
    jobLocation: [],
    package: null,
    skills: [],
    genderPreference: [],
    qualification: '',
    streams: '',
    passingYear: [],
    blockingAllowed: '',
    sslcPercentage: null,
    pucPercentage: null,
    graduatePercentage: null,
    gapInEducation: '',
    noOfPosition: null,
    interviewRounds: [],
};

const driveSlice = createSlice({
    name: 'drive',
    initialState,
    reducers: {
        setField(state, action) {
            const { field, value } = action.payload;
            state[field] = value;
        },
        addInterviewRound(state) {
            state.interviewRounds.push({
                roundName: '',
                roundStartDate: null,
                roundEndDate: null,
                status: 'yetToStart',
            });
        },
    },
});

export const { setField, addInterviewRound } = driveSlice.actions;

export default driveSlice.reducer;
