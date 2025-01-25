"use client"

import Link from 'next/link'
import Loading from '../Loading/Page'
import React, { useEffect, useState } from 'react'

 function Products() 
{
    const [showFullDoc, setShowFullDoc] = useState(false)
    const [products, setProducts] = useState([])
const [search, setSearch] = useState('')
    useEffect(() => {
        const fetchData = async () => {
          const data = await fetch("https://fakestoreapi.com/products", {
            next: { revalidate: 10 },
          });
          const products = await data.json();
          setProducts(products);
        };
    
        fetchData();
      }, [])
  return (
    <>
    <div className='w-full  mb-4'>
    <input type='text' placeholder='search' className='w-full p-3  rounded-lg bg-yellow-200
    border border-solid'
    onChange={(e)=>setSearch(e.target.value)}
     />
    </div>
    {console.log(search)}
    {
    products.length==0?<Loading/>:
    products.filter(ele=>
      search.toLowerCase()===''?products:
      ele.title.toLowerCase().includes(search)
      ).map ((ele) => (
        
        <div key={ele.id} className="p-4 border rounded shadow-md hover:cursor-pointer container relative bg-slate-200">
                <Link href={`/${ele.id}`}>
                <img
                  src={ele.image}
                  className="w-full h-40 object-cover m-2"
                />
                </Link>
                <h3 className="text-lg font-bold">{ele.title}</h3>
                <p className={`text-sm  ${!showFullDoc?"line-clamp":""} `}>{ele.description}</p>
                <p className="font-semibold mb-10">${ele.price}</p>
                <button className=' absolute bottom-2
                bg-blue-500 text-white py-1 px-2  rounded hover:bg-blue-400  hover:outline-none '
                onClick={() => setShowFullDoc(!showFullDoc)}
                >{showFullDoc ? 'Show Less' : 'See More'}
                </button>
                
                
               
              </div>))
          
          }
    
    
    
    
    
    
    
    
    </>
  )
}

export default Products