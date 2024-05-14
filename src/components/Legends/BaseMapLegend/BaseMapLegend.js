import Container from '@components/Container';

import styles from './BaseMapLegend.module.scss';

const BaseMapLegend = ({ ...rest }) => {
  return (
    <div className={styles.legendContainer}>
        <span className={styles.legendHeading}>Legend</span>
        <div>
            <ul className={styles.legendList}>
                <span className={styles.legends}><b>*</b> Exact location and exact base name not known</span>
                <span className={styles.legends}><b>#</b> Exact location not known</span>
                <span className={styles.legends}><b>^</b> Not directly operated by the country</span>
                <span className={styles.legends}><b>!</b> Exact base name not known</span>
            </ul>
        </div>
    </div>
  );
};

export default BaseMapLegend;