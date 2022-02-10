import App from '../App';
import {render} from '@testing-library/react'

describe('App', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<App/>);
    expect(wrapper.baseElement).toMatchSnapshot();
  })
})