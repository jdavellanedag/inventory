const Table = ({data, fields}) => {
    return (
        <div>
            <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase bg-black-soft text-white">
                    <tr>
                        {
                            fields.map( (field, i) => <th scope="col" className="px-6 py-3" key={i}>{field}</th> )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element) => <tr className="border-b" key={element.id}>
                            {Object.keys(element).map(
                                (attr, i) => <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap" key={i}>{element[attr]}</th>
                            )}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;