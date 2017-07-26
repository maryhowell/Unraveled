
export const createItem = (cart_item) => {
  return $.ajax({
    method: 'POST',
    url: '/api/cart_items',
    data: { cart_item },
  });
};

export const updateItem = (cart_item) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/cart_items/${id}`,
    data: { cart_item },
  });
};

export const deleteItem = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/cart_items/${id}`
  });
};
