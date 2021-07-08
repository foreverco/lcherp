export const tableOption = {
  align: "center",
  menuAlign: "center",
  stripe: true,
  border: true,
  searchIcon: true,
  // searchMenuSpan: 12,
  // editBtn: false,
  delBtn: false,
  excelBtn: true,
  excelBtn: true,
  viewBtn: true,
  emptyText: "/",
  index: true,
  column: [
    {
      label: "客户型号",
      prop: "customCode",
      search: true,
      rules: [
        {
          required: true,
          message: "请输入客户型号",
          trigger: "blur"
        }
      ]
    },
    {
      label: "订单号",
      prop: "listCode",
      width: 200
    },
    {
      label: "出货地址",
      prop: "address",
      type: "select",
      search: true,
      dicData: [
        {
          label: "圣弗罗尔",
          value: "1"
        },
        {
          label: "金运",
          value: "2"
        },
        {
          label: "天敏",
          value: "3"
        },
        {
          label: "南京",
          value: "4"
        },
        {
          label: "秦峰南路1620",
          value: "5"
        },
        {
          label: "支浦路1号",
          value: "6"
        }
      ]
    },
    {
      label: "层数",
      prop: "plies",
      type: "select",
      search: true,
      dicData: [
        {
          label: "单面板",
          value: "1"
        },
        {
          label: "双面板",
          value: "2"
        },
        {
          label: "四层板",
          value: "4"
        },
        {
          label: "六层板",
          value: "6"
        },
        {
          label: "八层板",
          value: "8"
        },
        {
          label: "十层板",
          value: "10"
        }
      ]
    },
    {
      label: "订单数量",
      prop: "customNumber",
      type: "number"
    },
    {
      label: "已交数量",
      prop: "doneNumer",
      type: "number"
    },
    {
      label: "下单日期",
      prop: "startDate",
      type: "date",
      format: "yyyy-MM-dd",
      valueFormat: "yyyy-MM-dd",
      search: true
    },
    {
      label: "产品交期",
      prop: "endDate",
      type: "date",
      format: "yyyy-MM-dd",
      valueFormat: "yyyy-MM-dd",
      search: true
    },
    {
      label: "板子状态",
      prop: "status",
      type: "select",
      search: true,
      slot: true,
      dicData: [
        {
          label: "在线",
          value: 1
        },
        {
          label: "结单",
          value: 2
        },
        {
          label: "暂停",
          value: 3
        },
        {
          label: "待资料",
          value: 4
        }
      ]
    },

    {
      label: "客户",
      prop: "customName",
      type: "select",
      search: true,
      dicData: [
        {
          label: "欣威视",
          value: "xws"
        },
        {
          label: "华兴",
          value: "hx"
        },
        {
          label: "大洋",
          value: "dy"
        }
      ]
    },
    {
      label: "生产工厂",
      prop: "factory",
      type: "select",
      search: true,
      dicData: [
        {
          label: "华兴",
          value: "hx"
        },
        {
          label: "苏新",
          value: "sx"
        },
        {
          label: "进新",
          value: "jx"
        },
        {
          label: "荣晖",
          value: "rh"
        },
        {
          label: "巨龙",
          value: "jl"
        },
        {
          label: "中络",
          value: "jl"
        },
        {
          label: "hh",
          value: "恒辉"
        },
        {
          label: "dl",
          value: "德隆"
        }
      ]
    },
    {
      label: "运单号",
      prop: "ems",
      width: 200
    },
    {
      label: "备注",
      prop: "resoin"
    }
  ]
};
