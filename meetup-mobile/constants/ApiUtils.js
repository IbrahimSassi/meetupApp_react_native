/**
 * Created by Ibrahim on 03/05/2017.
 */
var ApiUtils = {
    checkStatus: function(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
};
export { ApiUtils as default };
