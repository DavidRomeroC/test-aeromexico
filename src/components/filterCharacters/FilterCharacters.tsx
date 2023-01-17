import { useFetch } from '../../hooks/useFetch';
import { useAppDispatch } from '../../app/hooks';
import { student, staff, houses } from '../../features/charactersFiltred/filtreSlice';
import './_filterCharacters.scss'
import { useState } from 'react';

export const FilterCharacters = ({ isActive }: any) => {

    const [casa, setCasa] = useState("")

    const { data } = useFetch('hpcharacters')
    const dispatch = useAppDispatch()

    const handleStudent = () => {
        const payload = {
            isActive,
            data,
            casa
        }
        dispatch(student(payload))
    }

    const handleStaff = () => {
        const payload = {
            isActive,
            data,
            casa
        }
        dispatch(staff(payload))
    }

    const handleChange = (e: any) => {
        setCasa(e.target.value)
    }
    // console.log(casa)

    return (
        <div className='buttons__filter'>
            <button
                disabled={!casa && true}
                style={isActive === null ? {} : isActive ? {} : { background: '#6B63B5' }}
                onClick={handleStudent}
            >
                ESTUDIANTES
            </button>
            <button
                disabled={!casa && true}
                style={isActive === null ? {} : isActive ? { background: '#6B63B5' } : {}}
                onClick={handleStaff}
            >
                STAFF
            </button>
            <div>
                <select onChange={handleChange} name="casas" id="casas">
                    <option value="">Selecciona una casa</option>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                </select>
            </div>
        </div>
    )
}
