import {Dispatch} from 'react';
import {v1} from 'uuid';
import {JobType, StatusType} from '../Components/Job';
import {randomString} from '../util/randomString';
import {randomNumber} from '../util/randomNumber';


const initialState: Array<JobType> = [];

// const initialState: Array<JobType> = [
//   {
//     id: v1(),
//     processId: "processId1" + v1(),
//     name: 'string1',
//     status: 'running'
//
//   },
//   {
//     id: v1(),
//     processId: "processId2" + v1(),
//     name: 'string2',
//     status: 'successed'
//
//   }
//   ,
//   {
//     id: v1(),
//     processId: "processId3" + v1(),
//     name: 'string3',
//     status: 'failed'
//
//   }
// ];
const jobStatus: Array<StatusType> = ['running', 'successed', 'failed'];

export const jobsReducer = (state: Array<JobType> = initialState, action: ActionsType): Array<JobType> => {
  switch (action.type) {
    case 'ADD-JOB': {
      return [action.newJob, ...state]
    }

    case 'REMOVE-JOB': {
      return state.filter(tl => tl.id != action.processId)
    }
    default: {
      // debugger
      return state
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