import React, {useState} from 'react';
import './App.css';
import {Process, ProcessType} from '../Components/Process';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './store';
import {addProcessTC} from '../Redux/process-reducer';
import {ProcessTable} from '../Components/ProcessTable';


// + просмотр списка процессов

// - просмотр списка джоб каждого из процессов
// перенес в компоненту Process
// const showProcessJobList = () => {}
// - создание нового процесса
const createNweProces = () => {

}
// - сортировка процессов по всем полям
const sortProcess = () => {

}
// - поиск джобы по имени
const searchJobByName = () => {

}
// - удаление процесса, включая все его джобы
const removeCompletelyProces = () => {

}


const App = () => {
  const dispatch = useDispatch()
  const processList = useSelector<AppRootStateType, Array<ProcessType>>((state) => state.process);
  console.log('processList ', processList)

  const [isShowingProcessList, setIsShowingProcessList] = useState<boolean>(false)
  const showProcessList = () => {
    setIsShowingProcessList(!isShowingProcessList)
  }

  const ONEprocessTEST: ProcessType = {
    id: '123',
    name: 'ONEprocessTEST',
    startTime: 111111111,
    jobsCount: 22222222
  }

  const OnClickAddProcess = () => {
    dispatch(addProcessTC(ONEprocessTEST))
  }


  return (
    <div className="App">
      <input type={'button'} name={'showProcessList'} value={'Show process list'} onClick={showProcessList}/>
      {isShowingProcessList && processList.map((process: ProcessType) => <Process id={process.id}
                                                                                  name={process.name}
                                                                                  startTime={process.startTime}
                                                                                  jobsCount={process.jobsCount}
        />
      )}


      <input type={'button'} name={'addProcess'} value={'Add process'} onClick={OnClickAddProcess}/>
      <ProcessTable/>
    </div>
  );
}

export default App;
