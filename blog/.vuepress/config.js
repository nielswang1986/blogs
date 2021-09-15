module.exports = {
    theme: "reco",
    title: "技为天",
    description: '坚持，让技术更简单.',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: "技为天",
            description: '坚持,让技术更简单.',
        },
    },
    themeConfig: {
        locales: {
            '/': {
                recoLocales: {
                    homeBlog: {
                        article: '美文', // 默认 文章
                        tag: '标识', // 默认 标签
                        category: '类别', // 默认 分类
                        friendLink: '友链' // 默认 友情链接
                    },
                    pagation: {
                        prev: '上一页',
                        next: '下一页',
                        go: '前往',
                        jump: '跳转至'
                    }
                }
            }
        },
        nav: [
            {text: '首页', link: '/', icon: 'reco-home'},
            {text: '时间线', link: '/timeline/', icon: 'reco-date'},
            {
                text: '联系我',
                icon: 'reco-message',
                items: [
                    {text: 'GitHub', link: 'https://github.com/niels1286', icon: 'reco-github'},
                    {text: 'CSDN', link: 'https://blog.csdn.net/weiyiq', icon: 'reco-csdn'},
                ]
            }
        ],
        type: 'blog',
        // 博客设置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认 “标签”
            }
        },
        logo: '/jian0.jpg',
        authorAvatar: '/jian0.jpg',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 30,
        // 自动形成侧边导航
        sidebar: 'auto',
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 作者
        author: 'Niels Wang',
        // 备案号
        record: '渝ICP备20006453号',
        recordLink: 'https://beian.miit.gov.cn/',
        cyberSecurityRecord: '渝公网安备 50010802003333号',
        cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50010802003333',
        // 项目开始时间
        startYear: '2020',
        /**
         * 密钥 (if your blog is private)
         */
        friendLink: [
            {
                title: '预言机科技',
                desc: '重庆区块链技术企业',
                email: 'hi@yuyanji360.com',
                link: 'https://yuyanji360.com'
            },
            {
                title: 'NULS BlockChain',
                desc: '全球化开源区块链项目',
                link: 'https://nuls.io'
            },
        ],
        // valineConfig: {
        //     appId: 'HAXCVjgfYyMe4UQPPIBaTVCg-gzGzoHsz',// your appId
        //     appKey: 'qWiKaMTe768UyeCXDk4HN75p', // your appKey
        // }
    }
}

