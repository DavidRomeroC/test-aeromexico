//styles
import './_addCharacter.scss'

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';

export const AddCharacter = () => {

    const navigate = useNavigate()

    const handleReturn = () => {
        navigate('/')
    }

    return (
        <div className="form__container">
            <div className='title-esc' >
                <h3>Agregar un personaje</h3>
                <button
                    role='returnButton'
                    onClick={handleReturn}
                >
                    <img
                        src={require('../../assets/img/x-mark.png')}
                        alt="exit form"
                    />
                </button>
            </div>
            <Formik
                initialValues={{
                    name: '',
                    dateOfBirth: "",
                    eyeColour: "",
                    hairColour: "",
                    gender: "",
                    hogwartsStaff: "",
                    image: ""
                }}
                validate={(values) => {
                    const errors = {
                        name: '',
                        dateOfBirth: "",
                        eyeColour: "",
                        hairColour: "",
                        gender: "",
                        hogwartsStaff: "",
                        image: ""
                    };

                    (!values.name) && (errors.name = "Ingrese un nombre");

                    (!values.dateOfBirth) && (errors.dateOfBirth = "Ingrese el dia de nacimiento");

                    (!values.eyeColour) && (errors.eyeColour = "Ingrese color de ojos");

                    (!values.hairColour) && (errors.hairColour = "Ingrese color de cabello");

                    (!values.gender) && (errors.gender = "Seleccione un género");

                    (!values.hogwartsStaff) && (errors.hogwartsStaff = "Seleccione una picisión");

                    (!values.image) && (errors.image = "Agregue una foto");

                    if (errors.name === "" && errors.dateOfBirth === "" && errors.eyeColour === "" && errors.hairColour === "" && errors.gender === "" && errors.hogwartsStaff === "" && errors.image === "") {
                        return {};
                    } else {
                        return errors;
                    }
                }}
                onSubmit={({ name, dateOfBirth, eyeColour, hairColour, gender, hogwartsStaff }, { resetForm }) => {

                    const character = {
                        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                        house: "",
                        name,
                        dateOfBirth,
                        eyeColour,
                        hairColour,
                        gender,
                        hogwartsStaff: (hogwartsStaff === "true" ? true : false),
                        image: "https://i.pinimg.com/236x/af/de/72/afde727d75f5aa585c407cd89910cb80.jpg",
                    }

                    console.log(character)
                    fetch('http://localhost:4000/hpcharacters', {
                        method: "POST",
                        body: JSON.stringify(character),
                        headers: { "Content-type": "application/json; charset=UTF-8" }
                    })
                        .then(res => console.log(res))
                        .catch(err => console.log(err))

                    resetForm();
                }}
            >
                {({ errors }) => (
                    <Form>
                        <div className="form-group">
                            <div className="form__input-container">
                                <label htmlFor="name">NOMBRE </label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form__input"
                                />
                                <ErrorMessage name="name" component={() => (<div> {errors.name} </div>)} />
                            </div>

                            <div className="form__input-container">
                                <label htmlFor="dateOfBirth">CUMPLEAÑOS </label>
                                <Field
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    className="form__input"
                                />
                                <ErrorMessage name="dateOfBirth" component={() => (<div> {errors.dateOfBirth} </div>)} />
                            </div>

                            <div className="form__input-container">
                                <label htmlFor="eyeColour">COLOR DE OJOS </label>
                                <Field
                                    type="text"
                                    id="eyeColour"
                                    name="eyeColour"
                                    className="form__input"
                                />
                                <ErrorMessage name="eyeColour" component={() => (<div> {errors.eyeColour} </div>)} />
                            </div>

                            <div className="form__input-container">
                                <label htmlFor="hairColour">COLOR DE PELO </label>
                                <Field
                                    type="text"
                                    id="hairColour"
                                    name="hairColour"
                                    className="form__input"
                                />
                                <ErrorMessage name="hairColour" component={() => (<div> {errors.hairColour} </div>)} />
                            </div>

                            <div className="form__input-container">
                                <label htmlFor="gender">GÉNERO </label>
                                <div>
                                    <div>
                                        <Field type="radio" id="gender" name="gender" value="female" className="form__input" />
                                        <span>Mujer</span>
                                    </div>
                                    <div>
                                        <Field type="radio" id="gender" name="gender" value="male" className="form__input" />
                                        <span>Hombre</span>
                                    </div>
                                </div>
                                <ErrorMessage name="gender" component={() => (<div> {errors.gender} </div>)} />
                            </div>

                            <div className="form__input-container">
                                <label htmlFor="hogwartsStaff">POSICIÓN </label>
                                <div>
                                    <div>
                                        <Field type="radio" id="hogwartsStaff" name="hogwartsStaff" value="false" className="form__input" />
                                        <span>Estudiante</span>
                                    </div>
                                    <div>
                                        <Field type="radio" id="hogwartsStaff" name="hogwartsStaff" value="true" className="form__input" />
                                        <span>STAFF</span>
                                    </div>
                                </div>
                                <ErrorMessage name="hogwartsStaff" component={() => (<div> {errors.hogwartsStaff} </div>)} />
                            </div>

                            <div className="form__input-container-file">
                                <label htmlFor="image">FOTOGRAFIA </label>
                                <Field
                                    type="file"
                                    id="image"
                                    name="image"
                                    className="form__input"
                                />
                                <ErrorMessage name="image" component={() => (<div> {errors.image} </div>)} />
                            </div>

                            <button className="btn-login" type="submit">GUARDAR</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}