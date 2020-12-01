import React, {useState} from 'react';
import {Job} from './Job';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../app/store';
import {ProcessType} from '../Redux/process-reducer';
import {JobType} from '../Redux/jobs-reducer';

export const Process = (props: ProcessType) => {
  const dispatch = useDispatch()
  const jobsList = useSelector<AppRootStateType, Array<JobType>>((state) => state.jobs);
  const [isShowingJobsList, setIsShowingJobsList] = useState<boolean>(false)
  const showJobsList = () => {
    setIsShowingJobsList(!isShowingJobsList)
  }

  const onClickAddNewJob = () => {
    // dispatch(getJobListTC())
  }
  return (
    <div>
      <div>{props._id}</div>
      <div>{props.name}</div>
      <div> {props.startTime}</div>
      <div> {props.jobsCount}</div>

      <input type={'button'} name={'showJobsList'} value={'Show jobs list'} onClick={showJobsList}/>
      <input type={'button'} name={'addJob'} value={'Add new job'} onClick={onClickAddNewJob}/>
      {isShowingJobsList && jobsList.map((job: JobType) => <Job _id={job._id}
                                                                processId={job.processId}
                                                                name={job.name}
                                                                status={job.status}
        />
      )}
    </div>
  )
}