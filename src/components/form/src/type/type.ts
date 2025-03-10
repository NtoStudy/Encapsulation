import {RuleItem} from "@/components/form/src/type/rule";
import {CSSProperties} from 'vue'
import menu from "@/components/menu";

/**
 * 定义表单组件的配置选项
 * 这个接口用于描述表单中不同类型的组件及其相关配置
 */
export interface FormOptions {
  // 指定表单组件的类型，支持多种类型的表单控件
  type: 'cascader' | 'checkbox' | 'checkbox-group' | 'checkbox-button' |
    'color-picker' | 'date-picker' | 'input' | 'input-number' | 'radio' |
    'radio-group' | 'radio-button' | 'rate' | 'select' | 'option' | 'slider'
    | 'switch' | 'time-picker' | 'time-select' | 'transfer' | 'upload' | 'editor'
  // 组件的值，类型为任意，具体取决于组件类型
  value?: any,
  // 组件的标签，用于在表单中显示友好的名称，是可选的
  label?: string,
  // 组件的属性名，通常用于标识表单数据中的字段，是可选的
  prop?: string,
  // 组件的验证规则，类型为RuleItem，是可选的
  rules?: RuleItem[],
  // 组件的占位符，用于在输入框等控件中显示提示信息
  placeholder?: string,
  // 组件的其他属性，包括但不限于以下内容
  attrs?: {
    // 是否显示清除按钮，对于支持的组件类型是可选的
    clearable?: boolean,
    // 是否显示密码切换按钮，对于输入框类型是可选的
    showPassword?: boolean,
    // 是否禁用组件，对于所有组件类型是可选的
    disabled?: boolean,
    style?: CSSProperties,
  },
  children?: FormOptions[],
  uploadAttrs?: {
    action?: string,
    headers?: object,
    method?: string,
    multiple?: boolean,
    data?: object | Function,
    name?: string,
    withCredentials?: boolean,
    showFileList?: boolean,
    drag?: boolean,
    accept?: string,
    listType?: string,
    crossorigin?: 'anonymous' | 'use-credentials' | '',
    autoUpload?: boolean,
    disabled?: boolean,
    limit?: number
  }
}
