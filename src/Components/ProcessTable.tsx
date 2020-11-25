import {Space, Table} from 'antd';
import React, {useState} from 'react';
import {ProcessType} from './Process';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../app/store';
import {JobTable} from './JobTable';
import {removeJobTC} from '../Redux/jobs-reducer';
import {removeProcessTC} from '../Redux/process-reducer';

export const ProcessTable = () => {
  const dispatch = useDispatch()
  const processList = useSelector<AppRootStateType, Array<ProcessType>>((state) => state.process);
  console.log(processList);
  const [sortedInfo, setSortedInfo] = useState<any>('');

  const handleChange = (pagination: any, sorter: any) => {
    setSortedInfo(sorter);
  };

  const clearAll = () => {
    setSortedInfo('');
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'startTime',
    });
  };

  const onClickRemoveProcessBatton = () => {
    dispatch(removeJobTC('tastId'))
  }

  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: ProcessType, b: ProcessType) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        else if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0; },
      ellipsis: true,
    },
    {
      title: 'Start time',
      dataIndex: 'startTime',
      key: 'startTime',
      sorter: (a: ProcessType, b: ProcessType) => a.startTime - b.startTime,
      ellipsis: true,
    },
    {
      title: 'Jobs count',
      dataIndex: 'jobsCount',
      key: 'jobsCount',
      sorter: (a: ProcessType, b: ProcessType) => a.jobsCount - b.jobsCount,
      ellipsis: true,
    },
    {
      title: 'Remove process',
      dataIndex: 'removeProcess',
      key: 'removeProcess',

      render: (text: any, record: any ) => <button
        name={'removeProcess'}
        onClick={() => {
          removeProcessTC(record.id)
          console.log('recordKEY ', record.id)
        }}>Remove process</button>
    },
  ];
  const onChange = (sorter: any) => {
    console.log('params', sorter);
  }


  return (
    <div>
      <Space style={{marginBottom: 16}}>
      </Space>
      <Table dataSource={processList}
             columns={columns}
             onChange={onChange}
             rowKey={record => record.id}
             expandable={{
               expandedRowRender: record => <JobTable processId={record.id} jobsCountNumber={+record.jobsCount}/>,
               rowExpandable: record => record.name !== 'Not Expandable',
               expandRowByClick: false
             }}
             pagination={false}
      />
    </div>
  )
}
