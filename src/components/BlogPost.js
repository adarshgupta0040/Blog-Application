import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {deleteBlog} from '../redux/action/allAction'

export default function BlogPost() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { title } = useParams();

  // Get the specific blog post based on the title parameter from Redux state
  const selectedBlog = useSelector((state) =>
    state.blogs.items.find((blog) => blog.title === title)
  );

  // console.log(selectedBlog)

  // Handle likes, if needed
  const [likes, setLikes] = useState(3);
  const handleLike = () => {
    setLikes(likes + 1);
  };

  if (!selectedBlog) {
    navigate('/');
    return <h3 className='color: text-primary text-center'>Blog post not found.</h3>;
  }

  const { category, content } = selectedBlog;

  return (
    <div className="container d-flex justify-content-center my-5">
      <div className="card bg-light" style={{ inlineSize: '400px' }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Category: {category}</p>
          <p className="card-text">{content}</p>
          <button className="btn btn-primary" onClick={handleLike}>
            Like👍({likes})
          </button>
          <Link className="btn btn-warning mx-2" to={`/EditPost/${title}`}>
            Edit ✏️
          </Link>
          <Link to={`/home`}><button className="btn btn-danger" onClick={()=>dispatch(deleteBlog(title))}>Delete 🗑️</button></Link>
        </div>
      </div>
    </div>
  );
}