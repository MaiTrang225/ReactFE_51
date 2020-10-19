import React, { Component } from "react";
import swal from 'sweetalert2' 

export default class FromComponent extends Component {
  state = {
    values:{
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors:{
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
  };
  handleChangeInput = (event) => {

// Lấy ra name và value
    let { name, value } = event.target;

    // Lấy ra các attribute types(Các thuộc tính trên thẻ tự thêm)

    let types = event.target.getAttribute('types');
    console.log()


// Xử lý value
    let newValues = {...this.state.values}; ///Tạo ra value mới giá trị  = value cũ
    newValues[name] = value; //Thay đổi giá trị bên trog value


// Xử lý errors
    let newErrors = {...this.state.errors};
    newErrors[name] = value.trim()===''? 'Không Được Bỏ Trống' : '';

    // Validation các trường đặc biệt

    if(types==='phoneNumber'){
      const regexNumber = /^[0-9]+$/;
      if(!regexNumber.test(value.trim())){
        newErrors[name] ='Dữ liệu phải là số'
      }
    }
    if(types==='email'){
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!regexEmail.test(value.trim())){
        newErrors[name] = 'Email Không hợp lệ'
      }
    }

    this.setState({
      values:newValues, //Gán values = value mới
      errors:newErrors
    },()=>{
      console.log(this.state)
    })
   
  };
  render() {
    return (
     
        <form className="card" onSubmit ={(event)=>{
          // Cản lại sự kiện submit lại trang của browser
          event.preventDefault();
          let valid = true;
          // Duyệt thuộc tính trong object values (Duyệt thuộc tính trong đối tượng thì dùng ES6 for in)
          for(let tenThuocTinh in this.state.values){
            if(this.state.values[tenThuocTinh].trim()===''){
              valid = false;
            }
          }
          // Duyệt lỗi=> Tất cả lỗi phải = rỗng
          for (let tenThuocTinh in this.state.errors){
            if(this.state.errors[tenThuocTinh].trim()!==''){
              valid=false;
            }
          }
          if(!valid){
            // alert('Dữ liệu không hợp lệ');
            swal.fire('Thông Báo','Dữ liệu không hợp lê','error')
            return;//Chặn sự kiện submit
          }
          swal.fire('Thông Báo', 'Thêm Người Dùng Thành Công','success')
          console.log('[Submit')
        }}>



          <div className="card-header bg-dark text-light font-weight-bold">
            <span>THÔNG TIN NGƯỜI DÙNG</span>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <span>Mã Người Dùng</span>
                  <input value={this.state.values.maNguoiDung}
                    className="form-control"
                    name="maNguoiDung"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.maNguoiDung}</p>
                </div>
                <div className="form-group">
                  <span>Tên Người Dùng</span>
                  <input value={this.state.values.tenNguoiDung}
                    className="form-control"
                    name="tenNguoiDung"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.tenNguoiDung}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <span>Số Điện Thoại</span>
                  <input types="phoneNumber" value={this.state.values.soDienThoai}
                    className="form-control"
                    name="soDienThoai"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
                <div className="form-group">
                  <span>Email</span>
                  <input types="email" value={this.state.values.email}
                    className="form-control"
                    name="email"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
            </div>
            <div className="col-12 text-right">
              <button className="btn btn-success">Thêm Người Dùng</button>
            </div>
          </div>
        </form>
    
    );
  }
}
