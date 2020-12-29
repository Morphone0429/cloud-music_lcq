import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components'
import Scroll from '../scroll/index'
import { PropTypes } from 'prop-types'
import style from '../../assets/global-style'
const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  >span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style["font-size-m"]};
    vertical-align: middle;
  }
`
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style["font-size-m"]};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`

function Horizen(props) {
  const { list, oldVal, title } = props;
  const { handleClick } = props
  const Category = useRef(null)
  useEffect(() => {
    // 外部容器未限定宽度，也就是两个 Horizen 外面包裹的 div 元素。
    // 内部宽度没有进行相应的计算，始终为屏幕宽度。  需要手动计算
    let categoryDOM = Category.current
    let tagElems = categoryDOM.querySelectorAll('span')
    let totalWidth = 0;
    Array.from(tagElems).forEach(ele=>{
      totalWidth += ele.offsetWidth
    })
    categoryDOM.style.width = `${totalWidth}px`
  }, [])


  return (
    <Scroll direction={'horizental'}>
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {
            list.length !== 0 && list.map(item => {
              return (
                <ListItem key={item.key} className={`${oldVal === item.key ? 'selected' : ''}`} onClick={() => handleClick(item.key)}>
                  {item.name}
                </ListItem>
              )
            })
          }
        </List>
      </div>
    </Scroll>
  )
}

Horizen.defaultProps = {
  list: [],    //列表数据
  oldVal: '',   // 当前的item
  title: "",    // 列表左边的标题
  handleClick: null  // 点击不同item的执行方法
}

Horizen.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
}

export default memo(Horizen)