import { resolve } from 'path'

/**
 * @description 获取文件路径
 * @param {String} dirname 文件名
 * @returns {String} 该文件的路径
 */
export function getDirPath(dirname: string): string {
  return resolve(process.cwd(), dirname)
}