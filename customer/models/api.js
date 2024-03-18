function Api(){
    //lấy ds product từ server
    this.fecthData = function(){
/**
 * Promise (lời hứa)
 * - Pending: tgian chờ
 * - Resolve: lời hứa dc thực hiện (thành công)
 * - Reject: lời hứa kh thực hiện (thất bại)
 */
        const promise = axios({
            url: "https://65d8a742c96fbb24c1bc063d.mockapi.io/api/Products",
            method: "GET",
        });

        return promise; 
        
    };
}