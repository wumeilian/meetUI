import { version } from '../../package.json';
import foo from './foo';

export default () => {
    console.log(foo);
    console.log(version);
}