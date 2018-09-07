export default {
    items: [
        {
            name: '概况',
            url: '/dashboard',
            icon: 'icon-speedometer'
        },
        {
            name: '财务记录',
            url: '/records',
            icon: 'icon-note'
            
        },
        {
            name: '投资一览',
            url: '/customers',
            icon: 'icon-list'
        },
        {
            name: '账户中心',
            url: '/accounts',
            icon: 'icon-wallet'
        },
        {
            title: true,
            name: '财务报表',
            wrapper: {
              element: '',
              attributes: {},
            },
            class: ''
        },
        {
            name: '日常收支类',
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
                    icon: 'icon-social-dropbox',
                }
            ],
        },
    ],
};
