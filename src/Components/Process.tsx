import React, {useState} from 'react';
import {getJobListTC} from '../Redux/jobs-reducer';
import {Job, JobType} from './Job';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../app/store';

export type ProcessType = {
  _id: string
  name: string
  startTime: number
  jobsCount: number
}

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