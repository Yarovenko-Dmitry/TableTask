import React from 'react';

export type JobType = {
  id: string
  processId: string
  name: string
  status: StatusType
}

export type StatusType = 'running' | 'successed' | 'failed'

export const Job = (props: JobType) => {

  return (
    <div>
      <div>{props.id}</div>
      <div> {props.processId}</div>
      <div>{props.name}</div>
      <div> {props.status}</div>
      {/*<button id={'id'} key={'key'} name={'123'} onClick={(e: any)=>{console.log('e.currentTarget ', e.currentTarget.id)}}>Show jobs</button>*/}
    </div>
  )
}