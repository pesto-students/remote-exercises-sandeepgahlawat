import React from 'react';
import './App.css';
import withState from './withState';
import withHandlers from './withHandlers';


const stateEnhancer = withState('value', 'updateValue', '');
const handlers = withHandlers({
  onChange: (props) => (event) => {
    props.updateValue(event.target.value);
  },
  onSubmit: (props) => (event) => {
    event.preventDefault();
    console.log(props.value);
  },
});

function FormComponent({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Value
        <input type='text' value={value} onChange={onChange} />
      </label>
      <input type='submit' value='Click' />
    </form>
  );
}

const FormWithHandler = handlers(FormComponent);
const Form = stateEnhancer(FormWithHandler);

function App() {
  return <Form />;
}

export default App;
