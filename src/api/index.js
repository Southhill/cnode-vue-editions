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
}

/* eslint-disable */
export const postTopic = async (sendData) => {
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
    })
  }
}

/* eslint-enable */
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
    })
  }
}

export const addReplies = async (topicId, sendData) => {
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
    })
  }
}

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
    })
  }
}

/* eslint-disable */
/**
 * 验证ak的正确性，返回相应的用户简略信息.
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
    })
  }
}

/* eslint-enable */
export const markMessage = async (sendData, msgId) => {
  const url = msgId ? `message/mark_one/${msgId}` : 'message/mark_all'
  const tip = msgId ? '已设置该条消息为已读' : '已设置全部消息为已读'
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
}
