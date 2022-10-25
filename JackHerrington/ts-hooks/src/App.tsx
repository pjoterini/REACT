import { CustomHookComponent } from "./CustomHookComponent";
import { UseContextComponent } from "./UseContextComponent";
import { UseEffectComponent } from "./UseEffectComponent";
import { UseReducerComponent } from "./UseReducerComponent";
import { UseRefComponent } from "./UseRefComponent";
import UseStateComponent from "./UseStateComponent";

function App() {
  return (
    <div>
      <h1>Custom Hook</h1>
      <CustomHookComponent />
      <h1>useState</h1>
      <UseStateComponent />
      <h1>UseEffect</h1>
      <UseEffectComponent />
      <h1>UseContext</h1>
      <UseContextComponent />
      <h1>UseReducer</h1>
      <UseReducerComponent />
      <h1>UseRef</h1>
      <UseRefComponent />
    </div>
  );
}

export default App;
