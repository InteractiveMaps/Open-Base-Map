import styles from './MoonMapLegend.module.scss';
// import {Green} from "markers/green.png"

const MoonMapLegend = ({ ...rest }) => {
  return (
    <div className={styles.legendContainer}>
        <span className={styles.legendHeading}>Legend</span>
            <div className={styles.legendList}>
                <div className={styles.legendRow}><img src="/country/USA.png"></img><span className={styles.legends}>Succeeded</span></div>
                <div className={styles.legendRow}><img src="/country/USA_bw.png"></img><span className={styles.legends}>Failed</span></div>
            </div>
    </div>
  );
};

export default MoonMapLegend;