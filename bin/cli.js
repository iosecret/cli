#!/usr/bin/env node

const program = require('commander');
const { version } = require('../package.json');

const iosecretDev = require('../scripts/dev');
const iosecretProd = require('../scripts/prod');
const iosecretUmd = require('../scripts/umd');
const iosecretCreate = require('../scripts/create');
const iosecretRule = require('../scripts/rule');

const { textToLolcat } = require('../lib/utils/tool');

// 开发环境构建
iosecretDev(program);

// 生产环境构建
iosecretProd(program);

// 公共包制作
iosecretUmd(program);

// 初始化工程
iosecretCreate(program);

// 规则生成器
iosecretRule(program);

program
  .version(textToLolcat(`iosecret ${version}`))
  .usage(
    `
    ${textToLolcat(`iosecret ${version}`)}`
  )
  .description(
    `Params:
  dev:
    -i 是否打印详细信息
  
  prod: 
    -i 是否打印详细信息
    -a <analyzerPort> 是否开启代码依赖分析（默认端口8989）

  umd:
    -i 是否打印详细信息
    
  rule:
    -o <output> 生成目录
    `
  );

program.parse(process.argv);
