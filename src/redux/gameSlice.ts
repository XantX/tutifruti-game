import { createSlice } from "@reduxjs/toolkit"

const initialState= {
  players: [],
  roundTime: 0,
  roundQuantity: 0,
  score: [],
  winner: -1
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state, action) => {
      const { players, roundTime, roundQuantity } = action.payload
      state.players = players
      state.roundTime = roundTime
      state.roundQuantity = roundQuantity
    }
  }
})

export const { startGame }  = gameSlice.actions
export default gameSlice.reducer
