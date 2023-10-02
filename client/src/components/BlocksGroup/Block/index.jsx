import React from 'react';
import cx from "classnames"
import styles from "./Block.module.scss"

const Block = (props) => {
  const { item: {id, title, content }, isSelected, setSelect } = props
  const className = cx(styles.block, {
    [styles.block__selected]: isSelected
  })
  const handelSelect = () => setSelect(id)
  return (
    <div className={className} onClick={handelSelect}>
      <strong>{title}</strong>
      <p>{content}</p>
    </div>
  );
}
Block.defaultProps = {
  item: {
    title: 'yes',
    content: 'I am only looking for a (.com) Domain',
  },
  isSelected: false,
};
export default Block;
