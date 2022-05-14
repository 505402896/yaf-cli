import { existsSync } from 'fs'
import { getDirPath } from '../utils/common'

/**
 * @description 验证文件夹是否存在
 * @param {String} projectName 要创建的项目名
 */
export function isDirExist(projectName: string) {
  const path = getDirPath(projectName)
  if(existsSync(path)) {
    console.log('文件已存在')
  }
}