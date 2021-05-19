// import logo from './logo.svg';
import './groceries.css'
// import Header from './Components/Header';
// import Main from './Components/Main';
// import Basket from './Components/Basket';
import Grocery from './Groceries2'
import AddingGroceries from './Groceries2Adding';
import {useState} from 'react'

let groceries = [
  {
      item: 'dog food',
      units: 'lbs',
      quantity: 1,
      isPurchased: false    
  },{
      item: 'Busch Lite',
      units: '30pk',
      quantity: 3,
      isPurchased: false    
  },{
      item: 'Microwave dinner',
      units: '12pk',
      quantity: 2,
      isPurchased: false    
  }
]


function App() {
  const [currentList, setCurrentList] = useState(
    [
      {
          item: 'dog food',
          units: 'lbs',
          quantity: 1,
          isPurchased: false,
          id: 663    
      },{
          item: 'Busch Lite',
          units: '30pk',
          quantity: 3,
          isPurchased: false,
          id: 664    
      },{
          item: 'Microwave dinner',
          units: '12pk',
          quantity: 2,
          isPurchased: false,
          id: 665     
      }
    ]
  )

  const removeItem=(e)=>{ 
      let id=e.target.value
      setCurrentList(currentList.filter(el => el.id !=id))
    // prop.listToUpdate: grocery.filter(el => el !== item)
  }
  return (
    <div className="App">
      <Grocery removeItem={removeItem} currentList={currentList} setCurrentList={setCurrentList}/>
      <AddingGroceries currentList={currentList} setCurrentList={setCurrentList}/>
    </div>
  );
}

export default App;
