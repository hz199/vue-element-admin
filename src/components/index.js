import Tables from './Tables'

const components = [
  Tables
]

const install = function install (Vue) {
  if (install.installed) return

  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
