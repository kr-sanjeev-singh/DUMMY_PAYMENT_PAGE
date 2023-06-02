import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const Shopping = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        router.push("/allTickets");
    };
    return (
        <div className="flex items-center justify-center">
            <div className="p-10">
                <h1 className="text-[30px]">Landing Page</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <label>First Name</label>
                        <input {...register("firstName", { required: "First Name is required!" })} className="bg-[#807f7f] p-3 rounded-sm" placeholder="Enter your first name" />
                    </div>
                    <div className="flex flex-col">
                        <label>Last Name</label>
                        <input {...register("lastName", { required: "Last Name is required!" })} className="bg-[#807f7f] p-3 rounded-sm" placeholder="Enter your last name" />
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input {...register("email", { required: "EMail is required!" })} className="bg-[#807f7f] p-3 rounded-sm" placeholder="Enter your email" />
                    </div>
                    <input type="submit" value="Buy Now" className="bg-black text-white p-3 mt-3 rounded" />
                </form>
            </div>
        </div>
    );
};

export default Shopping;
