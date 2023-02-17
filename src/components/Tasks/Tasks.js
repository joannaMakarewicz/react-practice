import React from 'react';
import Input from '../Input';
import List from '../List';
import './Tasks.scss';

const Tasks = () => {
  return (
    <section className='tasks'>
      <Input/>
      <List/>
    </section>
  )
}

export default Tasks;
