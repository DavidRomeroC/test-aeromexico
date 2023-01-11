import { useFetch } from '../../hooks/useFetch';
import { useAppDispatch } from '../../app/hooks';
import { student, staff } from '../../features/charactersFiltred/filtreSlice';
import './_filterCharacters.scss'

export const FilterCharacters = ({ isActive }: any) => {

    const { data } = useFetch('hpcharacters')
    const dispatch = useAppDispatch()

    const handleStudent = () => dispatch(student(data))

    const handleStaff = () => dispatch(staff(data))

    return (
        <div className='buttons__filter'>
            <button
                style={isActive === null ? {} : isActive ? {} : { background: '#6B63B5' }}
                onClick={handleStudent}
            >
                ESTUDIANTES
            </button>
            <button
                style={isActive === null ? {} : isActive ? { background: '#6B63B5' } : {}}
                onClick={handleStaff}
            >
                STAFF
            </button>
        </div>
    )
}
