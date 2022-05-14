import { program } from 'commander'
import create from './command/create/index'

// ts-cli -v、ts-cli --version
// 临时禁用规则，保证这里可以通过 require 方法获取 package.json 中的版本号
/* eslint-disable @typescript-eslint/no-var-requires */
program
  .version(`${require('../package.json').version}`, '-v --version')
  .usage('<command> [options]')

// ts-cli create newPro
program
  .command('create <app-name>')
  .alias('c')
  .description('create new yaf project')
  .action(async (projectName: string) => {
    // TODO: 改成name: string 后报错
    await create(projectName)
  })

// program.on('--help', () => {})
// 解析用户传的参数
program.parse(process.argv)


