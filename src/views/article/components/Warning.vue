<template>
  <aside>
    发布和编辑文章页面无法通过keep-alive保存，因为keep-alive的include目前不支持基于路由缓存，它目前基于组件名称缓存。 如果想实现类似的缓存效果，可以使用浏览器缓存方案例如localStorage等
  </aside>
</template>
