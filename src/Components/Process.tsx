import React, {useState} from 'react';
import {addJobTC} from '../Redux/jobs-reducer';
import {Job, JobType} from './Job';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../app/store';

export type ProcessType = {
  id: string
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
    // dispatch(addJobTC())
  }
  return (
    <div>
      <div>{props.id}</div>
      <div>{props.name}</div>
      <div> {props.startTime}</div>
      <div> {props.jobsCount}</div>

      <input type={'button'} name={'showJobsList'} value={'Show jobs list'} onClick={showJobsList}/>
      <input type={'button'} name={'addJob'} value={'Add new job'} onClick={onClickAddNewJob}/>
      {isShowingJobsList && jobsList.map((job: JobType) => <Job id={job.id}
                                                                processId={job.processId}
                                                                name={job.name}
                                                                status={job.status}
        />
      )}
    </div>
  )
}