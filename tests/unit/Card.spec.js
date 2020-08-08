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

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      localVue,
      propsData: { anime: anime } 
    })
  })

  it('render imageUrl', () => {
      expect(wrapper.vm.imageUrl).toBe(anime.image_url)
  })

  it('render title', () => {
    expect(wrapper.vm.title).toBe(anime.title)
  })

  it('render url', () => {
    expect(wrapper.vm.url).toBe(anime.url)
  })

  it('render total episodes', () => {
    expect(wrapper.vm.totalEpisodes).toBe(`${anime.total_episodes} Episode(s)`)
  })
})
