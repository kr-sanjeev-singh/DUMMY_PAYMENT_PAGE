const Transaction = ({ allTransactions }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-[30px]">Transactions</h1>
            {allTransactions.map((key) => (
                <div className="w-[500px] text-white rounded-sm flex gap-x-5 p-3 mt-5 bg-green-700" key={key.id}>
                    <span>{key.paymentId}</span>
                    <span>{key.name}</span>
                    <span>{key.amount}</span>
                </div>
            ))}
        </div>
    );
};

export const getServerSideProps = async () => {
    const transactions = await fetch("http://localhost:3000/transactions");
    const allTransactions = await transactions.json();
    return { props: { allTransactions } };
};

export default Transaction;
