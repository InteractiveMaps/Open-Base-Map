import styles from './InfoTable.module.scss';

const InfoTable = ({country, tableData, ...rest }) => {
    return(
        <>
            <div className={styles.country}>
                <h3>{country}</h3>
                <img src={"/country/"+country+".png"} />
            </div>
            
                    <table className={styles.table} >
                        <thead>
                            <tr>
                                <th className={styles.tableHead}>Base Name</th>
                                <th className={styles.tableHead}>Location</th>
                                <th className={styles.tableHead}>Coordinates</th>
                            </tr>
                        </thead>
                        <tbody>
                        {tableData.map((table)=>{
                            return(
                            <tr key={table.baseName}>
                                <td className={styles.tableColumn}>{table.baseName}</td>
                                <td className={styles.tableColumn}>{table.location}</td>
                                <td className={styles.tableColumn}>{table.coordinates[0].toFixed(2)}, {table.coordinates[1].toFixed(2)}</td>
                            </tr>
                        )
                        })}
                      
                        </tbody>
                </table>
                <br/>
               
        </>
    )
}

export default InfoTable;