import {ProcessType} from '../Components/Process';
import {Dispatch} from 'react';
import {v1} from 'uuid';
import {randomString} from '../util/randomString';
import {randomNumber} from '../util/randomNumber';
import {AddJobActionType, addJobTC, RemoveJobActionType, removeJobTC} from './jobs-reducer';


const initialState: Array<ProcessType> = [];

export const processReducer = (state: Array<ProcessType> = initialState, action: ActionsType): Array<ProcessType> => {
  switch (action.type) {
    case 'ADD-PROCESS': {

      return [action.newProcess, ...state]
    }
    case 'REMOVE-PROCESS': {
      let a = state.filter(tl => tl.id !== action.id)
      return a
    }
    default: {
      return state
    }
  }
}

export const addProcessAC = (newProcess: ProcessType) => ({type: 'ADD-PROCESS', newProcess} as const)
export const removeProcessAC = (id: string) => ({type: 'REMOVE-PROCESS', id} as const)

export const addProcessTC = () => {
  return (dispatch: any) => {
    const newProcess: ProcessType = {
      id: v1(),
      name: randomString(),
      startTime: randomNumber(20, 94),
      jobsCount: randomNumber(1, 10)
    }
    dispatch(addProcessAC(newProcess))
    dispatch(addJobTC(newProcess.id, newProcess.jobsCount))

  }
}
export const removeProcessTC = (id: string) => {
  return (dispatch: any) => {
    debugger
    dispatch(removeProcessAC(id))
    dispatch(removeJobTC(id))
  }
}

export type AddProcessActionType = ReturnType<typeof addProcessAC>;
export type RemoveProcessActionType = ReturnType<typeof removeProcessAC>;

type ActionsType =
  | AddProcessActionType
  | RemoveProcessActionType
  | AddJobActionType
| RemoveJobActionType

type ThunkDispatch = Dispatch<ActionsType>

// localStorage.setItem('my-data', JSON.stringify(ONEprocessTEST))