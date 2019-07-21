const {ADMIN_PASS : adminPass} = process.env

exports.login = (ctx) =>{
    const {password} = ctx.request.body;
    if(adminPass === password){
        ctx.body ={
            success: true
        }
        ctx.session.logged = true;
    }
    else{
        ctx.body ={
            success: false
        }
        ctx.status = 401;
    }

}

exports.check = (ctx) =>{
    ctx.body ={
        logged : !!ctx.session.logged
        // '!!' 인 이유 : 값이 존재 하지 않을 때도 false를 반환하기 위하여
    }
}

exports.logout = (ctx)=>{
    ctx.session = null;
    ctx.status = 204;
}