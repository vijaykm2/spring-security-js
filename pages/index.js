import fetch from 'isomorphic-unfetch';
import Header from '../components/header'

const Index = (props) => {
    console.log(props);
    return (
        <div>
            <Header/>
            <p>Hello Next.js</p>
        </div>
    )
}
Index.getInitialProps = async function () {
    let res = {};
    let success =  true;
    try {
        const result = await fetch('http://localhost:8080/resource', {
            method: 'GET',
            //mode: "no-cors",
            headers: {
                //'Origin': 'http://localhost ',
                //'Content-Type': 'application/JSON',
                //"Accept":"*/*",
                //"Access-Control-Allow-Origin": "http://localhost",
                //"Access-Control-Request-Headers": "*",
                //"Access-Control-Allow-Methods": "GET, POST, HEAD, OPTIONS, PUT, DELETE, PATCH",
                //"X-Requested-With": "XMLHttpRequest",
                //"credentials": "include",
            },
             credentials: 'include'
        });
        res = result.json();
        console.log("res", res);
    }catch (e) {
        success = false;
        res = {}
    }
    const data =  res;

    console.log(` data fetched: ${data}`)

    return {
        data
    }
}

export default Index
