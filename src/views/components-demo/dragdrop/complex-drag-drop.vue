<template>
  <dnd-list
    :list1="list1"
    :list2="list2"
    list1-title="List"
    list2-title="Article pool"
  />
</template>

<script>
import DndList from "@/components/DndList";
import { fetchList } from "@/api/article";

export default {
  name: "ComplexDragDropDemo",
  components: { DndList },
  data() {
    return {
      list1: [],
      list2: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.listLoading = true;
      fetchList().then((response) => {
        this.list1 = response.data.items.splice(0, 5);
        this.list2 = response.data.items;
      });
    },
  },
};
</script>
