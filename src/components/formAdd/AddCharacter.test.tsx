import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { AddCharacter } from './AddCharacter'

test('Comprobar si el componente AddCharacter se esta renderizando', () => {

    const component = render(<AddCharacter />)
    // component.getByText('Agregar un personaje')
    expect(component.container).toHaveTextContent('Agregar un personaje')
})