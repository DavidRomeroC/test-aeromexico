import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
    favs: []
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<any>) => {
            if (state.favs.length <= 4) {
                state.favs.push(action.payload)
            } else {
                alert('Solo se pueden almacenar 5 personajes a favoritos')
            }
        },
        deleteFav: (state, action: PayloadAction<any>) => {
            const elementName = state.favs.findIndex(((obj: any) => obj.name == action.payload.name));
            state.favs.splice(elementName, 1)
        }
    },
})

export const { addFav, deleteFav } = favouritesSlice.actions

export default favouritesSlice.reducer