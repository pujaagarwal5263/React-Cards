import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const TableApproval = () => {
    const [show,setShow]=useState(false);
    const eventHandler=()=> {
        setShow(true);
    }
    return(
        <div>
    {show? <input placeholder="Add description" /> : null }
    <button>Approve</button>
    <button onClick={eventHandler}> Reject</button>
    </div>
    );
}

export default TableApproval;