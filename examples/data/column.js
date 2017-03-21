export default {
  name: '柱状图',
  type: 'column',
  data: [
    {
      name: '简单柱状图',
      data: [
        { '201603': 100, '201604': 150, 'name': '上海' },
        { '201603': 110, '201604': 200, 'name': '北京' }
      ],
      settings: {}
    },
    {
      name: '双轴柱状图',
      data: [
        { '201603': 100, '201604': 150, 'name': '上海' },
        { '201603': 110, '201604': 200, 'name': '北京' }
      ],
      settings: {
        axisOption: {
          top: ['201603']
        }
      }
    },
    {
      name: '带轴标题柱状图',
      data: [
        { '201603': 100, '201604': 150, 'name': '上海' },
        { '201603': 110, '201604': 200, 'name': '北京' }
      ],
      settings: {
        axisOption: {
          right: ['201603']
        },
        axisName: ['title1', 'title2']
      }
    },
    {
      name: '带轴属性柱状图',
      data: [
        { '201603': 100, '201604': 150, 'name': '上海' },
        { '201603': 110, '201604': 200, 'name': '北京' }
      ],
      settings: {
        axisOption: {
          right: ['201603']
        },
        axisName: ['title1', 'title2'],
        axisType: ['KMB', 'percent']
      }
    },
    {
      name: '堆叠柱状图',
      data: [
        { '201603': 100, '201604': 150, '201703': 200, '201704': 250, 'name': '上海' },
        { '201603': 110, '201604': 200, '201703': 300, '201704': 350, 'name': '北京' }
      ],
      settings: {
        stack: {
          '2016': ['201603', '201604'],
          '2017': ['201703', '201704']
        },
        axisName: ['title1', 'title2'],
        axisType: ['KMB', 'percent']
      }
    }
  ]
}
