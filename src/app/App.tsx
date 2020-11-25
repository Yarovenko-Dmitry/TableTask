import React, {useState} from 'react';
import './App.css';
import {ProcessType} from '../Components/Process';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './store';
import {addProcessTC} from '../Redux/process-reducer';
import {ProcessTable} from '../Components/ProcessTable';
import {addJobTC} from '../Redux/jobs-reducer';

// + просмотр списка процессов
// - просмотр списка джоб каждого из процессов
// + создание нового процесса
// + сортировка процессов по всем полям
// - поиск джобы по имени
// - удаление процесса, включая все его джобы
// - сохранение и загрузка данных с сервака или localStorage

const App = () => {
  const dispatch = useDispatch();
  const processList = useSelector<AppRootStateType, Array<ProcessType>>((state) => state.process);
  console.log('processList ', processList)

  const [isShowingProcessList, setIsShowingProcessList] = useState<boolean>(false);
  const showProcessList = () => {
    setIsShowingProcessList(!isShowingProcessList)
  };

  const OnClickAddProcess = () => {
    dispatch(addProcessTC())
  };

  const onClickAddNewJob = () => {
    dispatch(addJobTC())
  };

  return (
    <div className="App">
      <input type={'button'}
             name={'showProcessList'}
             value={'Show process list'}
             onClick={showProcessList}/>
      {isShowingProcessList &&
      <div>
        <input type={'button'}
               name={'addProcess'}
               value={'Add process'}
               onClick={OnClickAddProcess}
        />
        <input type={'button'}
               name={'addNewJob'}
               value={'Add new job'}
               onClick={onClickAddNewJob}
        />
        <ProcessTable/>
      </div>
      }
    </div>
  );
}

export default App;
