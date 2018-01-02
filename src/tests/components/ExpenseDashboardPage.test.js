import React from 'react';
import {shallow} from 'enzyme';
import DashboardPage from '../../components/DashboardPage';
test('Should test ExpenseDashboard component',()=>{
  const wrapper = shallow(<DashboardPage></DashboardPage>);
  expect(wrapper).toMatchSnapshot();
});
