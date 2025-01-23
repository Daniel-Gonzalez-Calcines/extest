import { render, screen } from "@testing-library/react";
import Formulario from '../components/Formulario'
import userEvent from "@testing-library/user-event";
describe('Examen UT6 Ej 2.b) Tests', () => {
    let cabecera;
    let gato;
    let nombre;
    let edad;
    let boton
    beforeEach(() => {
        render(<Formulario/>);
        cabecera = screen.getByRole('heading', { name: 'Rellena el formulario' });
        gato = screen.getByAltText('icono');
        edad = screen.getByLabelText('Edad');
        nombre = screen.getByRole('textbox', { name: 'Nombre' });
        boton = screen.getByRole('button', { name: 'Enviar' });
    });

    it('la cabecera se encuentra en el documento', () => {
        expect(cabecera).toBeInTheDocument();
    });

    it('la imagen se encuentra en el documento', () => {
        expect(gato).toBeInTheDocument();
    });

    it('el textbox edad se encuentra en el documento', () => {
        expect(edad).toBeInTheDocument();
    });

    it('el textbox nombre se encuentra en el documento', () => {
        expect(nombre).toBeInTheDocument();
    });

    it('el boton se encuentra en el documento', () => {
        expect(boton).toBeInTheDocument();
    });

    it('comprobar que la cabecera h6 se genera al rellenar el formulario', async () => {
        let cabecerah6;
        const user = userEvent.setup()
        await user.clear(edad);
        await user.type(edad, '21');             
        await user.click(boton);
        cabecerah6 = screen.getByRole('heading', { name: 'Eres mayor de edad' });
        expect(cabecerah6).toBeInTheDocument();
    });

});