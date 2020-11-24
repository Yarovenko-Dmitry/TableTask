import {ProcessType} from '../Components/Process';
import {Dispatch} from 'react';
import {v1} from 'uuid';


// const initialState: Array<ProcessType> = [];

const initialState: Array<ProcessType> = [
  {
    id: v1(), name: 'First',
    startTime: 1,
    jobsCount: 2
  },
  {
    id: v1(), name: 'Second',
    startTime: 3,
    jobsCount: 4
  },
  {
    id: v1(), name: 'Third',
    startTime: 5,
    jobsCount: 6
  }
]

const ONEprocessTEST: ProcessType = {
  id: '123',
  name: 'ONEprocessTEST',
  startTime: 111111111,
  jobsCount: 22222222
}

export const processReducer = (state: Array<ProcessType> = initialState , action: ActionsType): Array<ProcessType> => {
  switch (action.type) {
    case 'ADD-PROCESS':{
      // debugger
      return [{...action.process}, ...state]
    }

    case 'REMOVE-PROCESS':{ return state.filter(tl => tl.id != action.id)}

    default: {
      // debugger
      return state
    }

  }
}

export const addProcessAC = (process: ProcessType) => ({type: 'ADD-PROCESS', process} as const)
export const removeProcessAC = (id: string) => ({type: 'REMOVE-PROCESS', id} as const)

export const addProcessTC = (ONEprocessTEST: ProcessType) => {

  return (dispatch: ThunkDispatch) => {
// debugger
    dispatch(addProcessAC(ONEprocessTEST))
    localStorage.setItem('my-data', JSON.stringify(ONEprocessTEST))
  }
}

export type AddProcessActionType = ReturnType<typeof addProcessAC>;
export type RemoveProcessActionType = ReturnType<typeof removeProcessAC>;

type ActionsType =
  | AddProcessActionType
  | RemoveProcessActionType

type ThunkDispatch = Dispatch<ActionsType>

// localStorage.setItem('my-data', JSON.stringify(ONEprocessTEST))