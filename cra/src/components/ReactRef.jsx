import React, { Component } from 'react';

class ReactRef extends Component {
    constructor(props) { // props데이터를 전달받아 생성자 호출
        super(props);
    }
    JavaScriptFocus() {
        //  VJS로 DOM 객체에 접근 
        document.getElementById("id")
            .style.backgroundColor ="lightblue";
        document.getElementById("id").focus();
    }
    render() {
        return (
            <>
                <input id="id" type="text" />
                <input type="button" value="JS Focus"
                    onClick={this.JavaScriptFocus} />
            </>
        )
    }
}
export default ReactRef; 
