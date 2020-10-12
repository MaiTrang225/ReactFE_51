// Stateless components là component function (react function component)
// Cách tạo react function component
// Cú pháp tạo: rfc => enter
import React from 'react'

export default function DemoStateless() {
    return (
        // Bên trong lệnh return của function component là nội dung giao diện của thẻ này. Lưu ý nội dung của component phải nằm đc bao phủ 1 thẻ bất kỳ
        // <> dùng để bao phủ nội dung

        // Dùng lệnh b4cardbackground =>chọn hết => convert html to jsx
        <div className="container">
            <div className="card text-white bg-dark w-25">
                <img className="card-img-top" src="https://picsum.photos/200/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        </div>

    )
}
