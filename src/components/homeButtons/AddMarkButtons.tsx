import { useNavigate } from "react-router-dom";
//styles
import './_addMarkButtons.scss'

export const AddMarkButtons = () => {

    const navigate = useNavigate()

    const handleAdd = () => {
        navigate('/addCharacter')
    }

    return (
        <div className="buttons__content" >
            <button>FAVORITOS
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
    )
}
