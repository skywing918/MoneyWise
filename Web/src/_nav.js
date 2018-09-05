export default {
  items: [
    {
      name: '首页',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: '系统管理',
      url: '/system',
      icon: 'icon-settings',
      children: [
        {
          name: '账号管理',
          url: '/system/users',
        },
        {
          name: '角色管理',
          url: '/system/roles',
        },
        {
          name: '菜单管理',
          url: '/base/carousels',
        }
      ],
    },
    {
      name: '用户管理',
      url: '/customers',
      icon: 'icon-people',
      children: [
        {
          name: '用户管理',
          url: '/customers/customers',
        }
      ],
    },
    {
      name: '终端管理',
      url: '/charts',
      icon: 'icon-screen-smartphone',
      children: [
            {
              name: '终端管理',
                url: '/buttons/buttons',
            }
      ],
    },
    {
      name: '被监护人',
      url: '/icons',
      icon: 'icon-options',
      children: [
        {
          name: '被监护人管理',
          url: '/icons/coreui-icons'
        }
      ],
    },
    {
      name: '上报数据',
      url: '/notifications',
      icon: 'icon-cloud-upload',
      children: [
        {
          name: '管理数据',
          url: '/notifications/alerts',
        }
      ],
    },
    {
      name: '报警管理',
      url: '/widgets',
      icon: 'icon-info',
      children: [
            {
                name: '报警记录',
                url: '/notifications/alerts',
            }
      ],
    },
    {
          name: '内容管理',
          url: '/widgets',
          icon: 'icon-social-dropbox',
          children: [
              {
                  name: '常见问题',
                  url: '/notifications/alerts',
              },
              {
                  name: '关于我们',
                  url: '/notifications/alerts',
              }
          ],
      },
      {
          name: '下载管理',
          url: '/widgets',
          icon: 'icon-cloud-download',
          children: [
              {
                  name: '下载记录',
                  url: '/notifications/alerts',
              }
          ],
      },
      {
          name: '版本管理',
          url: '/widgets',
          icon: 'icon-layers',
          children: [
              {
                  name: '版本记录',
                  url: '/notifications/alerts',
              }
          ],
      },
      {
          name: '系统日志',
          url: '/logs',
          icon: 'icon-note',
          children: [
              {
                  name: '操作日志',
                  url: '/system/logs',
              }
          ],
      },
      {
          name: '报表统计',
          url: '/widgets',
          icon: 'icon-speedometer',
          children: [
              {
                  name: '用户行为统计',
                  url: '/notifications/alerts',
              },
              {
                  name: '用户APP留存率统计',
                  url: '/notifications/alerts',
              },
              {
                  name: '报警信息统计',
                  url: '/notifications/alerts',
              },
              {
                  name: '定位模式使用统计',
                  url: '/notifications/alerts',
              },
              {
                  name: '用户登录常用时段统计',
                  url: '/notifications/alerts',
              },
              {
                  name: '被监护人年龄段统计',
                  url: '/notifications/alerts',
              },
              {
                  name: '终端绑定率统计',
                  url: '/notifications/alerts',
              },
              {
                  name: '终端绑定新增数统计',
                  url: '/notifications/alerts',
              }
          ],
      },
  ],
};
