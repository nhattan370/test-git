import Random from './Random';
import Counter from './Counter';
import InputForm from './InputForm.js';
import RadioForm from './RadioForm.js';
import CheckBoxForm from './CheckBoxForm.js';
import CreateTodoList from './TodoList.js';

function App() {
  return (
    <div className="App">
      <div><Random /></div>
      <hr></hr>
      <div><Counter /></div>
      <hr></hr>
      <div><InputForm /></div>
      <hr></hr>
      <div><RadioForm /></div>
      <hr></hr>
      <div><CheckBoxForm /></div>
      <hr></hr>
      <div><CreateTodoList/></div>
    </div>
  );
}

export default App;
