import { shallowMount ,  createLocalVue } from '@vue/test-utils'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Card from '@/components/cards/Card'

const localVue = createLocalVue();
localVue.use(BootstrapVue) 
localVue.use(IconsPlugin) 

describe('Card.vue', () => {
  let wrapper 
  const anime = {
    image_url: 'https://cdn.myanimelist.net/images/anime/9/68095.jpg?s=e61117f568accbf2b979d408b060875',
    url: 'https://myanimelist.net/anime/24701/Mushishi_Zoku_Shou_2nd_Season',
    title: 'Mushishi Zoku Shou 2nd Season',
    total_episodes: 13,
    score: 8,
    watching_status: 2
  }

  const { 
    image_url, 
    url, 
    title, 
    total_episodes, 
    score, 
    watching_status
  } = anime
  
  beforeEach(() => {
    wrapper = shallowMount(Card, {
      localVue,
      propsData: { anime: anime } 
    })
  })

  it('render imageUrl', () => {
    expect(typeof image_url).toBe('string')
    expect(wrapper.vm.imageUrl).toBe(image_url)
  })

  it('render title', () => {
    expect(typeof title).toBe('string')
    expect(wrapper.vm.title).toBe(title)
  })

  it('render url', () => {
    expect(typeof url).toBe('string')
    expect(wrapper.vm.url).toBe(url)
  })

  it('render total episodes', () => {
    expect(typeof total_episodes).toBe('number')
    expect(wrapper.vm.totalEpisodes).toBe(`${total_episodes} Episode(s)`)
  })

  it('render score', () => {
    expect(typeof score).toBe('number')
    expect(wrapper.vm.score).toBe(score)
  })

  it('function validateStatus', () => {
    const { color, icon } = wrapper.vm.validateStatus(watching_status)
    expect(typeof color).toBe('string')
    expect(typeof icon).toBe('string')
  })

  it('render color', () => {
    const { color } = wrapper.vm.validateStatus(watching_status)
    expect(wrapper.vm.color).toBe(color)
  })

  it('render icon', () => {
    const { icon } = wrapper.vm.validateStatus(watching_status)
    expect(wrapper.vm.icon).toBe(icon)
  })

  it('click', () => {
    console.log(wrapper.trigger('click'))
  })
})
