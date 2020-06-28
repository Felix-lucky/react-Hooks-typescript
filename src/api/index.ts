import request from './request';

export function getData(params: object) {
  return request.get('', params);
}

export function getCurrData(params: object) {
  return request.get('', params);
}