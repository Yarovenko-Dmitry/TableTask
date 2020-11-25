import {Dispatch} from 'react';
import {v1} from 'uuid';
import {JobType, StatusType} from '../Components/Job';
import {randomString} from '../util/randomString';
import {randomNumber} from '../util/randomNumber';

const initialState: Array<JobType> = [];
const jobStatus: Array<StatusType> = ['running', 'successed', 'failed'];

export const jobsReducer = (state: Array<JobType> = initialState, action: ActionsType): Array<JobType> => {
  switch (action.type) {
    case 'ADD-JOB': {
      const resultState = [action.newJob, ...state];
      return resultState;
    }
    case 'REMOVE-JOB': {
      debugger
      const resultState = state.filter(tl => tl.processId !== action.processId);
      return resultState;
    }
    default: {
      return state;
    }
  }
}
export const addJobAC = (newJob: JobType) => ({type: 'ADD-JOB', newJob} as const)
export const removeJobAC = (processId: string) => ({type: 'REMOVE-JOB', processId} as const)

export const addJobTC = (processId: string, newProcessJobsCount: number) => {
  return (dispatch: ThunkDispatch) => {
    for (let i = 0; i < newProcessJobsCount; i++) {
      const newJob: JobType = {
        id: v1(),
        processId: processId,
        name: randomString(),
        status: jobStatus[randomNumber(0, 2)],
      }
      dispatch(addJobAC(newJob))
    }
  }
}

export const removeJobTC = (processId: string) => {
  return (dispatch: ThunkDispatch) => {
    dispatch(removeJobAC(processId))
  }
}

export type AddJobActionType = ReturnType<typeof addJobAC>;
export type RemoveJobActionType = ReturnType<typeof removeJobAC>;

type ActionsType =
  | AddJobActionType
  | RemoveJobActionType

type ThunkDispatch = Dispatch<ActionsType>