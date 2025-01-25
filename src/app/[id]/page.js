

import PageDetails from '@/Components/PageDetails.js/Page';

async function ProductDetails({params}) {
    const{id}=params


    
      
          const data = await fetch(`https://fakestoreapi.com/products/${id}`, {
            next: { revalidate: 10 },
          });
          const products = await data.json();
         
        
    
     

  return (
    
    <>
    <h1 className="bg-slate-600 text-center container mx-auto py-4 my-4">
      Products Details
    </h1>
    <div className="grid grid-cols-1  gap-4 container mx-auto">
    <div key={products.id} className="p-4 border rounded shadow-md hover:cursor-pointer container bg-slate-200">
               <img
                  src={products.image}
                  className="w-52 h-40 object-cover m-2 mx-auto block"
                />
            
                <h3 className="text-lg font-bold">{products.title}</h3>
                <p className={`text-sm  `}>{products.description}</p>
               
                <p className="font-semibold">${products.price}</p>
                
               
              </div>
    </div>
  </>
  );
}

export default ProductDetails;
