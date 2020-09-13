import $ from "jquery";

class ApiConnector {
    constructor(props) {
        this.state = {
            "url": "http://localhost:27017",
        }
    }

    fetchData(extension) {
        let data = $.ajax({
            url: this.state.url+extension,
            async: false,
            dataType: 'json',
            success: function(result) {
                // console.log(result.message)
            }
        });
        return data.responseJSON;
    }

    setData() {

    }
}
export default ApiConnector;