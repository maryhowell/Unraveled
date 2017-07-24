import { values } from 'lodash';

export const selectAllPatterns = ({ pattern }) => values(pattern);
export const selectFewPatterns = ({ patterns }) => values(patterns).reverse().slice(0, 4);
