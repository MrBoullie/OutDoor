import productData from "./products.json";
import './product.css'
function Product() {
  return (
    <div className="d-flex flex-column mx-5">
      {productData.map((category) => (
        <div key={category.id} className="border-bottom mb-3 pb-5 border-3">
          <div className="d-flex align-items-center justify-content-center fw-bold fs-3 my-5 ">
            {category.title}
          </div>
          <div className="d-flex justify-content-between align-items-center row col-12 gap-5 flex-wrap">
            {category.items.map((item) => (
              <div
                className="card card-body col-lg-5 col-md-12 rounded shadow"
                key={item.id}
                style={{ height: "240px", maxWidth: "48%" }}
              >
                <div
                  className="d-flex  flex-column align-items-center w-100 h-100"
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{
                      height: "200px",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={item.image}
                      style={{
                        maxHeight: "100%",
                        maxWidth: "30%",
                        objectFit: "cover",
                      }}
                    />
                    <div className="d-flex flex-column gap-2 mx-4">
                       <div className="fw-semibold fs-5"> {item.name} </div>
                       <div className="text-success fs-5 fw-bold"> ${item.price}</div>
                       <div className="fs-6 fw-normal"> {item.description}</div>
                       <div><a className="btn border rounded mt-3 addToCard">Add to cart</a></div>
                    </div>

                    <div className="mt-2 d-flex justify-content-center">
                      {Array.from({ length: 5 }, (_, index) => (
                        <i
                          key={index}
                          className={`bi ${
                            index < item.rating
                              ? "bi-star-fill text-warning"
                              : "bi-star text-muted"
                          }`}
                          style={{ fontSize: "1.2rem", margin: "0 2px" }}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
