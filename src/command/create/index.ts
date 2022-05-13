import axios from 'axios'
import inquirer from 'inquirer'

const fetchRepos = async () => {
  const { data } = await axios.get('https://api.github.com/orgs/zhu-cli/repos')
  return data
}

export default async function create (projectName: string) :Promise<void> {
  // const ora = require('ora')
  // const spinner = ora('fetch template list ...')
  // spinner.start()
  try {
    const res = await fetchRepos()
    const templateNames = res.map((v) => v.name)
    // spinner.succeed()
    const { repo } = await inquirer.prompt({
      name: 'repo', // 获取选择后的结果
      type: 'list', 
      message: 'please choise a template to create yaf project',
      choices: templateNames
    })
    console.log(repo)
    console.log(projectName)
    
  } catch (error) {
    console.log(error)
  }
}
