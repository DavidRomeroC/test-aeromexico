import { setHouse } from '../../helpers/setHouse'
import { useFetch } from '../../hooks'
import './_renderCharacters.scss'

export const RenderCharacters = () => {

    const { data, loading } = useFetch('hpcharacters')

    return (
        <div className='characters__main-content' >
            {
                loading
                    ?
                    (<div>Cargado data</div>)
                    :
                    (
                        data.map(({ house, image, alive, name, hogwartsStaff, dateOfBirth, gender, eyeColour, hairColour }: any, id: any) => (
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
                                    <img
                                        src={require('../../assets/img/bookmark.png')}
                                        alt="favourite"
                                    />
                                </div>
                            </div>
                        ))
                    )
            }
        </div>
    )
}
