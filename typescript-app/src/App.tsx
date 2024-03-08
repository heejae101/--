import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from "./model/resturant"
import BestMenu from './BestMenu';

// arrow function
let data:Restaurant = {
  name : '식당',
  category:'western',
  address:{
    city:'incheoi',
    detail:'somewhere',
    zipCode:1231
  },
  menu:[{name:"rose pasta",price:2000,category:"PASTA"},{name:"dd",price:2500,category:"map"}]
}

const App:React.FC = () => {
  const [myRestaurant, setMyRestaurnt] = useState<Restaurant>(data)

  const changeAddress = (address:Address) => {
    setMyRestaurnt({...myRestaurant, address:address})
  }

  const showBestMenuName = (name:string) => {
    return name
  }

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}/>
      <BestMenu name="불고기 피자" category="피자" showBestMenuName={showBestMenuName}/>
    </div>
  );
}

export default App;
