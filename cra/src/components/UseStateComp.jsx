import { useState } from 'react';

// 함수형 컴포넌트
function UseStateComp(props) { // 부모로부터 props 물려 받음
    // props로 부터 구조 분해
    let { contents } = props;
    
    // [상태 변수, 상태 변화 함수]
    const [count, setCount] = useState(0);
    
    // props로부터 contents 불러옴
    return (
        <div>
            <h3>{ contents }</h3>
            <p>현재 카운트는: { count }입니다.</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    )
}

export default UseStateComp;