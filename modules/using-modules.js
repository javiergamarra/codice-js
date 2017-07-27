import {foo} from './modules'
import { default as awesome } from './modules'
import awesome2 from './modules'
import {bar as other} from './modules'

foo();

console.log(awesome);
console.log(awesome2);

console.log(other);
