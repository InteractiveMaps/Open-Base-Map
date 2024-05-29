import styles from './HeightMapLegend.module.scss';
// import {Green} from "markers/green.png"

const HeightMapLegend = ({ ...rest }) => {
  return (
    <div className={styles.legendContainer}>
        <span className={styles.legendHeading}>Legend</span>
        <div>
            <ul className={styles.legendList}>
                <span className={styles.legends}><img src="/markers/green.png"></img>0-1000m</span>
                <span className={styles.legends}><img src="/markers/yellow.png"></img>1000-4000m </span>
                <span className={styles.legends}><img src="/markers/orange.png"></img>4000-8000m</span>
                <span className={styles.legends}><img src="/markers/red.png"></img>8000m+</span>
            </ul>
        </div>
    </div>
  );
};

export default HeightMapLegend;