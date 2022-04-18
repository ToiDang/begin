function dangnhap()
{
    let tendangnhap = document.getElementById('tendangnhap').value;
    let pass = document.getElementById('pass').value;
    function gettaikhoang(name)
    {
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
                        let a=ckarr[i].split("=");
                        return a[0];
                    }
                }
            }
        }
    }
    // console.log(gettaikhoang(tendangnhanp))
    function getpass(pass)
    {
        let ckstr = document.cookie;
        if(ckstr)
        {
            let ckarr = ckstr.split(";");
            for(let i = 0; i<ckarr.length;i++)
            {
                let keyvalue = ckarr[i].split("=");
                {
                    if(keyvalue[0].trim()==pass)
                    {
                        let a=ckarr[i].split("=");
                        return a[1];
                    }
                }
            }
        }
    }
    console.log()
    if(gettaikhoang(tendangnhap)!=undefined && getpass(tendangnhap)==pass)
    {
        
        window.location = 'https://toidang.github.io/begin//trangchu.html';
        
        // alert("Đăng nhập thành công");
    }
    else{
        alert("Tài khoảng hoặc mật khẩu không hợp lệ");
    }
    
}