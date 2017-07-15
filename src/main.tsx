import {createElement, Component, render} from 'rax';
import {Text} from 'rax-text';

let React = {createElement};

console.log(Text);

function init() {
  console.log('Hi!');
  render(<Hello name="world" />);
}

class Hello extends Component {
  render() {
    return [
      <Text style={styles.title}>Hello Rax</Text>,
      <Text style={styles.title}>Hello {this.props.name}</Text>,
    ];
  }
}

const styles = {
  title: {
    color: '#ff4400',
    fontSize: 48,
    fontWeight: 'bold',
  }
};

window.addEventListener('load', init);
