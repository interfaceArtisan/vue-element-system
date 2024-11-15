<template>
  <el-table
    ref="table"
    :data="list"
    border
    fit
    highlight-current-row
    style="width: 100%"
  >
    <el-table-column
      v-loading="loading"
      align="center"
      label="ID"
      width="65"
      element-loading-text="请给我点时间！"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="Date">
      <template slot-scope="scope">
        <span>{{
          scope.row.timestamp | parseTime("{y}-{m}-{d} {h}:{i}")
        }}</span>
      </template>
    </el-table-column>

    <el-table-column min-width="600px" label="Title">
      <template slot-scope="{ row }">
        <span>{{ row.title }}</span>
        <el-tag>{{ row.type }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column width="110px" align="center" label="Author">
      <template slot-scope="scope">
        <span>{{ scope.row.author }}</span>
      </template>
    </el-table-column>

    <el-table-column width="120px" label="Importance">
      <template slot-scope="scope">
        <svg-icon
          v-for="n in +scope.row.importance"
          :key="n"
          icon-class="star"
        />
      </template>
    </el-table-column>

    <el-table-column align="center" label="Readings" width="95">
      <template slot-scope="scope">
        <span>{{ scope.row.pageviews }}</span>
      </template>
    </el-table-column>

    <el-table-column class-name="status-col" label="Status" width="110">
      <template slot-scope="{ row }">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchList } from "@/api/article";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  props: {
    type: {
      type: String,
      default: "CN",
    },
  },
  data() {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: "+id",
      },
      loading: false,
    };
  },
  created() {
    this.getList();
  },
  activated() {
    // 解决在切换tab过程中，因重新计算表格列的宽度导致表格闪动问题（闪动猜测是因为设置了title列的min-width，然后表格又设置了fit，导致在渲染之后，需要计算剩余宽度如何给设置了min-width的列进行分配）
    this.$refs.table.doLayout();
  },
  methods: {
    getList() {
      this.loading = true;
      this.$emit("create"); // for test
      fetchList(this.listQuery).then((response) => {
        this.list = response.data.items;
        this.$refs.table.doLayout();
        this.loading = false;
      });
    },
  },
};
</script>
