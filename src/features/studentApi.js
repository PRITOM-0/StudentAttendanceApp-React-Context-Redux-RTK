"use server";
import { revalidateTag } from "next/cache";

const URL = "http://localhost:3000/students";
export const getAllStudents = async () => {
    const res = await fetch(URL,{
        next: {tags: ["students"]}
    });
    const data = await res.json();
    return data;
};
export const addStudent = async (student) => {
    const res = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });
    revalidateTag("students"); // Invalidate cache after adding a student
};
export const deleteStudent = async (id) => {
    await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });
    revalidateTag("students"); // Invalidate cache after deleting a student
};

export const updateStudent = async ({id, student}) => {
    await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });
    revalidateTag("students"); // Invalidate cache after updating a student
};