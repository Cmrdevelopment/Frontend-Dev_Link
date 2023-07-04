import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

export const createRating = async (data) => {
  return API.post('/rating', data, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const updateRating = async (data, id) => {
  console.log('Front -> createRating -> data: ', data);
  return API.patch(`/rating/${id}`, data, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const getByReference = async (type, idUserWithRating) => {
  // console.log('Front -> createRating -> data: ', data)

  return API.get(`/rating/${type}/${idUserWithRating}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
