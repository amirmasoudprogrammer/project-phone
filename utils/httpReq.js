const base_url ="https://fakestoreapi.com";


const postdata= async (path,data) =>{
    try {
        const respons= await fetch(`${base_url}/${path}`,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{"Content-Type": "application/json"},
        });
        const json = await respons.json()
        return json;
    }catch (error){
        alert("an error")
    }

}
export default postdata;