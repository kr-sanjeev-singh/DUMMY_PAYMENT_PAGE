import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const uuid = require("uuid");
const Tickets = ({ allTickets }) => {
    const [tickets, setTickets] = useState(allTickets);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        reset();
        let details = {
            id: uuid.v4(),
            ...data,
        };
        const response = await fetch("http://localhost:3000/tickets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
        });
        const result = await response.json();
        const tickets = await fetch("http://localhost:3000/tickets");
        const allTickets = await tickets.json();
        setTickets(allTickets);
    };

    return (
        <div className="flex">
            <div className="w-[300px] flex flex-col max-h-auto">
                <h1 className="text-[30px]">Created Tickets</h1>
                {tickets.map((key, index) => (
                    <div className="flex flex-col mt-5 p-5 bg-green-500" key={index}>
                        <span>Name:- {key.name}</span>
                        <span>Quantity:- {key.quantity}</span>
                        <span>Price:- {key.price}</span>
                    </div>
                ))}
                <div className="bg-black text-white p-3 rounded-sm mt-5 cursor-pointer" onClick={() => router.push("/shopping")}>
                    Visit Shopping Page
                </div>
            </div>
            <div className="p-10">
                <h1 className="text-[30px]">Create Tickets</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <label>Name</label>
                        <input {...register("name", { required: "Name is required!" })} className="bg-[#807f7f] p-3 rounded-sm" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col">
                        <label>Quantity</label>
                        <input {...register("quantity", { required: "Quantity is required!" })} className="bg-[#807f7f] p-3 rounded-sm" placeholder="Enter your quantity" />
                    </div>
                    <div className="flex flex-col">
                        <label>Price</label>
                        <input {...register("price", { required: "Price is required!" })} className="bg-[#807f7f] p-3 rounded-sm" placeholder="Enter your price" />
                    </div>
                    <input type="submit" className="bg-black text-white p-3 mt-3 rounded" />
                </form>
            </div>
        </div>
    );
};

export const getServerSideProps = async () => {
    const tickets = await fetch("http://localhost:3000/tickets");
    const allTickets = await tickets.json();
    return { props: { allTickets } };
};

export default Tickets;
