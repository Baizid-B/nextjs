"use client"

import { useRouter } from "next/navigation";

const ProductsAdd = () => {
    const router = useRouter();

    // const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env;
    const NEXT_PUBLIC_SERVER_ADDRESS = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    console.log(NEXT_PUBLIC_SERVER_ADDRESS);

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const form = e.target;
        const productName = form.productName.value;
        const payload = {productName};
        const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, { 
             method: "POST",
             body:JSON.stringify(payload),
             headers:{
                "Content-type": "application/json"
             },
            });
            const result = await res.json();
            console.log(result)
            form.reset()
            // alert("product added")
            router.push("/products")
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border-2" type="text" name="productName" placeholder="Product Name" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default ProductsAdd;