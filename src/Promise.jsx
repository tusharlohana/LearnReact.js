import React from 'react';

function Pro() {
    return new Promise( function (resolve, reject){
        setTimeout(()=>{
            const error = false;
            if (!error){
            console.log("promise resolved")
                resolve('resolveeeeeeeeeee')
        }
        else
        {
            console.log("promise not resolved")
            reject('sorryyy')
        }
        }, 2000)
    })
}
Pro().then(function(error){
    console.log("thanxxxx for resolving" +error)
}).catch(function(error){
    console.log("not thanxxxx" +error)
})

export default Pro