import { FunctionComponent } from "react";
import styles from "./ExpertiseItemContainers.module.css";

export type ExpertiseItemContainersType = {
  className?: string;
  hIITWorkouts?: string;
  highIntensityIntervalTrai?: string;
};

const ExpertiseItemContainers: FunctionComponent<
  ExpertiseItemContainersType
> = ({ className = "", hIITWorkouts, highIntensityIntervalTrai }) => {
  return (
    <div className={[styles.expertiseItemContainers, className].join(" ")}>
      <div className={styles.expertise02}>
        <div className={styles.expertiseItemTitles}>
          <img
            className={styles.thunderIcon}
            loading="lazy"
            alt=""
            src="/thunder.svg"
          />
        </div>
        <div className={styles.hiitWorkoutsHighIntensityContainer}>
          <span>
            <p className={styles.hiitWorkouts}>{hIITWorkouts}</p>
            <p className={styles.highIntensityIntervalTraini}>
              {highIntensityIntervalTrai}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseItemContainers;
