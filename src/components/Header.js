import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
const Header = ({ searchText }) => {
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
       console.log('submit');
        searchText(text)
    }
    return (
        <div className='fixed top-0 w-full bg-teal-900 px-3 py-3  flex text-2xl gap-5 m'
        ><strong className="text-bold text-zinc-300">Gwill Image Gallery </strong>
            <form onSubmit={onSubmit} className='flex gap-2 items-center'>
                <label className="relative block">
                 
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <BsSearch className='text-stone-400' />
                    </span>
                    <input onChange={(e) => setText(e.target.value)} className="placeholder:italic h-10 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search images..." type="text" name="search" />
                </label>
                
                <button className='px-3 py-2 cursor:pointer   rounded text-white text-base bg-orange-500 inline-block '>Search</button>
            </form>
        </div>
    )
}

export default Header 