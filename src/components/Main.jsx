import React, { useState } from "react";
import Header from "./../components/Header";
import Content from "./../components/Content";
import Footer from "./../components/Footer";

const Main = (prop) => {
  const [addList, setAddList] = useState("");

  const handleAddList = () => {
    if (addList.length > 0) {
      const addNewList = {
        id: prop.data.length + 1,
        content: addList,
      };
      console.log(addNewList);

      prop.setData((pre) => {
        const updatedList = [addNewList, ...pre];
        localStorage.setItem("todo_list", JSON.stringify(updatedList));
        return updatedList;
      });
      setAddList("");
    }
  };

  return (
    <div className="main">
      <Header
        setAddList={setAddList}
        handleAddList={handleAddList}
        addList={addList}
      />
      <Content data={prop.data} setData={prop.setData} />
      <Footer length={prop.data} />
    </div>
  );
};

export default Main;
