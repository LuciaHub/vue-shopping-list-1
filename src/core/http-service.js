export class HTTPService {
    constructor(http){
        this._http = http;
    }
    getAll(){
        return this._http.get('');
    }
    get(id){
        return this._http.get(String(id));
    }
    post(model){
        return this._http.post('', model);
    }
    patch(id, model){
        return this._http.patch(String(id), model);
    }
    remove(id){
        return this._http.delete(id);
    }
}