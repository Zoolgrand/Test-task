import { useState } from 'react';
import './Tree.css';

function Tree({ obj, isExpand, setIsExpand }) {

  const [isVisible, setIsVisible] = useState(true);
  const ArrForRender = [];
  
  for (let key in obj) {
    const treeObj = {
      propName: key,
      value: obj[key],
      type: typeof obj[key],
    };
    ArrForRender.push(treeObj);
  }

  function showChildHandler(e) {
    e.stopPropagation();
    setIsExpand(true)
    setIsVisible(!isVisible);
    console.log(isExpand)
  }

  return (
    <ul>
      {ArrForRender.map((item) =>
        item.type !== 'object' ? (
          <li>
            {item.propName} : {item.value}
          </li>
        ) : (
          <li >
            <li className="parent" onClick={showChildHandler}>
              {item.propName}
            </li>
            {isExpand && isVisible && (
              <Tree obj={item.value} setIsExpand={setIsExpand} isExpand={isExpand} />
            )}
          </li>
        )
      )}
    </ul>
  );
}
export default Tree;
