export const dynamic = "force-dynamic"

// import { getProducts } from "../actions/products/getProducts";

const page = async () => {
    const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env;
    const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
    const data = await res.json();

    // const data = await getProducts()

    return (
        <ul className="text-center mt-8">
            {data?.map((d) =>{
                return <p key={d?._id}>{d?.productName}</p>
            })}
        </ul>
    );
};

export default page;