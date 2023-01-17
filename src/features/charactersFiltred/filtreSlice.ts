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
            const staffFilter = action.payload.data.filter((ch:any) => ch.hogwartsStaff === true )
            const houseFilter = staffFilter.filter((h: any) => h.house === action.payload.casa )
            state.data = houseFilter
        },
        student: (state, action: PayloadAction<any>) => {

            const studentFilter = action.payload.data.filter((ch:any) => ch.hogwartsStaff === false )
            const houseFilter = studentFilter.filter((h: any) => h.house === action.payload.casa )
            state.data = houseFilter
            // const studentFiltre = action.payload.filter((ch:any) => ch.hogwartsStaff === false )
            // state.data = studentFiltre
        },
        houses: (state, action: PayloadAction<any>) =>{
            console.log(action.payload)
            
            // const houseFilter = action.payload.data.filter((h: any) => h.house === action.payload.value)
            // const houseFilter = state.data.filter((h: any) => h.house === action.payload )
            // state.data = houseFilter
        }
    },
})

export const { staff, student, houses } = filtreSlice.actions

export default filtreSlice.reducer