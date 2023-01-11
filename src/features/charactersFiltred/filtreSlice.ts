import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    data: []
}

export const filtreSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        staff: (state, action: PayloadAction<any>) => {
            const staffFilter = action.payload.filter((ch:any) => ch.hogwartsStaff === true )
            state.data = staffFilter
        },
        student: (state, action: PayloadAction<any>) => {
            const studentFiltre = action.payload.filter((ch:any) => ch.hogwartsStaff === false )
            state.data = studentFiltre
        }
    },
})

export const { staff, student } = filtreSlice.actions

export default filtreSlice.reducer