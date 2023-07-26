import React from 'react';
import "./TimeLine.scss";
import List from '../List/List';

const TimeLineData = [
    {
        title: 'Software Engineer, at Veritas Technologies.',
        description: ["Managed NetBackup code coverage/static analysis infra and pipeline.",
            "Built an IP management tool for infra provisioning pipeline.",
            "Built a multi-cloud cost analysis dashboard.",
            "Worked on optimizing the database of the cloud cost analysis portal, to reduce the response time."],
        date: 'Aug 2021 - Present',
    },
    {
        title: 'Software Development Intern, at Veritas Technologies.',
        description: ["Worked on Oracle to Postgres database migration project of an internal tool.",
            "Succesfully migrated the entire database and wrote an intermediate converter to convert oracle specific queries to postgres ones in the application code."],
        date: 'Jan 2021 - Jul 2021',
    },
    {
        title: 'App Development Intern, at Ardouro Technologies.',
        description: ["Contributed to variety of features, like client side video/image compression, client side cache, analytics etc.",
            "Worked on optimizing the application memory consumption."],
        date: 'May 2020 - Jul 2020',
    },
];


const TimeLineItem = ({ timeline }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <time><em>{timeline.date}</em></time>
                <div className='timeline-item-content-title'>{timeline.title}</div>
                <div className='timeline-item-content-description'><List items={timeline.description} /></div>
                <span className="timeline-circle" />
            </div>
        </div>
    )
}

const TimeLine = () => {
    if (TimeLineData.length > 0) {
        return (
            <div className='timeline'>
                <div className="timeline-container">
                    {TimeLineData.map((timeline, idx) => (
                        <TimeLineItem timeline={timeline} key={idx} />
                    ))}
                </div>
            </div>
        )
    }
}

export default TimeLine;
