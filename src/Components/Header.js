import React from 'react'
import AddTaskButton from './AddTaskButton'


function Header() {
    return (
        <div class="header">
    <span className="block-example border border-dark">
        <h1>Welcome to Your Task Tracker App</h1>
        <AddTaskButton></AddTaskButton>
        </span>
        </div>
    )
}

export default Header



