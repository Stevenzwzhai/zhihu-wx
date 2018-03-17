import wepy from 'wepy'
export default {
    //最新消息
    async getLatestMsg() {
        return new Promise((resolve, reject) => {
            wepy.request({
                url: 'http://news-at.zhihu.com/api/4/news/latest',
                success(res) {
                    resolve(res.data)
                }
            })
        })
    }
}
