import express from 'express';
import axios from 'axios';
import cookieParser from "cookie-parser";
import cors from 'cors';

const PORT = 3000;
const BASE_URL = "https://www.nseindia.com/";
var CKSTR;

var app = express();
app.use(cors());
app.use(cookieParser())
app.use(express.json());
// app.use(express.urlencoded());

const OCI = "api/option-chain-indices/";


// GETTING THE OPTION CHAIN INDICES NAMES OR SYMBOLS
app.post('/', (req, res)=>{
    // console.log("askdhjas");
    axios.get(BASE_URL+OCI, {
        withCredentials : true,
        headers : {
            Cookie:CKSTR
        }
    })
    .then(response =>{
        let dat =  response.data;
        dat = getSymbolsInArrayForm(dat)
        // console.log(response.data)

        // SENDING THE RESPONSE IN JSON FORMAT
        res.json(dat);
    })
    .catch(err => {
        // console.log("Error Fetching the Option Chain Indices")
        console.log("Error : ",err)
    })
})

function getSymbolsInArrayForm(data)
{
    // console.log(data)
    let temp = data;
    temp = temp.replace("missing symbol={ ", "")
    temp = temp.replaceAll(" ", "");
    temp = temp.replace("}","");
    temp = temp.split("|");
    // console.log(temp)
    return temp;
}




// GETTING THE INDEX DATA
app.post('/getIndexData', (req, res)=>{

    console.log(req.data);
    res.send(req.data);
    // axios.get(BASE_URL+OCI, {
    //     withCredentials : true,
    //     headers : {
    //         Cookie:CKSTR
    //     }
    // })
    // .then(response =>{
    //     let dat =  response.data;
    //     dat = getSymbolsInArrayForm(dat)
    //     // console.log(response.data)

    //     // SENDING THE RESPONSE IN JSON FORMAT
    //     res.json(dat);
    // })
    // .catch(err => {
    //     // console.log("Error Fetching the Option Chain Indices")
    //     console.log("Error : ",err)
    // })
})

















// COOKIES ARE LOADED DURING THE PAGE IS LOADING
app.listen(PORT, ()=>{
    console.log("listening on port 3000");
    cookies()
});

async function cookies()
{
    try{
        let ck = await loadCookies();
        getCookieString(ck);
        // console.log(ck[0])
    }
    catch(e)
    {
        // console.log(err)
        console.log("Error Loading Cookies")
    } 
}

function loadCookies()
{
    return new Promise((resolve, reject)=>{
        axios.get(BASE_URL,{
            headers:{
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive'
            }
        })
        .then(resp =>{
            resolve(resp.headers['set-cookie']);
        })
        .catch(err=>{
            console.log("Error : Error Fetching Cookies!!!")
            reject(err)
            // console.log(err)
        })
    })
}

function getCookieString(ck)
{
    let ckstr = ""
    ck.forEach(e => {
        let temp = e.split(";")
        temp = temp[0];
        ckstr += temp + ";";
        // console.log(e)
    })
    CKSTR = ckstr
}