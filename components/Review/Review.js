import axios from "axios";
import Router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const Review = () => {

    const { register, handleSubmit } = useForm();
    const router = useRouter()


    const onSubmit = data =>{
        console.log(data);
        axios
        .post("http://localhost:4030/review", data)
        .then((res) => {
            if(res.status === 200){
                router.push("/")
                alert("done")
            }
        })
        .catch(function (error) {
            console.log(error);
        }) 
        
    } 
     

    return (
        <form className="my-60 flex flex-col" onSubmit={handleSubmit(onSubmit)}>


        <input className="bg-gray-200 w-2/5 mx-auto mb-5 py-1 pl-2"  placeholder="username" {...register("username")} />

        <input className="bg-gray-200 w-2/5 pl-2 mx-auto mb-5  py-1"  placeholder="image link"{...register("image")} />

        <input className="bg-gray-200 w-2/5 pl-2 mx-auto mb-5 py-1"  placeholder="rating" {...register("rating")} />

        <input className="bg-gray-200 w-2/5 pl-2 mx-auto mb-5 py-1"  placeholder="your review" {...register("review")} />
       




        <input className="bg-red-300 w-20 mx-auto cursor-pointer py-1" type="submit" />
      </form>
    );
};

export default Review;