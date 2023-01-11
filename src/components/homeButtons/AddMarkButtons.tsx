import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { deleteFav } from "../../features/favourite/favouritesSlice";
import { useState } from 'react';
//styles
import './_addMarkButtons.scss'

export const AddMarkButtons = () => {

    const [active, setActive] = useState(false)

    const favourites = useAppSelector((state: any) => state.favourite.favs)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const handleAdd = () => navigate('/addCharacter')

    const showFavs = () => {
        setActive(!active)
    }

    const handleDeleteFav = (name: string, image: string) => {
        dispatch(deleteFav({name, image}))
    }

    return (
        <div className="favs-button-content" >
            <div className="buttons__content" >
                <button onClick={showFavs} >FAVORITOS
                    <img
                        src={require('../../assets/img/bookmark.png')}
                        alt="bookmark"
                    />
                </button>

                <button onClick={handleAdd} >AGREGAR
                    <img
                        src={require('../../assets/img/add-user.png')}
                        alt="add-user"
                    />
                </button>
            </div>
            {
                active
                    ?
                    (favourites.map(({ name, image }: any, id: any) => (
                        <div key={id} className='favs-content' >
                            <div>
                                <img src={image} alt={name} />
                            </div>
                            <p> {name} </p>
                            <button
                            onClick={()=>handleDeleteFav(name, image)}
                            >
                                <img
                                    src={require("../../assets/img/trash.png")}
                                    alt="eliminar"
                                />
                            </button>
                        </div>
                    )))
                    :
                    undefined
            }
        </div>
    )
}
