import React, { useState } from "react";
import "../styles/header.css";
import { TbMoneybag } from "react-icons/tb";
import { AiFillSetting } from "react-icons/ai";
import UserProfile from "./UserProfile"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openOrder, setIsOpenOrder] = useState(0);

  const handleOpen = () => {
    if (openOrder === 0) {
      setIsOpen(true);
      setIsOpenOrder(1);
    } else if (openOrder === 1) {
      setIsOpen(false);
      setIsOpenOrder(0);
    }
  };

  return (
    <>
      <div className="navbar">
        <h1>
          FinanceMan
          <TbMoneybag className="logo-image" />
        </h1>
      </div>
      {isOpen && <UserProfile className="profile" />}
    </>
  );
};

export default Header;
