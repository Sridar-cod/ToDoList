import React from "react";

const Header = (prop) => {
  return (
    <>
      <div className="header">
        <div className="header__title">
          <h1>TODO LIST</h1>
        </div>
        <div className="header__addTodo">
          <input
            type="text"
            placeholder="ADD TODO"
            onChange={(e) => prop.setAddList(e.target.value)}
            value={prop.addList}
          />
          <div className="header__addTodo__icon" onClick={prop.handleAddList}>
            <svg
              width={"20px"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
