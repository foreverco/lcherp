<template>
  <div>
    <avue-crud
      :data="data"
      :option="option"
      :page.sync="page"
      :table-loading="listLoading"
      @on-load="getList"
      @search-change="searchChange"
      @refresh-change="refreshChange"
      @size-change="sizeChange"
      @current-change="currentChange"
      @row-save="create"
      @row-update="handleUpdate"
    >
      <template slot="status" slot-scope="scope">
        <el-tag
          :type="
            statusList.find(item => item.value === scope.row.status) &&
            statusList.find(item => item.value === scope.row.status).type
          "
          >{{
            statusList.find(item => item.value === scope.row.status) &&
            statusList.find(item => item.value === scope.row.status).label
          }}</el-tag
        >
      </template>
      <template slot="menu" slot-scope="scope">
        <el-button
          type="text"
          size="small"
          icon="el-icon-delete"
          @click="deletes(scope.row, scope.index)"
          >删除
        </el-button>
      </template>
    </avue-crud>
  </div>
</template>

<script>
import { order, addorder, delorder, updateorder } from "@/api/order.js";
import { tableOption } from "@/const/crud/order/order";
export default {
  data() {
    return {
      searchForm: {},
      listLoading: true,
      statusList: [
        {
          label: "在线",
          value: 1,
          type: "success"
        },
        {
          label: "结单",
          value: 2,
          type: "danger"
        },
        {
          label: "暂停",
          value: 3,
          type: "info"
        },
        {
          label: "待资料",
          value: 4,
          type: "info"
        }
      ],
      page: {
        pageSize: 10,
        currentpage: 1,
        total: 0,
        isAsc: false // 是否倒序
      },
      data: [],
      option: tableOption
    };
  },
  computed: {
    test() {
      return 123;
    }
  },
  methods: {
    getList(page, params) {
      this.listLoading = true;
      order(
        Object.assign(
          {
            current: page.currentPage,
            size: page.pageSize
          },
          params,
          this.searchForm
        )
      ).then(res => {
        this.data = res.data.records;
        this.page.total = res.data.total;
        this.listLoading = false;
      });
    },
    searchChange(param, done) {
      this.searchForm = param;
      this.page.currentPage = 1;
      this.getList(this.page, param);
      done();
    },
    refreshChange() {
      this.getList(this.page);
    },
    // 新增
    create(row, done, loading) {
      console.log(row);
      let params = {};
      params = row;
      addorder(params).then(res => {
        console.log(res);
        this.getList(this.page);
        done();
        this.$message.success(res.msg);
      });
    },
    // 删除
    deletes(row, index) {
      this.$confirm(
        "此操作将永久删除该用户(用户名:" + row.customCode + "), 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          delorder({ _id: row._id })
            .then(() => {
              // this.list.splice(index, 1);
              this.getList(this.page);
              this.$notify.success("删除成功");
            })
            .catch(() => {
              this.$notify.error("删除失败");
            });
        })
        .catch(() => {
          this.$message.warning("取消删除");
        });
    },
    // 编辑
    handleUpdate(row, index, done, loading) {
      updateorder(row).then(res => {
        console.log(res);
        this.getList(this.page);
        done();
        this.$message.success(res.msg);
      });
      // updateorder
    },
    sizeChange(pageSize) {
      this.page.pageSize = pageSize;
    },
    currentChange(current) {
      this.page.currentPage = current;
    }
  }
};
</script>

<style scoped lang="scss"></style>
