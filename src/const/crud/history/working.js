export const tableOption = {
  align: "center",
  menuAlign: "center",
  stripe: true,
  border: true,
  searchIcon: true,
  searchMenuSpan: 4,
  // editBtn: false,
  delBtn: false,
  excelBtn: true,
  excelBtn: true,
  viewBtn: true,
  emptyText: "/",
  index: true,
  column: [
    {
      label: "工厂名称",
      prop: "workingName",
      search: true,
      rules: [
        {
          required: true,
          message: "请输入工厂名称",
          trigger: "blur"
        }
      ]
    },
    {
      label: "加工厂地址",
      prop: "workingAddress"
    },
    {
      label: "备注",
      type: "textarea",
      prop: "area"
    }
  ]
};
