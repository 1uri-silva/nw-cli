module.exports = (toolbox) => {
  const {
    template,
    print: { success, error },
  } = toolbox

  async function createComponent(folder, name) {
    if (!name) {
      error('Name must be specified')
      return
    }

    await template.generate({
      template: 'components.ts.ejs',
      target: `${folder}/${name}/index.tsx`,
      props: { name },
    })

    success(`Generated ${folder}/${name}.`)
  }
  toolbox.createComponent = createComponent
}
