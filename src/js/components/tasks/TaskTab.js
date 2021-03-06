import React from 'react'
import Tasks from './Tasks';
import Comments from './comments/Comments'

// internal components
import Tab from '../shared/tab';

const TaskTab = (props) => {
  const panes = [
    {name: 'My Task', content: Tasks },
    {name: 'All Tasks', content: Tasks },
  ]

  return <Tab panes={panes} {...props} />

}

export default TaskTab;
