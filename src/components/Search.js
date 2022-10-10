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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-19">
             <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
             <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clip-rule="evenodd" />
             </svg>
             
        </form> 
    </div>
      
  )
}

export default Search