import React from 'react';

export type JobType = {
  id: string
  processId: string
  name: string
  status: 'running' | 'successed' | 'failed'

}

export const Job = (props: JobType) => {

  return (
    <div>
      <div>{props.id}</div>
      <div> {props.processId}</div>
      <div>{props.name}</div>
      <div> {props.status}</div>

    </div>
  )
}