<<<<<<< HEAD
import fetcher from '@/tools/fetcher'
import { Message } from 'element-ui'

export const getTopics = async (params) => {
  const res = await fetcher.get('topics', { params }).catch(err => {
    Message.error({
      showClose: true,
      message: err.error_msg
    })
  })
  return res.data
}

export const getTipic = async (id, params) => {
  const res = await fetcher.get(`topics/${id}`, { params }).catch(err => {
    Message.error({
      showClose: true,
      message: err.error_msg
    })
  })
  return res.data
}

export const getCollectTips = async (name, params) => {
  const res = await fetcher.get(`topic_collect/${name}`, { params }).catch(err => {
    Message.error({
      showClose: true,
      message: err.error_msg
    })
  })
  return res.data
}

export const getUser = async (loginname) => {
  const res = await fetcher.get(`user/${loginname}`).catch(err => {
    Message.error({
      showClose: true,
      message: err.error_msg
    })
  })
  return res.data
}

export const getMessageCount = async (params) => {
  const res = await fetcher.get('message/count', { params }).catch(err => {
    Message.error({
      showClose: true,
      message: err.error_msg
    })
  })
  return res.data
}

export const getMessages = async (params) => {
  const res = await fetcher.get('messages', { params }).catch(err => {
    Message.error({
      showClose: true,
      message: err.error_msg
    })
  })
  return res.data
=======
import { Message } from 'element-ui'
import * as moment from 'moment'

import fetcher from '@/tools/fetcher'

moment.locale()

export const getTopics = async (params = {}) => {
  try {
    const res = await fetcher.get('topics', { params })
    const data = res.data.data
    return data
  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response.data.error_msg
    })
  }
}

export const getTopic = async (id, params = {}) => {
  try {
    const res = await fetcher.get(`topic/${id}`, { params })
    return res.data.data
  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response ? error.response.data.error_msg : error.response
    })
  }
}

export const getCollectTips = async (name, params) => {
  try {
    const res = await fetcher.get(`topic_collect/${name}`, { params })
    return res.data.data
  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response.data.error_msg
    })
  }
}

export const getUser = async (loginname) => {
  try {
    const res = await fetcher.get(`user/${loginname}`)
    return res.data.data
  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response.data.error_msg
    })
  }
}

export const getMessageCount = async (params) => {
  try {
    const res = await fetcher.get('message/count', { params })
    return res.data.data
  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response.data.error_msg
    })
  }
}

export const getMessages = async (params) => {
  try {
    const res = await fetcher.get('messages', { params })
    return res.data.data
  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response.data.error_msg
    })
  }
>>>>>>> spa-dev
}

/* eslint-disable */
export const postTopic = async (sendData) => {
<<<<<<< HEAD
  const { topic_id } = sendData
  const url = topic_id ? 'topics/update' : 'topics'
  const tip = topic_id ? '更新成功' : '新增成功'
  const res = await fetcher.post(url, sendData).catch(err => {
    Message.error({
      showClose: true,
      message: err
    })
  })
  if (res.success) {
    Message.success({
      showClose: true,
      message: tip
    })
  } else {
    Message.error({
      showClose: true,
      message: res.error_msg
=======
  const {
    topic_id
  } = sendData
  const url = topic_id ? 'topics/update' : 'topics'
  const tip = topic_id ? '更新成功' : '新增成功'

  try {
    const res = await fetcher.post(url, sendData)
    if (res.data.success) {
      Message.success({
        showClose: true,
        message: tip
      })
    } else {
      Message.error({
        showClose: true,
        message: res.data.error_msg
      })
    }
    return res.data.success

  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response.data.error_msg
>>>>>>> spa-dev
    })
  }
}

/* eslint-enable */
<<<<<<< HEAD
export const postCollectTipic = async (sendData, hasCollect = true) => {
  const url = hasCollect ? 'topic_collect/collect' : 'topic_collect/de_collect'
  const tip = hasCollect ? '主题收藏成功!' : '主题取消收藏成功!'
  const res = await fetcher.post(url, sendData).catch(err => {
    Message.error({
      showClose: true,
      message: err.error_msg
    })
  })
  if (res.success) {
    Message.success({
      showClose: true,
      message: tip
    })
  } else {
    Message.error({
      showClose: true,
      message: res.error_msg
=======
export const postCollectTipic = async (sendData, toCollect = true) => {
  const url = toCollect ? 'topic_collect/collect' : 'topic_collect/de_collect'
  const tip = toCollect ? '主题收藏' : '主题取消收藏'
  try {
    const res = await fetcher.post(url, sendData)
    if (res.data.success) {
      Message.success({
        showClose: true,
        message: `${tip}成功！`
      })
    } else {
      Message.error({
        showClose: true,
        message: `${tip}失败！`
      })
    }
    return res.data.success
  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response.data.error_msg
>>>>>>> spa-dev
    })
  }
}

export const addReplies = async (topicId, sendData) => {
<<<<<<< HEAD
  const res = await fetcher.post(`topic/${topicId}/replies`, sendData).catch(err => {
    Message.error({
      showClose: true,
      message: err.error_msg
    })
  })
  if (res.success) {
    return res.reply_id
  } else {
    Message.error({
      showClose: true,
      message: res.error_msg
=======
  try {
    const res = await fetcher.post(`topic/${topicId}/replies`, sendData)
    if (res.data.success) {
      Message.success({
        showClose: true,
        message: '回复成功！'
      })
      return res.data.reply_id
    } else {
      Message.error({
        showClose: true,
        message: res.data.error_msg
      })
    }
    return res.data.success
  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response.data.error_msg
>>>>>>> spa-dev
    })
  }
}

<<<<<<< HEAD
export const replyUps = async (replyId, sendData) => {
  const res = await fetcher.post(`reply/${replyId}/ups`, sendData).catch(err => {
    Message.error({
      showClose: true,
      message: err.error_msg
    })
  })
  if (res.success) {
    return res.action
  } else {
    Message.error({
      showClose: true,
      message: res.error_msg
=======
export const replyUps = async (replyId, sendData = {}) => {
  try {
    const res = await fetcher.post(`reply/${replyId}/ups`, sendData)
    if (res.data.success) {
      return res.data
    } else {
      Message.error({
        showClose: true,
        message: res.data.error_msg
      })
    }
  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response.data.error_msg
>>>>>>> spa-dev
    })
  }
}

/* eslint-disable */
/**
 * 验证ak的正确性，返回相应的用户简略信息.
<<<<<<< HEAD
 * @param {Object{accesstoken: String}} sendData 
 */
export const authAK = async (sendData) => {
  const res = await fetcher.post('accesstoken', sendData).catch(err => {
    Message.error({
      showClose: true,
      message: err.error_msg
    })
  })
  if (res.success) {
    return res
  } else {
    Message.error({
      showClose: true,
      message: res.error_msg
=======
 * @param {Object{accesstoken: String}} sendData
 */
export const authAK = async (ak) => {
  try {
    const res = await fetcher.post('accesstoken', { accesstoken: ak })
    if (res.data.success) {
      return res
    } else {
      Message.error({
        showClose: true,
        message: res.data.error_msg
      })
      return false
    }
  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response.data.error_msg
>>>>>>> spa-dev
    })
  }
}

/* eslint-enable */
export const markMessage = async (sendData, msgId) => {
  const url = msgId ? `message/mark_one/${msgId}` : 'message/mark_all'
  const tip = msgId ? '已设置该条消息为已读' : '已设置全部消息为已读'
<<<<<<< HEAD
  const res = await fetcher.post(url, sendData).catch(err => {
    Message.error({
      showClose: true,
      message: err.error_msg
    })
  })
  if (res.success) {
    Message.success({
      showClose: true,
      message: tip
    })
  } else {
    Message.error({
      showClose: true,
      message: res.error_msg
    })
  }
  return res.success
=======
  try {
    const res = await fetcher.post(url, sendData)
    if (res.data.success) {
      Message.success({
        showClose: true,
        message: tip
      })
    } else {
      Message.error({
        showClose: true,
        message: res.data.error_msg
      })
    }
    return res.data.success
  } catch (error) {
    Message.error({
      showClose: true,
      message: error.response.data.error_msg
    })
  }
>>>>>>> spa-dev
}
