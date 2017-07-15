// import {createElement, Component, render} from 'rax';
// import {Text} from 'rax-text';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// let React = {
//   createElement(type: Function | string, props: any, content: any) {
//     console.log('createElement', type, props, content);
//     return [type, props, content];
//   }
// };

// declare namespace JSX {
//   type Element = any;
//   interface IntrinsicElements {
//     div: any;
//   }
// }

function yo(strings: TemplateStringsArray, ...keys: any[]) {
  console.log(strings, keys);  
}

// console.log(Text);

function init() {
  console.log('Hi!');
  let name = 'world';
  // console.log(<Hello name={name}><Hello>Inside!</Hello></Hello>);
  // console.log(<div>Hi</div>);
  console.log(yo`<Hello name=${name}><Hello>\more</Hello></Hello>`);
  let hi = new Hello();
  hi.hi();
  ReactDOM.render(<h1>Hello, {name}!</h1>, document.getElementById('root'));
}

class Hello {
  hi = () => console.log('Hi from', this);
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
