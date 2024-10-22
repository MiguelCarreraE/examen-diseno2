import { useState } from 'react'
import { Menu } from './Components/Menu'
import { Order } from './Components/Order'
import { Payment } from './Components/Payment'


const App = () => {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = item => {
      setOrderItems([...orderItems, item]);
  };

  const clearOrder = () => {
      setOrderItems([]);
  };

  return (
      <div>
        <Menu addToOrder={addToOrder} />
        <Order orderItems={orderItems} />
        <Payment orderItems={orderItems} clearOrder={clearOrder} /> 
      </div>
  );
};

export default App
