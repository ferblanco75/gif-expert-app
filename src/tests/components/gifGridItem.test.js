import React from 'react';
//import { render } from '@testing-library/react';
import GifGridItem from '../../components/GifGridItem';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';



describe('pruebas en <GifGridItem/>', () => {

    test('debe mostrar el componente GifGridItem correctamente', ()=> { 

        let wrapper = shallow(< GifGridItem />)
        expect (wrapper).toMatchSnapshot();
       
    })

})