const AllTickets = ({ allTickets }) => {
    return (
        <div className="flex flex-col justify-center items-center cursor-pointer">
            <h1 className="text-[30px]">All Tickets</h1>
            {allTickets.map((key) => {
                return (
                    <div className="w-[500px] text-white rounded-sm flex flex-col mt-5 bg-green-700" key={key.id}>
                        <span>{key.name}</span>
                        <span>{key.quantity}</span>
                    </div>
                );
            })}
        </div>
    );
};

export const getServerSideProps = async () => {
    const tickets = await fetch("http://localhost:3000/tickets");
    const allTickets = await tickets.json();
    return { props: { allTickets } };
};

export default AllTickets;
