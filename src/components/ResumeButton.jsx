import React from 'react'
import ResumePDF from '../assets/resume.pdf';
import Button from './Button/Button'

const ResumeButton = () => {
    const onResumeClick = () => {
        window.open(ResumePDF, '_blank', 'noopener,noreferrer')
    }

    return (
        <Button onClick={onResumeClick}>Resume</Button>
    )
}

export default ResumeButton
