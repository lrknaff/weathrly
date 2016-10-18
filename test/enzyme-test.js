var expect = require('chai').expect;
const React = require('react');
const App   = require('../app/components/App');
require('locus');

import {shallow, mount, render} from 'enzyme';

describe('app.jsc should render the welcome page', function() {
  it('should render the input field', function() {
    const browser = shallow(<App/>);
    expect(browser.find('.location-input')).to.have.length(1);
  });

<<<<<<< HEAD
  // it('should render the submit button', function() {
  //   const browser = shallow(<App/>);
  //   expect(browser.find('.submit-button')).to.have.length(1);
  // });
  //
  // it('should allow me to input a location', function () {
  //     const wrapper = mount(<App/>);
  //     const input = wrapper.find('.location-input');
  //
  //     input.simulate('change', {target: {value: 'denver'} });
  //     expect(wrapper.state('location')).to.equal('denver');
  //   });
  //
  //   it('clicking submit should add the location title to the page', function() {
  //     const wrapper = mount(<App/>);
  //     const input = wrapper.find('.location-input');
  //
  //     input.simulate('change', {target: {value: 'denver'}});
  //     wrapper.find('.submit-button').simulate('click');
  //     expect(wrapper.text()).to.equal('denver');
  //   });
  //
  //   it('clicking submit should render the daily weather to the page', function() {
  //     const wrapper = mount(<App/>);
  //     const input = wrapper.find('.location-input');
  //
  //     input.simulate('change', {target: {value: 'denver'}});
  //     wrapper.find('.submit-button').simulate('click');
  //     eval(locus);
  //     expect(wrapper.children.find('article')).to.have.length(8);
  //   });
=======
  it('should render the submit button', function() {
    const browser = shallow(<App/>);
    expect(browser.find('.submit-button')).to.have.length(1);
  });

  it('should allow me to input a location', function () {
      const wrapper = mount(<App/>);
      const input = wrapper.find('.location-input');

      input.simulate('change', {target: {value: 'denver'} });
      expect(wrapper.state('location')).to.equal('denver');
    });

    it('clicking submit should add the location title to the page', function() {
      const wrapper = mount(<App/>);
      const input = wrapper.find('.location-input');

      input.simulate('change', {target: {value: 'denver'}});
      wrapper.find('.submit-button').simulate('click');
      expect(wrapper.text()).to.equal('denver');
    });

    it('clicking submit should render the daily weather to the page', function() {
      const wrapper = mount(<App/>);
      const input = wrapper.find('.location-input');

      input.simulate('change', {target: {value: 'denver'}});
      wrapper.find('.submit-button').simulate('click');
      expect(wrapper.children.find('article')).to.have.length(8);
    });
>>>>>>> 304bf369a078032e6f29f89e65b219c4e96bd6af
});
