<template>
  <div class="tables">
    <el-table
      :data="dataSources"
      border
      style="width: 100%">
      <slot/>
    </el-table>
    <div class="pagination clearfix" v-if="isPage">
      <el-pagination
        class="pull-right"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageOptions.currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageOptions.pageSize"
        background
        layout="total, prev, pager, next, sizes, jumper"
        :total="pageOptions.totalResults">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tables',
  props: {
    dataSources: {
      type: Array,
      default: () => []
    },
    isPage: {
      type: Boolean,
      default: () => true
    },
    pageOptions: {
      type: Object,
      default: () => ({
        currentPage: 1,
        pageSize: 10,
        totalResults: 0
      })
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="less" scoped>
.tables {
  width: 100%;
}
</style>
<style lang="less">
.tables .el-table__header tr > th {
  background-color: #f8f8f9;
}
.tables .el-pagination.is-background .btn-next,
.tables .el-pagination.is-background .btn-prev,
.tables .el-pagination.is-background .el-pager li {
  background: none;
  border: 1px solid #DCDFE6;
  font-weight: normal;
}
.pagination {
  margin: 20px 0;
}
</style>