/**
 * 无需直接引用该文件,该文件中定义的设置可以均会复制到sino变量中,请通过引入sino变量后访问
 */

// process.config.SERVER_ENV 会根据不同的命令行参数取值
const defaultEnv = 'PRODUCT';
const env = (process.env.NODE_ENV || defaultEnv).toUpperCase();
console.log('当前环境', env);
const config = {
  // 生产环境配置
  PRODUCT: {
    ENV: 'PRODUCT',
    // SERVERPATH: 'http://20.40.104.73:8080/'
    SERVERPATH: 'http://localhost:8080' // 行内地址

    // SERVERPATH: '/'
  },
  // 预生产环境配置
  PRE: {
    ENV: 'PRE',
    SERVERPATH: ''
  },
  // UAT环境配置
  UAT: {
    ENV: 'UAT',
    SERVERPATH: ''
  },
  // UAT环境配置
  SIT: {
    ENV: 'SIT',
    SERVERPATH: ''
  },
  // 本机环境
  DEVELOPMENT: {
    ENV: 'DEV',
    mock: true,
    SERVERPATH: 'http://localhost:8080'
  }
};
const envConfig = config[env];

if (envConfig.SERVERPATH && envConfig.SERVERPATH.slice(-1) !== '/')envConfig.SERVERPATH += '/';

// 复制环境变量中的值
const sino = { ...envConfig };

sino.OS = {
  Android: 'Android',
  BlackBerry: 'BlackBerry',
  iOS: 'iOS',
  Windows: 'Windows',
  MacOS: 'MacOS',
  WindowsMobile: 'WindowsMobile',
  Other: 'Other',
  WebApp: 'WebApp',
  WeChat: 'WeChat',
  Browser: 'Browser'
};

// 获取当前系统版本
const OSChecker = {
  ...sino.OS,
  _Android: function () {
    return !!navigator.userAgent.match(/Android/i);
  },
  _BlackBerry: function () {
    return !!navigator.userAgent.match(/BlackBerry/i);
  },
  _iOS: function () {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  _Windows: function () {
    return !!navigator.userAgent.match(/Windows NT/i);
  },
  _MacOS: function () {
    return !!navigator.userAgent.match(/Macintosh/i);
  },
  _WindowsMobile: function () {
    return !!navigator.userAgent.match(/IEMobile/i);
  },
  is: function (name) {
    if (name) {
      return this['_' + name]();
    } else {
      return (this._Android() && this.Android) || (this._BlackBerry() && this.BlackBerry) || (this._iOS() && this.iOS) || (this._WindowsMobile() && this.WindowsMobile) || (this._Windows() && this.Windows) || (this._MacOS() && this.MacOS) || this.Other;
    }
  }
};

const ClientChecker = {
  ...sino.OS,
  _WebApp: function () {
    // 安卓APP 和 IOS APP中增加了自定义UA 用于识别当前的版本
    // 其中安卓UA为 SINO_ANDROID_APP/1.0 1.0为版本号
    // IOS UA为 SINO_IOS_APP/1.0
    let result = null;
    let match = navigator.userAgent.match(/SINO_([\w]+)_APP\/([\d.]+)/);
    if (match) {
      result = {};
      result.OS = match[1] === 'IOS' ? this.iOS : this.Android;
      result.type = this.WebApp;
      result.version = match[2];
    }

    return result;
  },

  _WeChat: function () {
    var result = null;
    var match = navigator.userAgent.match(/MicroMessenger\/([\w\d.]+)/);
    if (match) {
      result = {};
      result.OS = OSChecker.is();
      result.type = this.WeChat;
      result.version = match[1];
    }
    return result;
  },

  _Browser: function () {
    var result = {};
    result.OS = OSChecker.is();
    result.type = this.Browser;
    result.version = '0';
    return result;
  },

  info: function () {
    return this._WebApp() || this._WeChat() || this._Browser();
  }
}

/**
 * 包含三个属性
 * {
 *   OS: 系统版本
 *   type: 客户端类型包括 Browser WebApp WeChat
 *   version: 从UA字符串中取得的版本 如果type是Browser 则恒为0
 * }
 */
sino.client = ClientChecker.info();

/**
 * 判断当前环境是否是APP
 */
sino.isApp = function () {
  return sino.client.type === OSChecker.WebApp;
};
/**
 * 判断是否为微信环境
 */
sino.isWeChat = function () {
  return sino.client.type === OSChecker.WeChat;
};
/**
 * 判断当前是否为Android APP
 */
sino.isAndroidApp = function () {
  return sino.isApp() && sino.client.OS === OSChecker.Android;
};

/**
 * 判断当前是否为iOS APP
 */
sino.isIOSApp = function () {
  return sino.isApp() && sino.client.OS === OSChecker.iOS;
};

export default sino;
