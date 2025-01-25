import Products from "@/Components/Products/page";

export default async function Home() {
  


  return (
      <>
        <h1 className="bg-slate-600 text-center container mx-auto py-4 my-4">
          Products Gallery
        </h1>
        <div className="relative grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
          <Products />
        </div>
      </>
  );
}
