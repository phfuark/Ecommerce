export default function Table({vector}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    vector.map((obj, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{obj.name}</td>
                                <td>{obj.description}</td>
                                <td>{obj.date}</td>
                            </tr>
                        );
                    })
                }   
            </tbody>
        </table>
    )
}
