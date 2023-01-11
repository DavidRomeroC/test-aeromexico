import { setHouse } from '../../helpers/setHouse'
import { useFetch } from '../../hooks'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useEffect } from 'react';
import { addFav } from '../../features/favourite/favouritesSlice';
import './_renderCharacters.scss'

export const RenderCharacters = ({setIsActive}: any) => {

    const { loading } = useFetch('hpcharacters')

    const characters = useAppSelector((state) => state.characters.data)
    const favs = useAppSelector((state) => state.favourite.favs)
    const dispatch = useAppDispatch()

    useEffect(() => {
        characters.length === 0 ? setIsActive(null) : characters.find((ch: any) => ch.hogwartsStaff === true) ? setIsActive(true) : setIsActive(false)
    }, [characters])

    const handleFavourite = (name: any, image: any) => {
        dispatch(addFav({name, image}))
    }

    return (
        <div className='characters__main-content' >
            {
                loading
                    ?
                    (<div>Cargado data</div>)
                    :
                    (
                        characters.map(({ house, image, alive, name, hogwartsStaff, dateOfBirth, gender, eyeColour, hairColour }: any, id: any) => (
                            <div key={id} className='card-content' >
                                <div
                                    className='img-content'
                                    style={{ background: setHouse(house) }}
                                >
                                    <img
                                        src={image}
                                        alt="character"
                                    />
                                </div>
                                <div className='details-content' >
                                    <p>{alive ? "VIVO" : "FINADO"} / {hogwartsStaff ? "STAFF" : "ESTUDIANTE"}</p>
                                    <h4> {name} </h4>
                                    <p>Cumpleaños: <span>{dateOfBirth}</span></p>
                                    <p>Género: <span>{gender}</span></p>
                                    <p>Color de ojos: <span>{eyeColour}</span> </p>
                                    <p>Color de pelo: <span>{hairColour}</span> </p>
                                </div>
                                <div className='favourite' >
                                    <button
                                        onClick={() => handleFavourite(name, image)}
                                    >
                                        <img
                                            src={ favs.some((item: any) => item.name === name) ? require('../../assets/img/bookmark.png') : require('../../assets/img/bookmark-uncheck.png')}
                                            alt="favourite"
                                        />
                                    </button>
                                </div>
                            </div>
                        ))
                    )
            }
        </div>
    )
}
