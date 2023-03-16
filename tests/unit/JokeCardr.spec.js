import { shallowMount } from '@vue/test-utils'
import JokeCard from "@/components/atoms/JokeCard";

describe('JokeCard.vue', () => {
  it('renders joke value correctly', () => {
    const joke = {
      categories: ['category1'],
      value: 'test joke',
    }
    const wrapper = shallowMount(JokeCard, {
      computed: {
        joke: () => joke
      }
    })
    const jokeValue = wrapper.find('p').text()
    expect(jokeValue).toBe('test joke')
  })

  it('matches snapshot', () => {
    const joke = {
      categories: ['category1'],
      value: 'test joke',
    }
    const wrapper = shallowMount(JokeCard, {
      computed: {
        joke: () => joke
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('does not truncate short jokes', () => {
    const joke = {
      categories: ['category1'],
      value: 'This is a short joke.'
    }
    const wrapper = shallowMount(JokeCard, {
      computed: {
        joke: () => joke
      }
    })
    const jokeText = wrapper.find('p').text()
    expect(jokeText).toBe('This is a short joke.')
  })
})