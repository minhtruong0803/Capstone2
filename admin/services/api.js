function Api(){
    this.fecthData = function(){
       const promise = axios({
            url: "https://65d8a742c96fbb24c1bc063d.mockapi.io/api/Products",
            method: "GET",
        });
        return promise;
    }

    this.delete = function (id){
        const promise = axios ({
            url: `https://65d8a742c96fbb24c1bc063d.mockapi.io/api/Products/${id}`,
            method: "DELETE",
        });
        return promise;
    };

    this.add = function (product){
        const promise = axios({
            url: "https://65d8a742c96fbb24c1bc063d.mockapi.io/api/Products",
            method: "POST",
            data: product,
        });
        return promise;
    };

    this.getProductById = function(id){
        const promise = axios({
            url: `https://65d8a742c96fbb24c1bc063d.mockapi.io/api/Products/${id}`,
            method: `GET`,
        })
        return promise;
    };

    this.update = function (product){
        const promise = axios({
            url: `https://65d8a742c96fbb24c1bc063d.mockapi.io/api/Products/${product.id}`,
            method: "PUT",
            data: product,
        })
        return promise;
    };
}