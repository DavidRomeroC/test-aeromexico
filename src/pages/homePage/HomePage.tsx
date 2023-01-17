import { useState } from 'react';
//components
import { RenderCharacters, AddMarkButtons, FilterCharacters } from '../../components'
//styles
import './_homepage.scss'

export const HomePage = () => {

    const [isActive, setIsActive] = useState(null)

    return (
        <div className="main__home-page" >
            <AddMarkButtons />
            <div className='title__content' >
                <h3>Harry Potter</h3>
                <h4>Selecciona tu filtro</h4>
            </div>
            <FilterCharacters isActive={isActive} />
            <RenderCharacters setIsActive={setIsActive}/>
        </div>
    )
}
