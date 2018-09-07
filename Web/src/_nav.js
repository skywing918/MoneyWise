export default {
    items: [
        {
            name: '首页',
            url: '/dashboard',
            icon: 'icon-speedometer'
        },
        {
            name: '交易记录',
            url: '/system',
            icon: 'icon-note'
            
        },
        {
            name: '投资一览',
            url: '/customers',
            icon: 'icon-list'
        },
        {
            name: '账户中心',
            url: '/charts',
            icon: 'icon-notebook'
        },
        {
            name: '报表统计',
            url: '/widgets',
            icon: 'icon-speedometer',
            children: [
                {
                    name: '日常支出表',
                    url: '/notifications/alerts',
                }
            ],
        },
        {
            name: '设置',
            url: '/settings',
            icon: 'icon-settings',
            children: [
                {
                    name: '分类管理',
                    url: '/notifications/alerts',
                }
            ],
        },
    ],
};
