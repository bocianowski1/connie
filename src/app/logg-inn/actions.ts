"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (as: "bedrift" | "student") => {
    cookies().set("user", as, {maxAge: 60 * 60 * 24 * 7 * 4 * 12 * 10});
    return redirect(`/${as}/utforsk`);
}

export const logout = async () => {
    cookies().delete("user");
    return redirect("/");
}