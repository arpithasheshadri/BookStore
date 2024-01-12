import React from 'react'
import '../setupTests'
import Dashboard from '../pages/dashboard/Dashboard';
// import MyCart from '../components/mycart/MyCart'
import { mount,shallow} from 'enzyme'

describe('Cart', () => {
    it('should get cart items', () => {
      const component = mount(<Dashboard />);
    
      expect(component.text()).toMatch('Books');
    });
  });