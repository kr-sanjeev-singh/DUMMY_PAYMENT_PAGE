import React from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <>
            <div className="flex justify-end gap-x-4">
                <button onClick={() => router.push("/tickets")} className="bg-[#a6a4a4] p-3 rounded-2xl">
                    Create ticket
                </button>
                <button onClick={() => router.push("/transactions")} className="bg-[#a6a4a4] p-3 rounded-2xl">
                    Transactions
                </button>
            </div>
            <div className="w-[300px] bg-blue-800 h-full rounded-2xl flex items-center justify-center mx-auto p-10">Home Page</div>
        </>
    );
}
