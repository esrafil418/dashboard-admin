import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../datas";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to={"/newProduct"}>
          <button className="productAddButton">Creat</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale In Month" data={productData} dataKey={"saled"} />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="\images\dell.jpg" alt="Dell" className="productInfoImg" />
            <span className="productName">Dell Laptop</span>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID: </div>
              <div className="productInfoValue">213</div>
            </div>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">Name: </div>
              <div className="productInfoValue">Dell</div>
            </div>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">Sales: </div>
              <div className="productInfoValue">$90000</div>
            </div>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">Active: </div>
              <div className="productInfoValue">Yes</div>
            </div>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock: </div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productFrom">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Dell Laptop" />

            <label>In Stock</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Active</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUploader">
              <img
                src="\images\dell.jpg"
                alt="Dell"
                className="productUploadImg"
              />
              <label>
                <Publish />
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Upload (Edit)</button>
          </div>
        </form>
      </div>
    </div>
  );
}
