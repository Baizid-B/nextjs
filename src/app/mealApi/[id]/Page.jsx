const fetchSingleMeals = async (id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal:", error);
        return [];
    }
};

const Page = async ({ params }) => {
    if (!params?.id) {
        return <div>Error: No meal ID provided</div>;
    }

    const singleMeal = await fetchSingleMeals(params.id);

    if (!singleMeal.length) {
        return <div>No meal found for ID: {params.id}</div>;
    }

    return (
        <div>
            <h1>{singleMeal[0]?.strMeal}</h1>
            <img src={singleMeal[0]?.strMealThumb} alt={singleMeal[0]?.strMeal} width={300} />
            <p>{singleMeal[0]?.strInstructions}</p>
        </div>
    );
};

export default Page;


// export async function generateMetadata({ params }) {
//     // read route params
//     const id = (await params).id
   
//     // fetch data
//     const singleMeal = await fetchSingleMeals(id)
   
//     return {
//         title: singleMeal.strMeal,
//         description: singleMeal.strInstructions,
//     };
// }


// const fetchSingleMeals = async (id) => {
//     try {
//         const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
//         console.log("Meal ID:", id);
//         const data = await res.json();
//         return data.meals || []; // যদি meals না থাকে, খালি অ্যারে রিটার্ন করো
//     } catch (error) {
//         console.error("Error fetching meal:", error);
//         return [];
//     }
// };

// export async function generateMetadata({ params }) {
//     const id = params.id;
//     const singleMeal = await fetchSingleMeals(id);
    
//     return {
//         title: singleMeal?.[0]?.strMeal || "Meal Not Found",
//         description: singleMeal?.[0]?.strInstructions || "No description available",
//     };
// }

// const Page = async ({ params }) => {
//     const singleMeal = await fetchSingleMeals(params?.id);

//     return (
//         <div>
//             {singleMeal.length > 0 ? (
//                 <p>{JSON.stringify(singleMeal[0], null, 2)}</p>
//             ) : (
//                 <p>No Data Found</p>
//             )}
//         </div>
//     );
// };

// export default Page;
