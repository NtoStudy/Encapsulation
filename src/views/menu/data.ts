import {MenuItem} from "@/components/menu/src/type";

const dataItem: MenuItem[] = [
  {
    icon: 'unlock',
    name: '首页',
    index: '1'
  },
  {
    icon: 'check',
    name: '首页',
    index: '2'
  },
  {
    icon: 'check',
    name: '数据',
    index: '3',
    children: [
      {
        name: '数据1',
        index: '3-1'
      },
      {
        name: '数据2',
        index: '3-2'
      },
    ]
  }
]
export default dataItem
