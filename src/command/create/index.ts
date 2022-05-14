// import axios from 'axios'
import inquirer from 'inquirer'
import { templateList, featureList } from '../../constance'
import { isDirExist } from '../../utils/create'

export default async function create (projectName: string) :Promise<void> {
  // check directory is exist
  isDirExist(projectName)

  // fetch templates in github
  // const templates = await fetchTemplate()

  // select base template
  const template = await selectBaseTemplate()
  console.log(template)

  const features = await selectFeatures(template)
  console.log(features)
  
}

/**
 * @description 获取选择的框架模板类型
 * @returns {String} template name
 */
async function selectBaseTemplate() :Promise<string> {
  const { template } = await inquirer.prompt({
    name: 'template', // 获取选择后的结果
    type: 'list', 
    message: 'please choise a template to create project',
    choices: templateList
  })
  return template
}

/**
 * @description 获取选择的功能模块
 * @returns {Array} features
 */
async function selectFeatures(baseTemplate: string): Promise<Array<string>> {
  const { features } = await inquirer.prompt({
    name: 'features',
    type: 'checkbox', 
    message: 'please choise some features in your project',
    choices: featureList[baseTemplate]
  })
  return features
}

/**
 * @description 获取github中的所有模板
 * @returns templates array
 */
// async function fetchTemplate() {
//   const ora = require('ora')
//   const spinner = ora('fetch template list ...')
//   spinner.start()
//   try {
//     const { data } = await axios.get(reposUrl)
//     const templateNames = data.map((v) => v.name)
//     spinner.succeed()
//   } catch (error) {
//     console.log(error)
//   }
// }
