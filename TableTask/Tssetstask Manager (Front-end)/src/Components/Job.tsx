import React from 'react';
import {JobType} from '../Redux/jobs-reducer';

export const Job = (props: JobType) => {

  return (
    <div>
      <div>{props._id}</div>
      <div> {props.processId}</div>
      <div>{props.name}</div>
      <div> {props.status}</div>
      {/*<button id={'id'} key={'key'} name={'123'} onClick={(e: any)=>{console.log('e.currentTarget ', e.currentTarget.id)}}>Show jobs</button>*/}
    </div>
  )
}