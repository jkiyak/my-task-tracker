import React from 'react'
import { Button } from '@material-ui/core'

export default function AddTaskButton() {
    return (
        <div class = "header">
<Button variant="contained" onClick={() => alert('hello, this button is doing something :)')}>Add Task</Button> 
        </div>
    )

}
