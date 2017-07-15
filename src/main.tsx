// import {createElement, Component, render} from 'rax';
// import {Text} from 'rax-text';

let React = {
  createElement(type: Function, props: any, content: any) {
    console.log('createElement', type, props, content);
    return [type, props, content];
  }
};

declare namespace JSX {
  type Element = any;
}

function yo(strings: TemplateStringsArray, ...keys: any[]) {
  console.log(strings, keys);  
}

// console.log(Text);

function init() {
  console.log('Hi!');
  let name = 'world';
  console.log(<Hello name={name}><Hello>Inside!</Hello></Hello>);
  console.log(yo`<Hello name=${name}><Hello>\more</Hello></Hello>`);
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
