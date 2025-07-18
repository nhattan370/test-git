import Random from './Random';
import Counter from './Counter';
import InputForm from './InputForm.js';
import RadioForm from './RadioForm.js';
import CheckBoxForm from './CheckBoxForm.js';
import CreateTodoList from './TodoList.js';
import MountedAndUnmounted from './MountedAndUnmounted.js';
import UseEffectExample from './UseEffectExample.js';
import UseEffectWithDependences from './UseEffectWithDependences.js';
import ScrollScreen from './UseEffectWithDomEvent.js';
import Countdown from './SetTimeWithUseEffect.js';
import PreviewAvatar from './PreviewAvatar.js';
import FakeChatApp from './FakeChatApp.js';
import FakeAnotherApp from './FakeAnotherApp.js';
import UseLayoutEffect  from './UseLayoutEffect.js';
import CountdownUseRef from './UseRefCountDown.js';
import CountdownUseRefSaveOldValue from './UseRefSaveOldValue.js'

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
      <hr></hr>
      <div><MountedAndUnmounted/></div>
      <hr></hr>
      <div><UseEffectExample/></div>
      <hr></hr>
      <div><UseEffectWithDependences/></div>
      <hr></hr>
      <div><ScrollScreen></ScrollScreen></div>
      <hr></hr>
      <div><Countdown></Countdown></div>
      <hr></hr>
      <div><PreviewAvatar></PreviewAvatar></div>
      {/* <hr></hr>
      <div><FakeChatApp></FakeChatApp></div> */}
      <hr></hr>
      <div><FakeAnotherApp></FakeAnotherApp></div>
      <hr></hr>
      <div><UseLayoutEffect></UseLayoutEffect></div>
      <hr></hr>
      <div><CountdownUseRef></CountdownUseRef></div>
      <hr></hr>
      <div><CountdownUseRefSaveOldValue></CountdownUseRefSaveOldValue></div>
    </div>
  );
}

export default App;
