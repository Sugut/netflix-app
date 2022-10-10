import React from 'react'

function Search({search, handleChange, handleSubmit}) {

  return (
    <div className='py-3 px-4 border-b flex justify-end'>
        <form className='form flex justify-end ' onSubmit={handleSubmit}>
          <input className="px-3 py-2 font-semibold placeholder-gray-500
           text-black rounded-2xl border-none ring-2 ring-gray-300
           focus:ring-gray-500 focus:ring-3 h-10"
            type="text"
            value={search}
            placeholder="Searching... "
            onChange={handleChange}
          />
        </form> 
    </div>
      
  )
}

export default Search