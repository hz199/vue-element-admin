import {
  Form,
  FormItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Message,
  MessageBox,
  Col,
  Row,
  Table,
  TableColumn,
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  BreadcrumbItem,
  Backtop,
  Icon,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Tag,
  Scrollbar,
  Pagination,
  Loading
} from 'element-ui'

const components = [
  Form,
  FormItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  [Message, '$message'],
  [MessageBox, '$msgbox'],
  Row,
  Col,
  Table,
  TableColumn,
  InputNumber,
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  BreadcrumbItem,
  Backtop,
  Icon,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Tag,
  Scrollbar,
  Pagination,
  [Loading.service, '$loading'],
]

const install = function install (Vue) {
  if (install.installed) return
  // loading自定义指令
  Vue.use(Loading.directive)

  components.forEach((component) => {
    if (component instanceof Array) {
      const [Comp, $compName] = component
      Vue.prototype[$compName] = Comp
      Vue.component(Comp.name, Comp)
    } else {
      Vue.component(component.name, component)
    }
  })
}

export default {
  install
}
