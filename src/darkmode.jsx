import React, { useState } from 'react';


function Darkmode() {
    const [btntext, setBtntext] = useState("Enable Dark Mode");
    const textchange = ()=>{
        if (btntext ==="Enable Dark Mode") {
            setBtntext("Enable Light Mode");
        } else {    
            setBtntext("Enable Dark Mode");
        }
       
    }

  return (
    <div className='container m-4'>
      <button type="button" onClick={textchange} class="btn btn-success">{btntext}</button>

      
    </div>
  )
}

export default Darkmode



