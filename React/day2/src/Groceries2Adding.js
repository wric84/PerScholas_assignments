import React, {useState} from 'react'
import Grocery, {groceries} from './Groceries2'

function AddingGroceries(props){
    const[grocery, setGrocery] = useState({item: '', quantity:'', units:'', isPurchased:false, id:0})
    const handleSubmit = (e) => {
        e.preventDefault();
        const listToUpdate = props.currentList.slice()
        listToUpdate.push(grocery)
        props.setCurrentList(listToUpdate)
        console.log(listToUpdate)
        setGrocery({item: '', quantity:'', units:'', isPurchased:false, id:grocery.id+1})
    }
    const handleChange = (e) =>{
        const{name,value} = e.target
        let newGrocery = {...grocery}
        newGrocery[name]=value//changing object
        setGrocery(newGrocery)//changing state to new object
    }
    
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                    Name:
                    <input name='item'
                        value={grocery.item}
                        type='text'
                        onChange={handleChange}
                        item='item'
                        />
                    <div className='divider'/>
                    Quantity:
                    <input name='quantity'
                        value={grocery.quantity} 
                        type="text"
                        onChange={handleChange}
                        amount=''
                    />
                    <div className='divider'/>
                    Units:
                    <input name='units'
                        value={grocery.units} 
                        type="text"
                        onChange={handleChange}
                        quantity='' 
                    />
                    </label>
                    <br></br>
                    {/* <input type="submit" value="+" /> */}
                    <input className='Purchase' type='submit' value="Buy It!"/>
                </form>
                
            </div>
        )
}
export default AddingGroceries

