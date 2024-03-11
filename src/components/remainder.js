import React, { useState } from 'react'
import './remainder.css'
function Remainder() {
  

   const [remainder, setRemainder] = useState([])
   const [newRemainder,setNewRemainder]=useState('')

    const handleInputChange=(event)=>{
        setNewRemainder(event.target.value)

    }

    const handleAddInput=()=>{
        if(newRemainder.trim()){
            setRemainder([...remainder,newRemainder])
            setNewRemainder('')
        }
    }

    const handleDeleteRemainder=(index)=>{
      const deleteRemainder=[...remainder];
      deleteRemainder.splice(index);
      setRemainder(deleteRemainder)
        
     }
  return (
    <div className='container'>
       <h1>Remainder App</h1>
        <div className='input-container'>
          <input type='text' value={newRemainder} placeholder='enter a reminder' onChange={handleInputChange}/>

          <button className='add-button' onClick={handleAddInput}>ADD REMAINDER</button>             

        </div>
        {
            remainder.length>0?
                             
                 <ul className='remainder-list'> 
                 {
                   remainder.map((remainder,index)=>{
                     return(
                       <li key={index}>
                         {remainder}
                         <button className="delete-button" onClick={()=>{alert('are you want to delete the remainder?');handleDeleteRemainder(index); alert('remainder deleted succesfully!') }}>DELETE</button>
                       </li>
                     );
                   })
                 }
             </ul>  : 
             <p>no remainder found</p>
        }

       
        
    </div>
  )
}

export default Remainder;