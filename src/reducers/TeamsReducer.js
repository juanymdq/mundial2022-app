import { GET_DATA_CALENDAR, GET_DATA_TEAMS } from "../types"

export const initialState = {
    equipos: [],
    calendar: [],
    isSuccess: false,
    isError: false
}

export default function TeamsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_TEAMS: {
            return {
                ...state,
                equipos: action.payload,
                isSuccess: true,
                isError: false
            }
        }
        case GET_DATA_CALENDAR: {
            return {
                ...state,
                calendar: action.payload
            }
        }
        default:    
            return state
    }
}