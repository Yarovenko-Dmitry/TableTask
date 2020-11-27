import {Dispatch} from 'react';
import {JobType, StatusType} from '../Components/Job';
import {mainRequestJobs} from '../api/api';

const initialState: Array<JobType> = [];
const jobStatus: Array<StatusType> = ['running', 'successed', 'failed'];

export const jobsReducer = (state: Array<JobType> = initialState, action: ActionsType): Array<JobType> => {
  switch (action.type) {
    case 'SET-JOB': {
      return action.jobList;
    }
    case 'REMOVE-JOB': {
      return action.jobList;
    }
    default: {
      return state;
    }
  }
}
export const setJobAC = (jobList: Array<JobType>) => ({type: 'SET-JOB', jobList} as const)
export const removeJobAC = (jobList: Array<JobType>) => ({type: 'REMOVE-JOB',  jobList} as const)

export const gerJobListTC = () => {
  return async (dispatch: ThunkDispatch) => {
    const res = await mainRequestJobs.getJobs()
    console.log(res.data.processList)
      // dispatch(setJobAC(jobList))
  }
}

export const removeJobTC = (processId: string) => {
  return async (dispatch: ThunkDispatch) => {
    const res = await mainRequestJobs.removeJobs(processId)
    console.log(res.data.processList)
    // dispatch(removeJobAC(jobList))
  }
}

export type AddJobActionType = ReturnType<typeof setJobAC>;
export type RemoveJobActionType = ReturnType<typeof removeJobAC>;

type ActionsType =
  | AddJobActionType
  | RemoveJobActionType

type ThunkDispatch = Dispatch<ActionsType>