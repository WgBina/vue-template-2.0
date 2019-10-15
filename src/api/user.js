import request from '@/utils/request'

// 仅仅是一个例子
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
