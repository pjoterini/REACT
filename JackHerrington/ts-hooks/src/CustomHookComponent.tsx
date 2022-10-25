import React, { useEffect, useState } from "react";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData(url: string) {
  const [data, setData] = useState<Beverage[] | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
}

export const CustomHookComponent = () => {
  const { data, done } = useFetchData("/jsoncode.json");
  return <div>{done && <img src={data![0].logo} alt="beverage logo" />}</div>;
};
