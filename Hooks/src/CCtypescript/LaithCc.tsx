import React, { useState } from "react";
import { List } from "./List";

interface laith_ccProps {}

export const LaithCc: React.FC<laith_ccProps> = ({}) => {
  interface IState {
    people: {
      name: string;
      age: number;
      url: string;
    }[];
  }

  let [people, setPeople] = useState<IState["people"]>([
    {
      name: "bro",
      age: 27,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg",
    },
  ]);

  return (
    <div>
      <h1>people invited to party</h1>
      <List people={people} />
    </div>
  );
};
