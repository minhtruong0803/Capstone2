const api = new Api();
const getEle = (id) => document.getElementById(id);

function getListProducts() {
    const promise = api.fecthData();
    //Pending => show loader
    getEle("loader").style.display = "block";
    promise
        .then(function (result) {
            //success => hide loader
            getEle("loader").style.display = "none";
            console.log(result.data);
            renderUI(result.data);
        })
        .catch(function (error) {
            //error => hide loader
            getEle("loader").style.display = "block";
            console.log(error);
        });

}
getListProducts();

function renderUI(data) {
    let content = "";
    data.forEach(function (product) {
        content += `
        <div class="col-12 col-md-6 col-lg-4">
                    <div class="card cardPhone">
                        <img src="./img/${product.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h3 class="cardPhone__title">${product.name}</h3>
                                    <p class="cardPhone__text">${product.desciption}</p>
                                </div>
                                <div>
                                    <h3 class="cardPhone__title">$${product.price}</h3>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="cardPhone__rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <div>
                                    <button class="btnPhone-shadow"><i class="fa fa-shopping-cart"></i> Buy Now</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>`;
    });

    getEle("products__content__main").innerHTML = content;
}


//Filter
getEle("selLoai").addEventListener("change", () => {
    const type = getEle("selLoai").value; 
    api
  .callApi(`Products`, "GET", null)
  .then((result) => {
    const ListProduct = result.data;
    let listFilter = [];
    if (type === "all") {
      listFilter = ListProduct;
    } else {
      listFilter = ListProduct.filter((product) => product.type === type);
      }

      renderUI(listFilter);
    })
    .catch((error) => {
      console.log(error);
    })  
    }); 