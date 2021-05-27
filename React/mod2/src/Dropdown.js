import React, {useState, useEffect, useRef} from 'react'

const Dropdown = ({label, options, selected, onSelectedChange}) =>{
    //manage dropdown visibility
    const [open, setOpen] = useState(false)
    //setting reference variable in case anything outside is clicked
    const ref=useRef()

    //on initial render, add click event listener
    useEffect(()=> {
        const onBodyClick = event =>{
            if(ref.current && ref.current.contains(event.target)){
                return
            }
            //otherwise close the dropdown
            setOpen(false)
        }
        //Adding event listener
        document.body.addEventListener("click", onBodyClick)

        //Cleaning it up, remove event Listener
        return () =>{
            document.body.removeEventListener('click', onBodyClick)
        }
    },[])
    const renderedOptions = options.map(option =>{
        //if current selection is same as what we already have then do nothing
        if(option.value === selected.value){
            return null
        }
        return(
            <div 
                key={option.value} 
                className='item'
                data-value={option.label}
                onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })
    return (
        <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          // on click set value of open to opposite of current value
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div
            // on click set value of open to opposite of current value
            onClick={() => setOpen(!open)}
            className={`menu ${open ? "visible transition" : ""}`}
          >
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
      )
}

export default Dropdown