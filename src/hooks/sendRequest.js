export function sendRequest (method , url ,body = null) {
   
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }).then(responce  =>{
        if(responce.ok){
            return responce.json()
        }
        return responce.json().then(error =>{
            const e = new Error('Nimadir hato');
            e.data = error;
            throw e;
        })
    })
}

export function getRequest(url){
    return fetch(url)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            return response.json().then(error =>{
                const e = new Error('Nimadir hato bo`lmoqda');
                e.data = error;
                throw e;
            })
        })
}