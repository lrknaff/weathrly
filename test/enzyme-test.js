var expect = require('chai').expect;
const React = require('react');
const App   = require('../app/components/App');

import {shallow, mount, render} from 'enzyme';

describe('app.jsc should render the welcome page', function() {
  it('should render the input field', function() {
    const browser = shallow(<App/>);
    expect(browser.find('.location-input')).to.have.length(1);
  });

  it('should render the submit button', function() {
    const browser = shallow(<App/>);
    expect(browser.find('.submit-button')).to.have.length(1);
  });

  it('should allow me to click the submit button', function() {
    const wrapper = mount(<App/>);
    const input = wrapper.find('.location-input')
    
    input.simulate('change', {target: {value: 'denver'}});
    wrapper.find('.submit-button').simulate('click');
    expect(wrapper.state().location).to.equal('denver');
  });
});



// describe('app.jsx should render the LikesCounter', function(){
//   it('should render the application',function(){
//     const browser = shallow(<App/>)
//     expect(browser.contains(<LikesCounter initialCount={0}/>)).to.be.true
//     expect(browser.props()).to.deep.equal({initialCount: 0})
//   });
//   it('should have the button text render onto the page', function(){
//     const wrapper = render(<App/>)
//     console.log(wrapper.text())
//     expect(wrapper.text()).to.contain('Likes: 0Like! (+1)Dislike! (-1)')
//   });
// });
// describe('renders LikesCounter', function() {
//   it('should have 2 action button props', function() {
//     //define a specific wrapper
//     const wrapper = render(<LikesCounter/>)
//     //find all of the action buttons
//     //assert that you have found the number of aciton buttons on the page
//     expect(wrapper.find('.ActionButton')).to.have.length(2);
//   });
//   it('should allow me to click the upvote button', function() {
//     //define wrapper
//     const wrapper = mount(<LikesCounter/>)
//     wrapper.state().count = 0;
//     //simulate click event
//     wrapper.find('#like').simulate('click');
//     //expect the state to change from 0 to 1
//     expect(wrapper.state().count).to.equal(1);
//   });
//   it('should allow me to click the downvote button', function() {
//     const wrapper = mount(<LikesCounter/>)
//     wrapper.state().count = 1;
//     wrapper.find('#dislike').simulate('click');
//     expect(wrapper.state().count).to.equal(0);
//   })
// })
