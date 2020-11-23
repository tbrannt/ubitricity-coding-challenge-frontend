import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui';
import ChargePointStatus from '@/components/ChargePointStatus.vue'

const localVue = createLocalVue();
localVue.use(ElementUI);

describe('ChargePointStatus', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ChargePointStatus, { propsData: { chargePointStatus: { chargePointName: 'CP_11' }}, localVue})
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders button with "plug in" if state is AVAILABLE', () => {
    const wrapper = mount(ChargePointStatus, { propsData: { chargePointStatus: { chargePointName: 'CP_11', status: 'AVAILABLE' }}, localVue})
    expect(wrapper.find('.charge-btn span').text()).toBe('plug in')
  })

  test('renders button with "unplug" if state is OCCUPIED', () => {
    const wrapper = mount(ChargePointStatus, { propsData: { chargePointStatus: { chargePointName: 'CP_11', status: 'OCCUPIED' }}, localVue})
    expect(wrapper.find('.charge-btn span').text()).toBe('unplug')
  })
})
