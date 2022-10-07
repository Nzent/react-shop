import PreviewCard from "../components/ItemCard";
import { useState, useEffect } from "react";
import axios from "axios";

export function Store({}) {
  const [storeItems, setStoreItems] = useState<any>([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_API_URL}/products/`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (response: any) {
        setStoreItems(response.data);
      })
      .catch((e) => console.log(e.response));
  }, []);
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {storeItems.map((item: any,) => (
            <div key={item.id}>
              <PreviewCard {...item}/>
            </div>
          ))}
      </div>
    </>
  );
}
