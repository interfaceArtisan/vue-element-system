/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Components',
    icon: 'component'
  },
  children: [
    // {
    //   path: 'tinymce',
    //   component: () => import('@/views/components-demo/tinymce'),
    //   name: 'TinymceDemo',
    //   meta: { title: 'Tinymce' }
    // },
    {
      path: 'richtexteditor',
      component: () => import('@/views/components-demo/richtext-editor'),
      name: 'RichtexteditorDemo',
      meta: { title: 'RichtextEditor' }
    },
    // {
    //   path: 'markdown',
    //   component: () => import('@/views/components-demo/markdown'),
    //   name: 'MarkdownDemo',
    //   meta: { title: 'Markdown' }
    // },
    // {
    //   path: 'json-editor',
    //   component: () => import('@/views/components-demo/json-editor'),
    //   name: 'JsonEditorDemo',
    //   meta: { title: 'JSON Editor' }
    // },
    // {
    //   path: 'split-pane',
    //   component: () => import('@/views/components-demo/split-pane'),
    //   name: 'SplitpaneDemo',
    //   meta: { title: 'SplitPane' }
    // },
    // {
    //   path: 'avatar-upload',
    //   component: () => import('@/views/components-demo/avatar-upload'),
    //   name: 'AvatarUploadDemo',
    //   meta: { title: 'Upload' }
    // },
    // {
    //   path: 'dropzone',
    //   component: () => import('@/views/components-demo/dropzone'),
    //   name: 'DropzoneDemo',
    //   meta: { title: 'Dropzone' }
    // },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'StickyDemo',
      meta: { title: 'Sticky' }
    },
    {
      path: 'count-to',
      component: () => import('@/views/components-demo/count-to'),
      name: 'CountToDemo',
      meta: { title: 'Count To' }
    },
    // {
    //   path: 'mixin',
    //   component: () => import('@/views/components-demo/mixin'),
    //   name: 'ComponentMixinDemo',
    //   meta: { title: 'Component Mixin' }
    // },
    {
      path: 'drag-drop',
      component: () => import('@/views/components-demo/dragdrop/index'),
      name: 'DragDropDemo',
      meta: { title: 'Drag Drop' }
    },
    {
      path: '/tab',
      component: () => import('@/views/components-demo/tab/index'),
      name: 'Tab',
      meta: { title: 'Tab'}
    },
  ]
}

export default componentsRouter
