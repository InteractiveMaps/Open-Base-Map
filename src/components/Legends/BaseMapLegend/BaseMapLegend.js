import styles from './BaseMapLegend.module.scss';

const BaseMapLegend = ({ ...rest }) => {
  return (
    <div className={styles.legendContainer}>
        <span className={styles.legendHeading}>Legend</span>
        <div>
            <ul className={styles.legendList}>
                <span className={styles.legends}><b>*</b> Exact location and Base name not known</span>
                <span className={styles.legends}><b>#</b> Exact location not known</span>
                <span className={styles.legends}><b>^</b> Not directly operated</span>
                <span className={styles.legends}><b>!</b> Base name not known</span>
            </ul>
        </div>
    </div>
  );
};

export default BaseMapLegend;