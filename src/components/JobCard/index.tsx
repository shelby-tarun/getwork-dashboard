import React from "react";
import cx from "classnames";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import styles from "./JobCard.module.scss";
import { IJobCard } from "../../constants";

const JobCard: React.FC<IJobCard> = (props) => {
  const {
    Icon,
    role,
    company,
    location,
    position,
    compensation,
    growth,
    action,
    duration,
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <Icon />
        <div className={styles.container__header__names}>
          <div className={styles.container__header__role}>
            <h3>{role}</h3>
            <ChevronRightIcon />
          </div>
          <div className={styles.container__header__company}>
            <span className={styles.container__header__cname}>{company}</span>
            <br />
            <span className={styles.container__header__location}>
              {location}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.container__body}>
        <div className={styles.container__body__info}>
          <span>{position}</span>&nbsp;&middot;&nbsp;
          <span className={styles.orange}>{compensation}</span>
          &nbsp;&middot;&nbsp;
          <span>{growth}</span>
        </div>
        <button className={styles.container__body__options}>
          &middot;&middot;&middot;
        </button>
      </div>
      <div className={styles.container__footer}>
        <p>
          <span className={styles.orange}>{action}</span>
          &nbsp;&middot;&nbsp;
          <span className={styles.container__header__location}>{duration}</span>
        </p>
      </div>
    </div>
  );
};

export default JobCard;
