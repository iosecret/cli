const { join } = require('path');
const chalk = require('chalk');
const loadConfig = require('./config');

const errorEdit = (error) => {
  console.log(chalk.red(` >   ${error}`));
  process.exit();
};

// 项目模块配置
const getApp = (name, options) => {
  const config = loadConfig();

  // 配置文件返回 json
  if (typeof config === 'object') {
    return name ? config[name] || config : config;
  }

  // 配置文件抛出方法
  if (typeof config === 'function') {
    const configJson = config(options);
    return name ? configJson[name] || config : configJson;
  }

  return config;
};

// 获取应用信息
const getPackageInfo = () => {
  const packageInfo = require(join(process.cwd(), 'package.json'));
  return { name: packageInfo.name, version: packageInfo.version };
};

module.exports = {
  getApp,
  getPackageInfo,
  errorEdit
};
