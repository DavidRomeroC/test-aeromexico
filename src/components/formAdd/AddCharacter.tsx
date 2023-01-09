import { Formik, Form, Field, ErrorMessage } from "formik";

export const AddCharacter = () => {

    return (
        <div className="form__container">
            <div>
                <h3>Agregar un personaje</h3>
                <button><img src="" alt="" /></button>
            </div>
            <Formik
                initialValues={{
                    name: '',
                    last_name: '',
                    birthday: "",
                }}
                validate={(values) => {
                    const errors = {
                        name: '',
                        last_name: '',
                        birthday: "",
                    };

                    if (!values.name) {
                        errors.name = "Por favor ingrese un usuario"
                    } else if (values.name.length < 3) {
                        errors.name = "Por favor ingrese un usuario de más de 3 caracteres"
                    } else if (values.name.length > 30) {
                        errors.name = "A excedido el limite de 30 caracteres"
                    }

                    if (!values.last_name) {
                        errors.last_name = "Por favor ingrese un usuario"
                    } else if (values.last_name.length < 3) {
                        errors.last_name = "Por favor ingrese un usuario de más de 3 caracteres"
                    } else if (values.last_name.length > 30) {
                        errors.last_name = "A excedido el limite de 30 caracteres"
                    }

                    if (!values.birthday) {
                        errors.birthday = "Por favor ingrese una fecha"
                    }

                    if (errors.name === "" && errors.last_name === "" && errors.birthday === "") {
                        return {};
                    } else {
                        return errors;
                    }
                }}
                onSubmit={({ name, last_name, birthday }, { resetForm }) => {

                    resetForm();
                }}
            >
                {({ errors }) => (
                    <Form>
                        <div className="form-group">
                            <div className="form__input-container">
                                <label htmlFor="name">Nombre: </label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form__input"
                                />
                                <ErrorMessage name="name" component={() => (<div> {errors.name} </div>)} />
                            </div>
                            <div className="form__input-container">
                                <label htmlFor="last_name">Compleaños: </label>
                                <Field
                                    type="text"
                                    id="birthday"
                                    name="birthday"
                                    className="form__input"
                                />
                                <ErrorMessage name="birthday" component={() => (<div> {errors.last_name} </div>)} />
                            </div>
                            <div className="form__input-container">
                                <label htmlFor="birthday">Color de ojos: </label>
                                <Field
                                    type="text"
                                    id="eyes"
                                    name="eyes"
                                    className="form__input"
                                />
                                <ErrorMessage name="eyes" component={() => (<div> {errors.birthday} </div>)} />
                            </div>
                            <div className="form__input-container">
                                <label htmlFor="birthday">Color de pelo: </label>
                                <Field
                                    type="text"
                                    id="hair"
                                    name="hair"
                                    className="form__input"
                                />
                                <ErrorMessage name="hair" component={() => (<div> {errors.birthday} </div>)} />
                            </div>
                            <div className="form__input-container">
                                <label htmlFor="birthday">Género: </label>
                                <div>
                                    <Field type="radio" id="genre" name="genre" value="female" className="form__input"/> Mujer
                                    <Field type="radio" id="genre" name="genre" value="male" className="form__input"/> Hombre
                                </div>
                                <ErrorMessage name="genre" component={() => (<div> {errors.birthday} </div>)} />
                            </div>
                            <div className="form__input-container">
                                <label htmlFor="birthday">Posición: </label>
                                <div>
                                    <Field type="radio" id="position" name="position" value="student" className="form__input"/> Estudiante
                                    <Field type="radio" id="position" name="position" value="staff" className="form__input"/> STAFF
                                </div>
                                <ErrorMessage name="position" component={() => (<div> {errors.birthday} </div>)} />
                            </div>
                            <button className="btn-login" type="submit">Guardar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}