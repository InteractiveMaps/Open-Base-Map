import styles from './MountainInfoTable.module.scss';

const MountainInfoTable = ({tableData, ...rest }) => {
    return(
        <>
                    <table className={styles.table} >
                        <thead>
                            <tr>
                                <th className={styles.tableHead}>Name</th>
                                <th className={styles.tableHead}>Country</th>
                                <th className={styles.tableHead}>Height(m)</th>
                                <th className={styles.tableHead}>Height(ft)</th>
                                {/* <th className={styles.tableHead}>Coordinates</th> */}
                            </tr>
                        </thead>
                        <tbody>
                        {tableData.map((table,index)=>{
                            return(
                            <tr key={table.name+index}>
                                <td className={styles.tableColumn}>{table.name}</td>
                                <td className={styles.tableColumn}>{table.country}</td>
                                <td className={styles.tableColumn}>{table.height}</td>
                                <td className={styles.tableColumn}>{(table.height * 3.28084).toFixed(0)}</td>
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

export default MountainInfoTable;