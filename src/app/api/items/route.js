import dbConncet from "@/lib/dbConncet"
import { revalidatePath } from "next/cache"


export async function GET() {
    const data = await dbConncet("ALL_ITEMS").find({}).toArray()
  return Response.json(data)
}

export async function POST(req){
    const postData = await req.json()
    const result = await dbConncet("ALL_ITEMS").insertOne(postData)
    revalidatePath('/products')
    return Response.json({result})
}
