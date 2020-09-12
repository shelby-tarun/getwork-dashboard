import React, { useState } from "react";
import cx from "classnames";
import { jobCards } from "../../constants";
import styles from "./Jobs.module.scss";
import JobCard from "../../components/JobCard";

interface IPropsJobs {}

const tabs: string[] = ["Invitation", "Open"];

const Jobs: React.FC<IPropsJobs> = () => {
  const [activeTab, setActiveTab] = useState<string>("Open");

  const renderJobs = (): JSX.Element[] => {
    return jobCards.map((card, index) => <JobCard key={index} {...card} />);
  };

  const renderTabs = (): JSX.Element[] => {
    return tabs.map((tab: string) => (
      <div
        className={cx(styles.container__tab, {
          [styles.container__activeTab]: tab === activeTab,
        })}
        key={tab}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </div>
    ));
  };

  return (
    <div className={cx(styles.container, "container")}>
      <nav className={styles.container__nav}>{renderTabs()}</nav>
      <div className={styles.container__jobs}>
        {jobCards.length ? renderJobs() : <p>No Jobs found!</p>}
      </div>
    </div>
  );
};

export default Jobs;
