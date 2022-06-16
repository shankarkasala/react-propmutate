import React from 'react';
const Child = (props) => {
  props.change('uma');
  return <div>Child {props.name}</div>;
};
export default Child;
