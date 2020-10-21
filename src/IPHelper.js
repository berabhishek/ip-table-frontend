import ApiConnector from "./connector/ApiConnector";
class IPHelper {
    constructor() {
        this.apiConnector = new ApiConnector();
    }

    formatData(endpoint, key = "name") {
        let values = [""];
        if(typeof endpoint !== "string") {
            console.error("endpoint expected string got ", typeof endpoint);
            return values;
        }
        let data = this.apiConnector.fetchData(endpoint);
        if (data && Array.isArray(data) && data.length > 0 && typeof data[0][key] !== "undefined") {
            data.forEach(dataPoint => {
                values.push(dataPoint[key]);
            });
        }
        return values;
    }
}

export default IPHelper;