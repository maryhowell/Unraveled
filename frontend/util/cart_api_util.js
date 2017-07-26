export const getCart = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/cart/${id}`
  });
};

export const submitCart = (id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/cart/${id}`
  });
};

export const getPrevCarts = () => {
  return $.ajax({
    method: 'GET',
    url: `api/cart`
  });
};
