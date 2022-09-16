//import SQLite from 'react-native-sqlite-storage'
import { GET_DATA_CALENDAR, GET_DATA_TEAMS } from '../types'
import dataTeams from '../../json/dataTeams.json'
import dataCalendar from '../../json/dataGroups.json'

export const getTeams = () => ({ type: GET_DATA_TEAMS, payload: dataTeams})

export const changePassword = (grupo)  => {
  
    const equipos = dataCalendar.filter(item => item.grupo == grupo)
    dispatch({ type: GET_DATA_CALENDAR, payload: equipos})
}

export const getCalendar = () => ({ type: GET_DATA_CALENDAR, payload: dataCalendar})
