import {React, render} from './index';

function init() {
  console.log('Hi!');
  let name = 'world';
  let clazz = 'that<>""';
  console.log(<Hello name={name}><Hello>Inside!</Hello> More</Hello>);
  console.log();
  let hi = new Hello();
  hi.hi();
  render(
    <div class={clazz}>Hi, {name}!</div>,
    document.getElementById('root')!
  );
}

class Hello {
  hi = () => console.log('Hi from', this);
  props: {
    name?: string;
  };
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
