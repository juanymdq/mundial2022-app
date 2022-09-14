import { GET_DATA_TEAMS } from "../types"

export const initialState = {
    teams: [],
    isSuccess: false,
    isError: false
}

export default function TeamsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_TEAMS: {
            return {
                ...state,
                teams: action.payload,
                isSuccess: true,
                isError: false
            }
        }
        default:    
            return state
    }
}