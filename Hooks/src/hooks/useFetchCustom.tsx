import { useEffect, useState } from "react";

interface customUseFetchProps {
  url: string;
}

export const useFetchCustom = ({ url }: customUseFetchProps) => {
  const [data, setData] = useState({
    name: "",
  });

  useEffect(() => {
    if (url === "") return;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [url]);

  return {
    data,
  };
};
