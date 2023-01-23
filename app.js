import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React!');

///////////////////JSX/////////////////////
// const heading2 = <h1>Hello There</h1>;

const Heading3 = () => <h2>Hello</h2>;

const Heading = () => {
  return <div>{<Heading3 />}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading />);
