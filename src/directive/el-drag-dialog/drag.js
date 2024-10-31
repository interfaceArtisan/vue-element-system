export default {
  bind(el, binding, vnode) {
    console.log('bind', el, binding, vnode)
    let { dragArea, dragTarget } = binding.value
    dragArea = el.querySelector(dragArea)
    dragTarget = el.querySelector(dragTarget)
    dragArea.style.cssText += ';cursor:move;'
    dragTarget.style.cssText += ';top:0px;'

    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const getStyle = (function() {
      if (window.document.currentStyle) {
        return (dom, attr) => dom.currentStyle[attr]
      } else {
        return (dom, attr) => getComputedStyle(dom, false)[attr]
      }
    })()

    dragArea.onmousedown = (e) => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dragArea.offsetLeft
      const disY = e.clientY - dragArea.offsetTop

      const dragTargetWidth = dragTarget.offsetWidth
      const dragTargetHeight = dragTarget.offsetHeight

      const screenWidth = document.body.clientWidth
      const screenHeight = document.body.clientHeight

      const mindragTargetLeft = dragTarget.offsetLeft
      const maxdragTargetLeft = screenWidth - dragTarget.offsetLeft - dragTargetWidth

      const mindragTargetTop = dragTarget.offsetTop
      const maxdragTargetTop = screenHeight - dragTarget.offsetTop - dragTargetHeight

      // 获取到的值带px 正则匹配替换
      let styL = getStyle(dragTarget, 'left')
      let styT = getStyle(dragTarget, 'top')

      if (styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100)
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100)
      } else {
        styL = +styL.replace(/\px/g, '')
        styT = +styT.replace(/\px/g, '')
      }

      document.onmousemove = function(e) {
        // 通过事件委托，计算移动的距离
        let left = e.clientX - disX
        let top = e.clientY - disY

        // 边界处理
        if (-(left) > mindragTargetLeft) {
          left = -mindragTargetLeft
        } else if (left > maxdragTargetLeft) {
          left = maxdragTargetLeft
        }

        if (-(top) > mindragTargetTop) {
          top = -mindragTargetTop
        } else if (top > maxdragTargetTop) {
          top = maxdragTargetTop
        }

        // 移动当前元素
        dragTarget.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`

        // emit onDrag event
        vnode.child.$emit('dragDialog')
      }

      document.onmouseup = function(e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
