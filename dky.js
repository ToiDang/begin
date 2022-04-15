function canhbao(){
    var hoten = document.getElementById('hoten').value;
    var tendangnhap = document.getElementById('tendangnhap').value;
    var pass = document.getElementById('pass').value;
    var pass1 = document.getElementById('pass1').value;
    var reg=/[/^[^a-zA-Z0-9]/;
    if (hoten==""||tendangnhap==""||pass==""||pass1=="")
    {
        document.getElementById('canhbao').innerHTML="Vui lòng nhập đủ thông tin!";
    }
    else if(!reg.test(tendangnhap)|| tendangnhap.indexOf(' ')>=0)
    {
        document.getElementById('canhbao').innerHTML="Tên đăng ký không hợp lệ!";
    }
    else if(pass.length==0)
    {
        document.getElementById('canhbao').innerHTML="Mật khẩu phải từ 1 ký tự trở lên!";
    }
    else if(isNaN(pass)==true){
        document.getElementById('canhbao').innerHTML="Mật khẩu phải là số!";
    }
    else if (pass1!=pass)
    {
        document.getElementById('canhbao').innerHTML="Xác nhận mật khẩu không chính xác!";
        return false;
    }
    else
    {
        document.getElementById('canhbao').innerHTML="";
        insert();
    }
}
function insert(){
    var tendangnhap = document.getElementById('tendangnhap').value;
    var pass1 = document.getElementById('pass1').value;
    function creatck(name,value)
    {
        document.cookie=name+"="+value;
    }
    function getck(name){
        let ckstr = document.cookie;
        if(ckstr)
        {
            let ckarr = ckstr.split(";");
            for(let i = 0; i<ckarr.length;i++)
            {
                let keyvalue = ckarr[i].split("=");
                {
                    if(keyvalue[0].trim()==name)
                    {
                        let a= ckarr[i].split("=");
                        return a[0];
                    }
                }
            }
        }
    }
    if(getck(tendangnhap)==undefined)
    {
        alert("Đăng ký thành công");
        creatck(tendangnhap,pass1);
    }
    else{
        document.getElementById('canhbao').innerHTML="Tài khoảng đã tồn tại!";
    }
    
    
    
    
}
