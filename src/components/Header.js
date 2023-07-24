import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
const Header = ({ searchText }) => {
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
       
        searchText(text)
    }
    return (
        <div className='bg-orange-500 px-3 py-3  mb-2 flex text-2xl gap-5'
        ><strong className="text-bold text-white">Gwill Image Gallery </strong>
            <form onSubmit={onSubmit}>
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <BsSearch className='text-stone-400' />
                    </span>
                    <input onChange={(e) => setText(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search images..." type="text" name="search" />
                </label>
            </form>
        </div>
    )
}

export default Header 