<template>
  <div class="Order1">
    <Tables
      :dataSources="tableSources.list"
      :pageOptions="tableSources.pages"
      @on-pages="handleTablePages"
      :loading="tableLoading"
    >
      <el-table-column
        prop="nameCN"
        width="150"
        label="名字">
      </el-table-column>
      <el-table-column
        prop="county"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="nameEN"
        label="英文名">
      </el-table-column>
      <el-table-column
        prop="timer"
        label="时间">
      </el-table-column>
    </Tables>
  </div>
</template>
<script>
import * as orderServices from '@/services/order'

export default {
  name: 'Order1',
  data () {
    return {
      tableSources: {
        list: [],
        pages: {}
      },
      tableLoading: false
    }
  },
  methods: {
    fetchTableData (pages = {}) {
      this.tableLoading = true
      const payload = Object.assign({}, pages)
      orderServices.orderTableList(payload).then(res => {
        if (res.code === 0) {
          this.tableSources = res.data
        }
        this.tableLoading = false
      })
    },
    handleTablePages (pages) {
      // console.log(pages)
      this.fetchTableData(pages)
    }
  },
  mounted () {
    this.fetchTableData()
  }
}
</script>