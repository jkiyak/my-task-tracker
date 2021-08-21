import React from 'react'
import { Button } from '@material-ui/core'

export default function AddTaskButton() {
    return (


        <div class = "header">
<Button variant="contained" 
onClick={() => 
alert('What task would you like to add?')}>Add Task</Button> 
        </div>
    )

}
