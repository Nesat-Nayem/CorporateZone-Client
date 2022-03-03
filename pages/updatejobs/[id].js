import { async } from "@firebase/util";


export const getStaticPaths = async() => {
    const res = await fetch("http://localhost:4030/jobs")
    const data = await res.json();


    const paths = data.map((curElem) =>{
        return{
            params: {id: curElem._id.toString()},
        }
    })

    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps = async(context) =>{
    const id = context.params.id
    const res = await fetch(`http://localhost:4030/${id}`)
    const data = await res.json()


    return{
        props: {
            data,
        }
    }





}




const updateJobs = ({data}) => {

    
   
    return (
        <div>
            
            <h1>{data._id}</h1>
        </div>
    );
};

export default updateJobs;

