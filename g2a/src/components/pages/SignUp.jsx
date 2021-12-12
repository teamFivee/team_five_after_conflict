import axios from "axios";
// import cloudinary from 'cloudinary'
import React , {useState} from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
 function SignUp (){
        
     var history = useHistory();
     var [user , setuser] = useState({})
     var [imageSelected,setImageSelected]=useState("")

    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "lsom30en");
        axios
            .post(
                "https://api.cloudinary.com/v1_1/ben-arous/image/upload",
                formData
            )
            .then((res) => {
                var x = user;
                x.img = res.data.url;
                setuser(x);
                console.log(user);
            });
    };
    var handleChange = (e) => {
        var x = user;
        x[e.target.name] = e.target.value;
        console.log(x);
        setuser(x);
    };

    var singnup=()=>{
    
        axios.post('http://localhost:5000/api/signup',user).then(response=>{
            if(response.data="user created successfully")
            {
            //   history.push("/login");
            console.log(response)
            }
            else{
                 
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div
                            className="card bg-dark text-white"
                            style={{ borderRadius: "1rem" }}
                        >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">
                                        SignUp
                                    </h2>
                                    <p className="text-white-50 mb-5">
                                        Please enter your userName and password!
                                    </p>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            name="userName"
                                            type="name"
                                            onChange={handleChange}
                                            type="email"
                                            className="form-control form-control-lg"
                                        />
                                        <label className="form-label">
                                            User Name
                                        </label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="email"
                                            id="typeEmailX"
                                            className="form-control form-control-lg"
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="typeEmailX"
                                        >
                                            Email
                                        </label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            name="password"
                                            type="password"
                                            id="typePasswordX"
                                            className="form-control form-control-lg"
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="typePasswordX"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <input
                                        className="btn btn-secondary"
                                        type="file"
                                        onChange={(e) => {
                                            setImageSelected(e.target.files[0]);
                                        }}
                                    />{" "}
                                    <button
                                        className="btn btn-outline-light btn-lg px-5"
                                        onClick={uploadImage}
                                    >
                                        upload Image
                                    </button>
                                    <button
                                        className="btn btn-outline-light btn-lg px-5"
                                        type="submit"
                                        onClick={singnup}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <div>
                                    <p className="mb-0">
                                        Don't have an account?{" "}
                                        <a
                                            href="/sign-up"
                                            className="text-white-50 fw-bold"
                                        >
                                            Sign Up
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
