import { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BASE_URL } from '../utils/Connection';

const Profile = () => {

  const user = useSelector(store => store.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [photourl, setPhotoUrl] = useState("");
  const [about, setAbout] = useState("");
  const [preview, setPreview] = useState(false);
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);

  const dispatch = useDispatch();

  // ✅ sync redux user → local state
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setAge(user.age || "");
      setPhotoUrl(user.photourl || "");
      setAbout(user.about || "");
      setGender(user.gender || "");
    }
  }, [user]);

  function handlegender(e) {
    setGender(e.target.value);
  }

  const getData = async () => {
    try {
      setError("");

      const res = await axios.patch(
        BASE_URL+"/profile/update",
        {
          firstName,
          lastName,
          photourl,
          about,
          age,
          gender
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      setToast(true);

      setTimeout(() => {
        setToast(false);
      }, 2000);

    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      {!preview ? (
        <div className="flex justify-center">
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-96 border mt-6 p-10">

            <h1 className="text-center text-xl font-medium">Profile Update</h1>

            {error && (
              <p className="text-red-500 text-center mb-2">{error}</p>
            )}

            <label className="label">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input"
              placeholder="Enter a Name"
            />

            <label className="label">LastName</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input"
              placeholder="Enter a Name"
            />

            <label className="label">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="input"
              placeholder="Enter a age"
            />

            {/* keeping your structure, only removed real form submit behavior */}
            <div>
              <label className='label'>Gender</label>
              <select
                className="select validator"
                value={gender}
                onChange={handlegender}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
              <p className="validator-hint">Required</p>
            </div>

            <label className="label">PhotoUrl</label>
            <input
              type="text"
              value={photourl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="input"
              placeholder="Enter a photourl"
            />

            <label className="label">About</label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="input"
              placeholder="Enter a about"
            />

            <div className='flex justify-between'>
              <button
                type="button"
                className="btn btn-neutral bg-blue-500 mt-4"
                onClick={getData}
              >
                Update
              </button>

              <button
                type="button"
                className="btn btn-neutral bg-blue-500 mt-4"
                onClick={() => setPreview(true)}
              >
                Preview
              </button>
            </div>

          </fieldset>
        </div>
      ) : (
        <div className='flex justify-center mt-10 mb-6'>
          <div className="card bg-base-300 w-96 shadow-sm">
            <figure>
              <img
                src={photourl}
                alt="userPic"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{firstName} {lastName}</h2>
              <div className='flex justify-around'>
                <p>Age:{age}</p>
                <p>Gender:{gender}</p>
              </div>
              <p>{about}</p>
              <div className="card-actions justify-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setPreview(false)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>Profile Updated Successfully</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
