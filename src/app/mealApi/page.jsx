import Link from "next/link";
import MealsSearchInput from "./components/MealsSearchInput";

export const metadata = {
    title: "All Meals search",
    description: "Meals loaded from MealsDB Api",
};

const page = async ({searchParams}) => {
    // const meals = []
    const query = await searchParams;
    const fetchMeals = async () =>{
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            // setMeals(data?.meals || [])
            return data.meals;
        } catch (error){
            console.log(error)
            return [];
        }
    };

    const meals = await fetchMeals()

    return <div>
        <div className='flex justify-center'>
            <MealsSearchInput></MealsSearchInput>
        </div>
        <div className='grid grid-cols-4 text-center gap-5'>
            {meals?.map((d) => (
                <div key={d?.idMeal}>
                    <p className='text-2xl'>{d?.strMeal}</p>
                    <p>{d?.strInstructions}</p>
                    <Link href={`/mealApi/${d.idMeal}`}> <button className="px-2 text-white bg-black">Details</button></Link>
                </div>
            )) || <p className="text-center text-gray-500">No Data Available</p>}
        </div>

    </div>;
};

export default page;


// "use client"

// import MealsSearchInput from "./components/MealsSearchInput";
// import useSWR from 'swr';
// import { useSearchParams } from 'next/navigation';


// const fetcher = async (url) => {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error("ডাটা লোড করতে সমস্যা হচ্ছে...");
//     const data = await res.json();
//     return data.meals;
// };


// const Page = () => {
//     const searchParams = useSearchParams();
//     const searchQuery = searchParams.get("search") || "";

//     const { data: meals, error, isValidating  } = useSWR(
//         searchQuery ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}` : null, 
//         fetcher
//     );

//     return (
//         <div>
//             <div className='flex justify-center'>
//                 <MealsSearchInput />
//             </div>

//             {isValidating  && <p className="text-center text-lg text-gray-500">লোডিং...</p>}
//             {error && <p className="text-center text-red-500">ডাটা লোড করতে সমস্যা হচ্ছে...</p>}
//             {!isValidating && !error && (!meals || meals.length === 0) && (
//                 <p className="text-center text-gray-500">কোনো তথ্য পাওয়া যায়নি</p>
//             )}
//             <div className='grid grid-cols-4 text-center gap-5'>
//                 {meals?.map((d) => (
//                     <div key={d?.idMeal} className="border p-4 rounded shadow">
//                         <p className='text-2xl font-bold'>{d?.strMeal}</p>
//                         <p className="text-sm text-gray-600">{d?.strInstructions.slice(0, 100)}...</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Page;
