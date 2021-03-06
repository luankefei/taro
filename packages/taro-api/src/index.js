/* eslint-disable camelcase */
import './polyfill'
import { getEnv, ENV_TYPE } from './env'
import render from './render'
import Link from './interceptor'
import * as interceptors from './interceptor/interceptors'
import {
  noPromiseApis,
  onAndSyncApis,
  otherApis,
  initPxTransform
} from './native-apis'
import {
  Current,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
  useReachBottom,
  usePageScroll,
  useResize,
  useShareAppMessage,
  useTabItemTap,
  useTitleClick,
  useOptionMenuClick,
  usePullIntercept,
  useRouter,
  options,
  nextTick,
  eventCenter,
  Events
} from '@tarojs/runtime'

const Taro = {
  Events,
  eventCenter,
  getEnv,
  ENV_TYPE,
  render,
  noPromiseApis,
  onAndSyncApis,
  otherApis,
  initPxTransform,
  Link,
  interceptors,
  Current,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
  useReachBottom,
  usePageScroll,
  useResize,
  useShareAppMessage,
  useTabItemTap,
  useTitleClick,
  useOptionMenuClick,
  usePullIntercept,
  useRouter,
  options,
  nextTick
}

export default Taro
