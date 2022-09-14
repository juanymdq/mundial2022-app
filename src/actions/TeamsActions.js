import SQLite from 'react-native-sqlite-storage'
import { GET_DATA_TEAMS } from '../types'

const db = SQLite.openDatabase(
{
    name: 'MainDB',
    location: 'default',
},
() => {},
error => {console.log(error)}
)

export const createTable = () => {
    try{    
        db.transaction((tx) => {
            tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            +"Teams "
            +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Pais TEXT, Bandera TEXT);"
            )
        })        
    }catch(err){
        console.log(err)
    }
}

export const setDataTeams = async (pais, bandera) => {
    try {
      await db.transaction(async (tx) => {
        //TODO - 1ra OPCION
        // await tx.executeSql(
        //   "INSERT INTO Users (Name,Age) VALUES('"+name+"',"+age+")"
        // )
        //TODO - 2ra OPCION
        await tx.executeSql(
          "INSERT INTO Teams (Pais,Bandera) VALUES(?,?)",
          [pais, bandera]
        )        
      })
    }catch(err) {
      console.log(err)
    }
}

export const getDataTeams = async () => (dispatch) => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT Pais, Bandera FROM Teams",
          [],
          (tx, results) => {
            var len = results.rows.length
            if(len > 0) {
            //   var Pais = results.rows.item(0).Pais;
            //   var Bandera = results.rows.item(0).Bandera;
              dispatch({ type: GET_DATA_TEAMS, payload: results.rows.item(0)})
            }
          }
        )
      })
    }catch(err) {
      console.log(err)
    }
}
