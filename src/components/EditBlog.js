import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBlog } from "../redux/action/allAction";

function EditBlog() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { title } = useParams();

    // Get the specific blog post based on the title parameter from Redux state
    const selectedBlog = useSelector((state) =>
        state.blogs.items.find((blog) => blog.title === title)
    );

    const { category, content } = selectedBlog;

    const [inputField, setInputField] = useState({
        title: title,
        category: category,
        content: content
    });

    const inputHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const updateButton = async () => {

        // Dispatch the updateBlog action with the updated inputField
        dispatch(updateBlog(inputField))

        // Navigate back to the homepage or any other desired action
        navigate('/')
    }

    return (
        <div className="container my-3">
            <h4 className="text-center">Edit your Blog</h4>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={inputField.title} // Bind value to inputField.title
                    onChange={inputHandler}
                    readOnly
                />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                <select
                    className="form-control"
                    id="category"
                    name="category"
                    value={inputField.category} // Bind value to inputField.category
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
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">
                    Content
                </label>
                <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    rows="5"
                    value={inputField.content} // Bind value to inputField.content
                    onChange={inputHandler}
                    required
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={updateButton}>
                Update
            </button>
        </div>
    );
}

export default EditBlog;