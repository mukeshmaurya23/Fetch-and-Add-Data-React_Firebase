import React, { useState, useEffect } from "react";
import IngredientsForm from "./IngredientsForm";
import IngredientsList from "./IngredientsList";
import Search from "./Search";

const Ingredients = () => {
  const [addItem, setAddItem] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://react-http-b0a44-default-rtdb.firebaseio.com/ingredients.json"
  //   )
  //     .then((res) => {
  //       res.json();
  //     })
  //     .then((resdata) => {
  //       const loadedItem = [];
  //       for (const key in resdata) {
  //         loadedItem.push({
  //           id: key,
  //           title: resdata[key].title,
  //           amount: resdata[key].amount,
  //         });
  //       }
  //       setAddItem(loadedItem);
  //     });
  // }, []);

  useEffect(() => {
    fetch(
      "https://react-http-b0a44-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((res) => res.json())
      .then((redData) => {
        const loadItem = [];
        for (const key in redData) {
          loadItem.push({
            id: key,
            title: redData[key].title,
            amount: redData[key].amount,
          });
        }
        setAddItem(loadItem);
      });
  }, []);

  //to fetch data from firebase defined get method and make empty array and then push the data
  //and with the help of state updating function store the value
  const addItemHandler = async (ingredients) => {
    const response = await fetch(
      "https://react-http-b0a44-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredients),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = response.json();
    const resdata = setAddItem((prevState) => [
      ...prevState,
      { id: Math.random().toString(), ...ingredients },
    ]);

    //using async and awit it take a promise so ti handle promise pending error
    //use .then
    resdata.then(function (result) {
      console.log(result);
    });
    console.log(data);
    // .then((res) => {
    //   res.json();
    // })
    // .then((resdata) => {
    //   setAddItem((prevState) => [
    //     ...prevState,
    //     { id: Math.random().toString(), ...ingredients },
    //   ]);
    // });
  };

  const removeItem = (igid) => {
    console.log(igid);
    setAddItem((prevState) => prevState.filter((item) => item.id !== igid));
  };

  return (
    <div>
      <IngredientsForm add={addItemHandler} />

      <section>
        <Search />
      </section>
      <section>
        <IngredientsList ingredient={addItem} removeTerm={removeItem} />
      </section>
    </div>
  );
};

export default Ingredients;
