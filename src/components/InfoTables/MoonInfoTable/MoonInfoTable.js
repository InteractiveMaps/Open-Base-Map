import styles from './MoonInfoTable.module.scss';

const MoonInfoTable = ({tableData, ...rest }) => {
    return(
        <>
                    <table className={styles.table} >
                        <thead>
                            <tr>
                                <th className={styles.tableHead}>Name</th>
                                <th className={styles.tableHead}>Country</th>
                                <th className={styles.tableHead}>Mission Type</th>
                                <th className={styles.tableHead}>Status</th>
                                <th className={styles.tableHead}>Impact Date (DD/MM/YYYY)</th>
                            </tr>
                        </thead>
                        <tbody>
                        {tableData.map((table,index)=>{
                            return(
                            <tr key={table.name+index}>
                                <td className={styles.tableColumn}>{table.name}</td>
                                <td className={styles.tableColumn}>{table.country}</td>
                                <td className={styles.tableColumn}>{table.type}</td>
                                <td className={styles.tableColumn}>{table.status}</td>
                                <td className={styles.tableColumn}>{table.date}</td>
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

export default MoonInfoTable;