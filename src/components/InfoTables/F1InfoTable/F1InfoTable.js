import styles from './F1InfoTable.module.scss';

const F1InfoTable = ({tableData, ...rest }) => {
    return(
        <>
                    <table className={styles.table} >
                        <thead>
                            <tr>
                                <th className={styles.tableHead}>Name</th>
                                <th className={styles.tableHead}>Circuit</th>
                                <th className={styles.tableHead}>Start Date</th>
                                <th className={styles.tableHead}>End Date</th>
                                {/* <th className={styles.tableHead}>Coordinates</th> */}
                            </tr>
                        </thead>
                        <tbody>
                        {tableData.map((table,index)=>{
                            return(
                            <tr key={table.name+index}>
                                <td className={styles.tableColumn}>{table.name}</td>
                                <td className={styles.tableColumn}>{table.circuit}</td>
                                <td className={styles.tableColumn}>{table.start_date}</td>
                                <td className={styles.tableColumn}>{table.end_date}</td>
                                {/* <td className={styles.tableColumn}>{table.coordinates[0].toFixed(2)}, {table.coordinates[1].toFixed(2)}</td> */}
                            </tr>
                        )
                        })}
                      
                        </tbody>
                </table>
                <br/>
               
        </>
    )
}

export default F1InfoTable;