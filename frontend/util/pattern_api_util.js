
export const fetchPatterns = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/patterns',
  });
};

export  const fetchOnePattern = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/pattern/${id}`
  });
};

export const fetchSearchedPatterns = searchWords => {
  return $.ajax({
    method: 'GET',
    url: `api/patterns?searchWords=${searchWords}`
  });
};
