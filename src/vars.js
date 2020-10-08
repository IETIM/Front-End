export function getUrl(){
    var url="https://ieti-deep-backend.herokuapp.com";
    return url
}


export function IsTendero(){
        console.log(localStorage.getItem("IsLoggedIn"));
        if(localStorage.getItem("IsLoggedIn")!=null){
            var roles = JSON.parse(localStorage.getItem("roles"));
            for(var i=0;i<roles.length;i++){
                console.log("for");
                if(roles[i]=='ROLE_TENDERO'){
                    return true;
                }
            }
        }
        return false;
}
