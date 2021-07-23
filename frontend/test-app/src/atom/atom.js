import { atom } from 'recoil'

const token = !!localStorage.getItem('Token')
  ? localStorage.getItem('Token')
  : ''

export const tokenState = atom({
  key: 'tokenState',
  default: token,
})
