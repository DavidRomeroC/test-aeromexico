import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { AddCharacter } from './AddCharacter'
import { BrowserRouter } from 'react-router-dom';


describe('Pruebas a componente AddCharacter', () => {

    beforeEach(()=>{
        render(<BrowserRouter><AddCharacter /></BrowserRouter>)
    })

    test('Comprobar si el componente AddCharacter se esta renderizando', () => {
        expect(screen.getByText('Agregar un personaje')).toBeInTheDocument()
    })

})