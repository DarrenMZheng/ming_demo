import React, {useState} from "react";
import MenuList from './menuList.tsx';
import './index.sass'

const menuList = [
  {
    "iconType": 'icon-home2',
    "linkUrl": '/'
  },
  {
    "iconType": 'icon-bubble',
    "linkUrl": '/prospects/view'
  },
  {
    "iconType": 'icon-user-tie',
    "linkUrl": '/userTie'
  },
  {
    "iconType": 'icon-clipboard',
    "linkUrl": '/clipboard'
  }
]

interface menuObj {
  "iconType": string;
  "linkUrl": string;
}[]

const MenuComponent = () => {
  return (
    <MenuList menuObj={menuList}></MenuList>
  );
};

export default MenuComponent;
