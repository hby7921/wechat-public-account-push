/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
    MAX_PUSH_ONE_MINUTE: 10,
 // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1998a67b7c3fc92f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8f799ebc3fbfb561bc86d1ec23cdb518',

  PROVINCE: '黑龙江',
  CITY: '哈尔滨',
SWITCH: {
   weather: true,
  earthyLoveWords: true,
  horoscope: true,
},
  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oOVD66bK9EJ9auilsecpUihaQ18U',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'GE4KyELsTnXWPmLq_oy01y2wVhQhvalX4oXSN56MIWw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-19',
        festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '亲亲宝贝', year: '2004', date: '07-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '亲亲老婆生日', year: '2004', date: '07-19',
        },
            {
      type: '节日', name: '亲亲老公生日', year: '2002', date: '01-04',
    }
      ],
      
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-05-14' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '1yfbkmAMm1MBr0-tIz2rDhnGDwH6oA7avZC41ERCBtc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oOVD66bK9EJ9auilsecpUihaQ18U',
    }
  ],

}

module.exports = USER_CONFIG
