import {randomNumber} from './randomNumber';
import {StatusType} from '../Components/Job';

const jobStatus: Array<StatusType> = ['running', 'successed', 'failed'];
export const randomJobStatus: StatusType = jobStatus[randomNumber(0,2)];

