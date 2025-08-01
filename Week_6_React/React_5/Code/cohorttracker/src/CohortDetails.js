import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
    const { cohortCode, technology, startDate, currentStatus, coachName, trainerName } = props.cohort;

    const statusClass = currentStatus === 'Ongoing' ? styles.ongoing : styles.completed; //based on status,style is applied

    return (
        <div className={styles.box}>
            <h3 className={statusClass}>
                {cohortCode} - <span>{technology}</span>
            </h3>
            <dl>
                <dt>Started On</dt>
                <dd>{startDate}</dd>
                <dt>Current Status</dt>
                <dd>{currentStatus}</dd>
                <dt>Coach</dt>
                <dd>{coachName}</dd>
                <dt>Trainer</dt>
                <dd>{trainerName}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;