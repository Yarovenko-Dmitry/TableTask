import {Dispatch} from 'react';
import {v1} from 'uuid';
import {JobType} from '../Components/Job';


// const initialState: Array<ProcessType> = [];

const initialState: Array<JobType> = [
  {
    id: v1(),
    processId: "processId1" + v1(),
    name: 'string1',
    status: 'running'

  },
  {
    id: v1(),
    processId: "processId2" + v1(),
    name: 'string2',
    status: 'successed'

  }
  ,
  {
    id: v1(),
    processId: "processId3" + v1(),
    name: 'string3',
    status: 'failed'

  }
];

export const jobsReducer = (state: Array<JobType> = initialState , action: ActionsType): Array<JobType> => {
  switch (action.type) {
    case 'ADD-JOB':{
      debugger
      return [{...action.job}, ...state]
    }

    // case 'REMOVE-JOB':{ return state.filter(tl => tl.id != action.id)}

    default: {
      // debugger
      return state
    }
  }
}

export const addJobAC = (job: JobType) => ({type: 'ADD-JOB', job} as const)
export const removeJobAC = (id: string) => ({type: 'REMOVE-JOB', id} as const)

export const addJobTC = (ONEjobTEST: JobType) => {

  return (dispatch: ThunkDispatch) => {
debugger
    dispatch(addJobAC(ONEjobTEST))

  }
}

export type AddJobActionType = ReturnType<typeof addJobAC>;
export type RemoveJobActionType = ReturnType<typeof removeJobAC>;

type ActionsType =
  | AddJobActionType
  | RemoveJobActionType

type ThunkDispatch = Dispatch<ActionsType>