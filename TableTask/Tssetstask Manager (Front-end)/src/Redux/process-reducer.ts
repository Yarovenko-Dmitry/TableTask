import {Dispatch} from 'react';
import {AddJobActionType, getJobListTC, RemoveJobActionType, removeJobTC} from './jobs-reducer';
import {mainRequestProcesses} from '../api/api';

export type ProcessType = {
  _id: string
  name: string
  startTime: number
  jobsCount: number
}

const initialState: Array<ProcessType> = [];

export const processReducer = (state: Array<ProcessType> = initialState, action: ActionsType): Array<ProcessType> => {
  switch (action.type) {

    case 'SET-PROCESS': {
      return action.data;
    }
    case 'ADD-PROCESS': {
      return [action.newProcess, ...state];
    }
    case 'PROCESS/REMOVE-PROCESS': {
      // return state.filter(tl => tl._id !== action.id);
      return action.data;
    }
    default: {
      return state
    }
  }
}

export const setProcessListAC = (data: Array<ProcessType>) => ({type: 'SET-PROCESS', data} as const);
export const addProcessAC = (newProcess: ProcessType) => ({type: 'ADD-PROCESS', newProcess} as const);
export const removeProcessAC = (data: Array<ProcessType>) => ({type: 'PROCESS/REMOVE-PROCESS', data} as const);

export const getProcessTC = () => {
  return async (dispatch: any) => {
    const res = await mainRequestProcesses.getProcesses()
    dispatch(setProcessListAC(res.data.processList.reverse()))
    dispatch(getJobListTC())
    console.log('res.data.processList ', res.data.processList)
  }
}
export const addProcessTC = () => {
  // return (dispatch: ThunkAction<void, AppRootStateType, unknown, ActionsType>) => {
  return async (dispatch: any) => {

    const res = await mainRequestProcesses.addProcess();
    console.log('res.data.processList', res);
    dispatch(getProcessTC());
    // dispatch(addProcessAC(res.data.obj));
    // dispatch(getJobListTC())
  }
}

export const removeProcessTC = (id: string) => {
   return async (dispatch: any) => {
    const res = await mainRequestProcesses.removeProcess(id)
    console.log('res DELITE  ', res)
    // dispatch(removeProcessAC(res.data.processList));
    // debugger
    // dispatch(removeJobTC(id));
     dispatch(getProcessTC());
     dispatch(getJobListTC())
  }
}

export type SetProcessActionType = ReturnType<typeof setProcessListAC>;
export type AddProcessActionType = ReturnType<typeof addProcessAC>;
export type RemoveProcessActionType = ReturnType<typeof removeProcessAC>;

type ActionsType =
  | SetProcessActionType
  | AddProcessActionType
  | RemoveProcessActionType
  | AddJobActionType
  | RemoveJobActionType;

type ThunkDispatch = Dispatch<ActionsType>;

