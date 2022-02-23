import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import PhotoUpload from "../Reuseable/sharedInputs/PhotoUpload";

const RecruiterUpdateForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log({ ...data, role: "candidate" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center py-7 w-full">
          {/* photo input  */}
          <div className="flex jusify-center items-center">
            <PhotoUpload
              register={register}
              setPhotoURL={setPhotoURL}
              photoURL={photoURL}
            />
          </div>

          {/* submit button */}
          <input
            className="  py-2 border  border-cyan-500 text-cyan-500 px-7 rounded font-medium  focus:outline-none cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300"
            value="Save "
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default RecruiterUpdateForm;
