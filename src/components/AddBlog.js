import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addBlog } from "../redux/action/allAction";
import { useNavigate } from 'react-router-dom';

export default function AddBlog(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputField, setInputField] = useState({
        title: "",
        category: "",
        content: ""
    });

    const [errors, setErrors] = useState({}); // State to store validation errors

    const inputHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const errors = {};
        let isValid = true;

        // Validate title
        if (inputField.title.trim() === "") {
            errors.title = "Title is required";
            isValid = false;
        }

        // Validate category
        if (inputField.category === "") {
            errors.category = "Category is required";
            isValid = false;
        }

        // Validate content
        if (inputField.content.trim() === "") {
            errors.content = "Content is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const submitButton = async () => {
        if (validateForm()) {
            console.log(inputField);
            dispatch(addBlog(inputField));
            navigate('/');
        }
    };

    return (
        <div className="container my-3">
            <h4 className="text-center">What's going on in your mind?</h4>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={inputField.title}
                    onChange={inputHandler}
                    required
                />
                {errors.title && <div className="text-danger">{errors.title}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                {/* Dropdown menu for categories */}
                <select
                    className="form-control"
                    id="category"
                    name="category"
                    value={inputField.category}
                    onChange={inputHandler}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="Education">Education</option>
                    <option value="Story">Story</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Bugs/Error">Bugs/Error</option>
                    <option value="Jobs">Jobs</option>
                    <option value="Science">Science</option>
                    <option value="Technology">Technology</option>
                    <option value="Travel">Travel</option>
                    {/* ... other options ... */}
                </select>
                {errors.category && <div className="text-danger">{errors.category}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">
                    Content
                </label>
                <textarea
                    className="form-control"
                    id="content"
                    rows="5"
                    name="content"
                    value={inputField.content}
                    onChange={inputHandler}
                    required
                ></textarea>
                {errors.content && <div className="text-danger">{errors.content}</div>}
            </div>

            <button className="btn btn-primary" onClick={submitButton}>
                Add Blog
            </button>
        </div>
    );
}