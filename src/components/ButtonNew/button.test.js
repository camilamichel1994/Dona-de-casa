import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Button from './index'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('ButtonNew', () => {

    test('Adiciona título', () => {
        const component = mount(<Button title="foobar" />)
        const resultado = component.find('div').children().text()
        expect(resultado).toEqual("foobar")
    })

})