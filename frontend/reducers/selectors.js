import { values } from 'lodash';

export const selectAllPatterns = ({ patterns }) => values(patterns);
export const selectFewPatterns = ({ patterns }) => values(patterns).reverse().slice(0, 4);

export const selectPattern = ({ patterns }, id) => {
  const pattern = patterns[id]
  return pattern;
}
