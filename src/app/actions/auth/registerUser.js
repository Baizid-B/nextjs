"use server";

import dbConncet from "@/lib/dbConncet";

export const registerUser = async (payload) =>{
    const result = await dbConncet("test_user").insertOne(payload);
}