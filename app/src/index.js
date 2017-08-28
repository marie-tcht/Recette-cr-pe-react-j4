/*
 * Npm Import
 */
import 'babel-polyfill';


/*
 * Local Import
 */
import hello, { sum, product } from 'src/hello';


/*
 * Code
 */
// console.log(sum(5, 16));
// console.info(product(8, 95));
// console.log(hello);

const label = 'student';
const user = {
  firstname: 'Marjo',
  spe: 'React',
  label,
};

// const firstname = user.firstname;
const { firstname, spe } = user;
console.log({ hello, sum, product, firstname, spe });
