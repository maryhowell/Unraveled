import { values } from 'lodash';

export const selectAllPatterns = ({ pattern }) => values(pattern.entities);
