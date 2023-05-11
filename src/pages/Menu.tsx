import { useState, useEffect } from "react";
import burgers from "../menudata";

interface Burger {
  id: number;
  title: string;
  ingredients: string;
  price: string;
}

function Menu() {
  const [menu, setMenu] = useState<Burger[]>([]);
  useEffect(() => {
    setMenu(burgers);
  }, []);

  return (
    <div className="min-[320px]:bg-[url('./images/hamburgerbacon2.jpg')] md:bg-[url('./images/hamburgerbacon.jpg')] bg-cover">
      {menu.map((burger) => {
        return (
          <div
            className="border rounded mt-20 max-w-[680px] mx-auto bg-gray-600 bg-opacity-50 p-5 mb-6"
            key={burger.id}
          >
            <div>{burger.title}</div>
            <br />
            <div>{burger.ingredients}</div>
            <br />
            <div>Prezzo: {burger.price}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
