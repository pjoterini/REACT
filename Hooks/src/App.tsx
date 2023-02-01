import { createContext } from "react";
import { UseState } from "./hooks/UseState";
import { UseEffect } from "./hooks/UseEffect";
import { UseContext } from "./hooks/UseContext";
import { UseRef } from "./hooks/UseRef";
import "./app.scss";
import { LaithCc } from "./CCtypescript/LaithCc";
import { UseEffect2 } from "./hooks/UseEffect2";
import { EventProps } from "./CCtypescript/EventProps";
import { UseReducer } from "./hooks/UseReducer";
import { UseReducerComplex } from "./hooks/UseReducerComplex";
import { UseStateTs } from "./MasteringHooksTS/UseStateTs";
import { UseEffectTs } from "./MasteringHooksTS/UseEffectTs";
import { UseContextTs } from "./MasteringHooksTS/UseContextTs";
import UseReducerTs from "./MasteringHooksTS/UseReducerTs";
import { CustomHookTs } from "./MasteringHooksTS/CustomHookTs";

interface objContextProps {
  name: string;
  age: number;
}

export const ColorContext = createContext("");
export const ObjectContext = createContext<objContextProps>({
  name: "",
  age: 0,
});

function App() {
  return (
    <div>
      <div className="App">
        <UseState />
        <UseEffect />
        <UseEffect2 />
        <ObjectContext.Provider value={{ name: "piot", age: 25 }}>
          <ColorContext.Provider value="green">
            <UseContext />
          </ColorContext.Provider>
        </ObjectContext.Provider>
        <UseRef />
        <UseReducer />
        <UseReducerComplex />
        <UseStateTs />
        <UseEffectTs />
        <UseContextTs />
        <UseReducerTs />
        <CustomHookTs />
      </div>
      <div className="App">
        <EventProps />
        <LaithCc />
      </div>
    </div>
  );
}

export default App;
