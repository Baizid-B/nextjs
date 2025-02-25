

const fetchSingleMeals = async (id) => {
    console.log(id);
    
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal:", error);
        return [];
    }
};

export async function generateMetadata({ params }) {
    // read route params
    const id = (await params).id
   
    // fetch data
    const [singleMeal] = await fetchSingleMeals(id)
    console.log(singleMeal);
    
   
    return {
      title: singleMeal.strMeal,
      description: singleMeal.strInstructions,
    }
}

const page = async ({ params }) => {
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

export default page;
