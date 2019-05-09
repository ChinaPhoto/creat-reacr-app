// import axios from 'axios'
import JsonP from 'jsonp'

class Http {
    static jsonp(options) {
        return new Promise((resolve,reject)=>{
            JsonP(options, {
                param: 'callback'
            }, (err, res)=>{
                if(res.status === 'success'){
                    resolve(res)
                }else {
                    reject(err)
                }
            }) 
        })
    }
}

export default Http