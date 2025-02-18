"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MealsSearchInput = () => {
    // const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('')
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() =>{
        const searchQuery = {search}
        const urlQueryParam = new URLSearchParams(searchQuery)
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url);
    },[search])
    return (
        <div>
            <input className='border-2 text-white bg-black' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    );
};

export default MealsSearchInput;