window.xhr = true;

function XHR() {
    this.CORS_Endpoint = "https://cors-anywhere.herokuapp.com/";
    this.getFileData = (path, callback) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET",this.CORS_Endpoint + path, true);
        xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                callback(false, xhr.responseText);
            } else if (xhr.status != 200 && xhr.readyState == 4) {
                callback(true, {
                    "code": xhr.status,
                    "message": xhr.responseText
                });
            }
        }
        xhr.onerror = () => {
            callback(true, {
                "code": xhr.status,
                "message": xhr.responseText
            })
        }
        xhr.send();
    }
}

