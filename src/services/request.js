
function parseData(data) {
    const formData = new FormData();

    for (let [key, value] of Object.entries(data)) {
        formData.append(key, value);
    }

    return formData;
}

function request(url, data = false, method = 'GET', type = 'JSON') {
    return new Promise(async (resolve, reject) => {
        const options = {
            method: method
        };

        if (data && method == 'POST') {
            options.body = type == 'JSON' ? JSON.stringify(data) : parseData(data)
        }

        const response = await fetch(process.env.REACT_APP_API_URL + url, options);
        const result = await response.json();

        if (response.ok) {
            resolve(result);
        }
        else {
            reject(result);
        }

    })
}

export const post = (url, data) => request(url, data, 'POST')
export const postFormData = (url, data) => request(url, data, 'POST', 'FORM_DATA')
export const get = url => request(url)