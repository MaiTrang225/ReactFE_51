import React, { Component } from 'react'

export default class HandleEvent extends Component {

    // 

    showTitle = (title) => { alert('お前はもう死んでるよーー') }

    showMess = (mess) => { alert(`hello ${mess}`); }
    render() {
        return (
            <div>
                {/*Xử lý sự kiện truyền callBack*/}
                <button onClick={this.showTitle}>Nhấn</button>



                {/*Xử lý sự kiện sử dụng hàm trung gian
                ==========SD nhiều cái này=============*/}
                <button onClick={() => {
                    this.showTitle()
                }}>Show Title</button>




                {/*In ES5 */}
                <button onClick={this.showMess.bind(this, 'MaiTrang')}></button>



                {/*In ES6
               ==============SD nhiều cái này=============*/}
                <button onClick={() => {
                    this.showMess('Trang')
                }} >ShowMess</button>
            </div>
        )
    }
}
