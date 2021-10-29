const { red } = require('chalk');
const { join } = require('path');
const { existsSync } = require('fs');

// 文件 key
const key = 'iosecret';
// 文件命名规则
const pattens = [`.${key}`, `.${key}rc`, `.${key}.js`, `${key}.js`, `.${key}rc.js`, `${key}.config.js`, `${key}rc.config.js`];

/**
 * 获取配置文件
 *
 * @returns object
 */
const loadConfig = () => {
  let configPath;

  // 检索匹配到的文件
  for (const file of pattens) {
    const temp = join(process.cwd(), file);
    if (existsSync(temp)) {
      configPath = temp;
      break;
    }
  }

  if (!configPath) {
    console.info(red(`\n> 缺少【${key}】配置文件\n`));
    process.exit(-1);
  }

  return require(configPath);
};

module.exports = loadConfig;
