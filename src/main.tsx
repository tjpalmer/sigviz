// import {createElement, Component, render} from 'rax';
// import {Text} from 'rax-text';

let React = {
  createElement(type: Function, props: any) {
    console.log('createElement', type, props);
  }
};

declare namespace JSX {
  type Element = any;
}

// console.log(Text);

function init() {
  console.log('Hi!');
  (<Hello name="world"/>);
}

class Hello {
  render() {
    console.log('render!');
  }
}

// const styles = {
//   title: {
//     color: '#ff4400',
//     fontSize: 48,
//     fontWeight: 'bold',
//   }
// };

window.addEventListener('load', init);
