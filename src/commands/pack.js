const command = {
  name: 'nw-cli',
  description: 'Day to day automation',
  run: async (toolbox) => {
    const { printCommands } = toolbox.print

    printCommands(toolbox)
  },
}

module.exports = command
