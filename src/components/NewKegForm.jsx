import React from 'react';

function NewKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='day'
          placeholder='Day of the Week'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <input
          type='text'
          id='hours'
          placeholder='Hours'/>
        <input
          type='text'
          id='booth'
          placeholder='Booth'/>
        <button type='submit'>Save!</button>
      </form>
    </div>
  );
}

export default NewKegForm;
