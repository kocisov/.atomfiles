const { exec } = require('child_process')

console.log('Saving packages to packages.txt')
exec('apm list --installed --bare > packages.txt', () => {
  console.log('Done')
})
