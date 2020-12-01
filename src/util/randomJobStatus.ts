import {randomNumber} from './randomNumber';
import {StatusType} from '../Redux/jobs-reducer';


const jobStatus: Array<StatusType> = ['running', 'successed', 'failed'];
export const randomJobStatus: StatusType = jobStatus[randomNumber(0,2)];

