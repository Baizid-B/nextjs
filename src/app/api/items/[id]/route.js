import dbConncet from "@/lib/dbConncet";
import { ObjectId } from "mongodb";

// single data fetching 
export async function GET(req, {params}) {
    const p = await params;
    const singleData = await dbConncet("ALL_ITEMS").findOne({_id: new ObjectId(p.id)})
    
    return Response.json(singleData)
}

// single data delete
export async function DELETE(req, {params}) {
    const p = await params;
    const respones = await dbConncet("ALL_ITEMS").deleteOne({_id: new ObjectId(p.id)})
    return Response.json(respones)
}

// single data update
export async function PATCH(req, {params}) {
    const p = await params;
    const postedData = await req.json()
    const filter = { _id: new ObjectId(p.id)}
    const updatedResponse = await dbConncet("ALL_ITEMS").updateOne(filter, {$set:{...postedData}}, {upsert: true})
    return Response.json(updatedResponse)
}