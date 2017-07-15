declare global {
  namespace JSX {
    type Element = any;
    interface IntrinsicElements {
      div: any;
    }
  }
}

export let React = {
  createElement(type: Function | string, props: any, content: any) {
    console.log('createElement', type, props, content);
    return [type, props, content];
  }
};
