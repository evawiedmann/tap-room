import React from 'react';

function NewKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brewery Name'/>
        <input
          type='text'
          id='price'
          placeholder='Price Per Keg'/>
        <input
          type='text'
          id='alcoholContent'
          placeholder='ABV'/>
        <button type='submit'>Save!</button>
      </form>
    </div>
  );
}

export default NewKegForm;
