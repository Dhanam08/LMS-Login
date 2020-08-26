
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Input, Space, Button, Layout} from 'antd';
import 'antd/dist/antd.css';
import {UserOutlined, LockOutlined} from "@ant-design/icons";
const {Header, Content }=Layout;
function Login(){
    const history=useHistory();
    let [userName, setuserName]=useState("");
    let [password, setpassword]=useState("");
    
const handleClick=()=>{
    
    if(userName==="admin" && password==="admin"){    
        alert("Success...!");                                                                                                                                                                                                                                                                                                                                                                                    
         history.push("./DashBoard");
        
    } 
    else{
        alert("Invalid User...")
    }
    
}

    return(
        <div>
            <Layout style={{width:350, height:250, marginLeft:430, marginTop:150}}>
            <Header style={{backgroundColor:"teal"}}>
            <p style={{textAlign:"center",color:"white",fontVariantCaps: "small-caps",fontSize: "150%"}}>Apton Work</p>
            </Header>
            <Content style={{backgroundColor:"grey",width:350}}>
            <br/>
            <Space direction="vertical">
            <Input type="text" 
            prefix={<UserOutlined/>}
            size="small"
            value={userName}
            onChange={e=>setuserName(e.target.value)}
            placeholder="UserName"
            />
            <Input.Password prefix={<LockOutlined/>} value={password} 
            onChange={e=>setpassword(e.target.value)}
            placeholder="input password" 
            />
            <center><Button type="primary" onClick={()=>handleClick()}>SUBMIT</Button></center>
            </Space>
            </Content>
        
            </Layout>  
                       
        </div>
        
    )

}
export default Login;