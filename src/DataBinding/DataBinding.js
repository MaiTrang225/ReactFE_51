import React, { Component } from 'react'

export default class DataBinding extends Component {
    // Thuộc tính của lớp đối tượng => Sử dụng đc ở nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma: 1,
        avatar: 'https://picsum.photos/200/200',
        tenHocVien: 'Nguyễn Văn A'
    }
    // Phương thức => Phương thức có thể gọi trong các phương thức khác của lớp đối tượng
    // Gọi:  {this.renderHocVien()}
    renderHocVien = () => {
        return <div className="card border-primary">
            <img className="card-img-top" src={this.hocVien.avatar} alt />
            <div className="card-body">
                <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
                <p className="card-text">Mã Số: {this.hocVien.ma}</p>
            </div>
        </div>

    }

    render() {
        // Binding bằng biến

        let title = 'CyberSoft'
        let imgSrc = 'https://picsum.photos/200/200'


        // Binding bằng hàm
        const renderImg = () => {
            // Giá trị hàm muốn reder ra giao diện phải trả về chuỗi, sô, hoặc jsx
            return <div>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src="holder.js/100px180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>
        }
        return (
            <div className="container">
                <div id="title">{title}</div>
                <div className="m-25">
                    <img src={imgSrc} />
                </div>
                <div>
                    {renderImg()}
                </div>
                <ul>
                    <li>Mã học viên: {this.hocVien.ma}</li>
                    <li>Tên học viên: {this.hocVien.tenHocVien}</li>
                    <li>Hình ảnh:<img src={this.hocVien.avatar} /></li>
                </ul>
                {this.renderHocVien()}
            </div>
        )
    }
}

