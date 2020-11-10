import $ from "jquery";

class ApiConnector {
    constructor(props) {
        this.state = {
            "url": "http://localhost:3030",
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

    setData(extension, data) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": this.state.url+extension,
            "method": "POST",
            "headers": {
              "content-type": "application/json",
            },
            "processData": false,
            "data": JSON.stringify(data)
          }
          
          $.ajax(settings).done(function (response) {
            window.location = "/output/"+response.id;
          });
    }

    deleteData(extension) {
        let data = $.ajax({
            url: this.state.url+extension,
            async: false,
            dataType: 'json',
            method: "DELETE",
            success: function(result) {
                console.log(result.message)
            }
        });
        return data.responseJSON;
    }
}
export default ApiConnector;