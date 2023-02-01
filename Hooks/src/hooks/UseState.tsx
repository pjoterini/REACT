import { useState } from "react";

export const UseState = () => {
  const [value, setValue] = useState(1);

  let [object, setObject] = useState({
    animalName: "szura",
    animal: "cat",
  });

  const [fn, setFn] = useState(() => {
    console.log("useState() initial only runs once");
    return 4;
  });

  return (
    <div className="hook">
      <div className="example-container">
        <div className="value">{value}</div>
        <div className="value">{fn}</div>
        <button
          className="btn"
          onClick={() => {
            setValue((prev) => prev + 1);
            setFn((prev) => prev + 2);
          }}
        >
          Increment
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue((prev) => prev - 1);
            setFn((prev) => prev - 2);
          }}
        >
          Decrement
        </button>
      </div>
      <div className="example-container">
        <div>
          <p>Name: {object.animalName}</p>
          <p>Race: {object.animal}</p>
        </div>
        <label htmlFor="animalName">Name</label>
        <input
          className="input"
          name="animalName"
          type="text"
          onChange={(e) => {
            setObject({
              ...object,
              animalName: e.target.value,
            });
          }}
        />
        <label htmlFor="animal">Breed</label>
        <input
          className="input"
          name="animal"
          type="text"
          onChange={(e) => {
            setObject({
              ...object,
              animal: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};
