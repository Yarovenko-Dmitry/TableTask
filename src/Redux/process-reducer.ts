import {ProcessType} from '../Components/Process';
import {Dispatch} from 'react';
import {v1} from 'uuid';
import {randomString} from '../util/randomString';
import {randomNumber} from '../util/randomNumber';


const initialState: Array<ProcessType> = [];

export const processReducer = (state: Array<ProcessType> = initialState, action: ActionsType): Array<ProcessType> => {
  switch (action.type) {
    case 'ADD-PROCESS': {
      const newProcess: ProcessType = {
        id: v1(),
        name: randomString(),
        startTime: randomNumber(20, 94),
        jobsCount: randomNumber(1, 10)
      }
      return [newProcess, ...state]
    }
    case 'REMOVE-PROCESS': {
      return state.filter(tl => tl.id != action.id)
    }
    default: {
      return state
    }
  }
}

export const addProcessAC = () => ({type: 'ADD-PROCESS'} as const)
export const removeProcessAC = (id: string) => ({type: 'REMOVE-PROCESS', id} as const)

export const addProcessTC = () => {
  return (dispatch: ThunkDispatch) => {
    dispatch(addProcessAC())
  }
}
export const removeProcessTC = (id: string) => {
  return (dispatch: ThunkDispatch) => {
    dispatch(removeProcessAC(id))
  }
}

export type AddProcessActionType = ReturnType<typeof addProcessAC>;
export type RemoveProcessActionType = ReturnType<typeof removeProcessAC>;

type ActionsType =
  | AddProcessActionType
  | RemoveProcessActionType

type ThunkDispatch = Dispatch<ActionsType>

// localStorage.setItem('my-data', JSON.stringify(ONEprocessTEST))