import React from "react";

interface ListProps {
  people: {
    name: string;
    age: number;
    url: string;
  }[];
}

export const List: React.FC<ListProps> = ({ people }) => {
  const renderPeople = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <div key={person.name}>
          <p>{person.name}</p>
          <p>{person.age}</p>
          <img
            style={{
              width: "200px",
            }}
            src={person.url}
          ></img>
        </div>
      );
    });
  };

  return <ul>{renderPeople()}</ul>;
};
