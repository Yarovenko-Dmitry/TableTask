import {Button, Space, Table} from 'antd';
import React, {useState} from 'react';
import {v1} from 'uuid';
import {ProcessType} from './Process';

const tableData: Array<ProcessType> = [
  {
    id: v1(),
    name: 'John Brown',
    startTime: 31,
    jobsCount: 111,
  },
  {
    id: v1(),
    name: 'Jim Green',
    startTime: 42,
    jobsCount: 222,
  },
  {
    id: v1(),
    name: 'Joe Black',
    startTime: 38,
    jobsCount: 888,
  },
  {
    id: v1(),
    name: 'Jim Red',
    startTime: 39,
    jobsCount: 999,
  },
];

type SortedInfoType = {
  order: string,
  columnKey: keyof ProcessType,
}

export const ProcessTable = () => {
  const [filteredInfo, setFilteredInfo] = useState<ProcessType | null>(null);
  const [sortedInfo, setSortedInfo] = useState<SortedInfoType | null>(null);


  const handleChange = (pagination: any, filters:  any, sorter: any) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);

  };

  const clearFilters = () => {
    setFilteredInfo(null);
  };

  const clearAll = () => {
    setFilteredInfo(null);
    setSortedInfo(null);
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'startTime',
    });

  };


  // sortedInfo = sortedInfo || {};
  // filteredInfo = filteredInfo || {};
  const columns: any= [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        {text: 'Joe', value: 'Joe'},
        {text: 'Jim', value: 'Jim'},
      ],
      // filteredValue: filteredInfo.name || null,
      filteredValue: filteredInfo?.name || null,
      onFilter: (value: any, record: any) => record.name.includes(value),
      sorter: (a: any, b: any) => a.name.length - b.name.length,
      sortOrder: sortedInfo?.columnKey === 'name' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Start time',
      dataIndex: 'startTime',
      key: 'startTime',
      sorter: (a: any, b: any) => a.age - b.age,
      sortOrder: sortedInfo?.columnKey === 'startTime' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Jobs count',
      dataIndex: 'jobsCount',
      key: 'jobsCount',
      filters: [
        {text: 'London', value: 'London'},
        {text: 'New York', value: 'New York'},
      ],
      filteredValue: filteredInfo?.jobsCount || null,
      onFilter: (value: any, record: any) => record.address.includes(value),
      sorter: (a: any, b: any) => a.address.length - b.address.length,
      sortOrder: sortedInfo?.columnKey === 'jobsCount' && sortedInfo.order,
      ellipsis: true,
    },
  ];
  return (
    <>
      <Space style={{marginBottom: 16}}>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={tableData} onChange={handleChange}/>
    </>
  )
}
