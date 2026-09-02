import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HolaMundo from '../src/components/HolaMundo.vue'

describe('HolaMundo', () => {
  it('muestra el saludo por defecto', () => {
    const wrapper = mount(HolaMundo)
    expect(wrapper.find('h1').text()).toBe('Hola mundo')
  })

  it('usa el nombre que le pasamos como prop', () => {
    const wrapper = mount(HolaMundo, { props: { nombre: 'barata' } })
    expect(wrapper.find('h1').text()).toBe('Hola barata')
  })

  it('suma una visita al hacer clic', async () => {
    const wrapper = mount(HolaMundo)
    expect(wrapper.find('button').text()).toContain('0')

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('button').text()).toContain('1')
  })
})
