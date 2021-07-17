import Product from './models/Product.js';
import ProductService from './services/ProductService.js';

const productService = new ProductService();

const getEle = id => document.getElementById(id);

const renderContent = () => {
  const content = `
    <div class="card text-white bg-dark">
    <div class="card-body">
      <h4 class="card-title">Danh sách sản phẩm</h4>
      <div class='container'>
        <div class="row">
          <div class="col-md-3">
            <input id="maSP" class="form-control" placeholder="Mã SP" />
          </div>
          <div class="col-md-3">
            <input id="tenSP" class="form-control" placeholder="Tên SP" />
          </div>
          <div class="col-md-3">
            <input id="gia" class="form-control" placeholder="Giá" />
          </div>
          <div class="col-md-3">
            <input id="hinhAnh" class="form-control" placeholder="Link hình" />
          </div>
        </div>
        <br />
        <button id="btnThem" class="btn btn-success">Thêm sản phẩm</button>
        <button id="btnCapNhat" class="btn btn-success">Cap nhat</button>
      </div>
    </div>
  </div>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>Mã SP</th>
          <th>Tên SP</th>
          <th>Giá </th>
          <th>Hình ảnh</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tblDanhSachSanPham">

      </tbody>
    </table>
  </div>
    `;

  getEle('root').innerHTML = content;
};

renderContent();

const renderProducts = async () => {
  //   productService
  //     .fetchProducts()
  //     .then(result => {
  //       console.log(result)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  try {
    const { data } = await productService.fetchProducts();

    const content = data.map(product => {
      const { id, tenSP, gia, hinhAnh } = product;

      return `
            <tr>
                <td>${id}</td>
                <td>${tenSP}</td>
                <td>${gia}</td>
                <td>
                    <img src="${hinhAnh}" width="50px" height="50px" />
                </td>
                <td>
                    <button class="btn btn-info">Sửa</button>
                    <button class="btn btn-danger" onclick="deleteProduct('${id}')">Xoá</button>
                </td>
            </tr>
        `;
    });

    getEle('tblDanhSachSanPham').innerHTML = content.join('');
  } catch (error) {
    console.log(error);
  }
};

renderProducts();

/**
 * Add product
 */
const addProduct = async () => {
  // Lấy thông tin từ form
  const maSP = getEle('maSP').value;
  const tenSP = getEle('tenSP').value;
  const gia = getEle('gia').value;
  const hinhAnh = getEle('hinhAnh').value;

  // Khởi tạo đối tượng product từ lớp đối tượng Product
  const product = new Product(maSP, tenSP, gia, hinhAnh);

  productService
    .addProductApi(product)
    .then(() => {
      alert('Success!');
      renderProducts();
    })
    .catch(error => {
      console.log(error);
    });
};

getEle('btnThem').onclick = addProduct;

/**
 * Delete product
 */
const deleteProduct = id => {
    productService.deleleProductApi(id)
    .then(() => {
        alert('Success!');
        renderProducts();
    })
    .catch(error => {
        console.log(error);
    })
};

window.deleteProduct = deleteProduct;

