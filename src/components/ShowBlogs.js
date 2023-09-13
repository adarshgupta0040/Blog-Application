import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

export default function ShowBlogs(props) {

  const updatedBlogs = useSelector((state) => {
    return state.blogs.items
  })

  console.log(updatedBlogs, "Blog")

  return (
    <div className="container">
      <h4 className="text-center my-4">All Recent Blogs</h4>
      <div className="row">
        {updatedBlogs.length === 0 ? (
          <div className="col text-center">
            <h3 className='color: text-primary' >No Blogs! Add Post to Display 📰🖊️</h3>
          </div>
        ) : (
          updatedBlogs.map((blog, index) => (
            <div className="col-md-4 mb-4" key={blog.title}>
              <div
                style={{
                  // Add your background style here, e.g., background color or image
                  background: index % 2 === 0 ? '#f0f0f0' : 'linear-gradient(to bottom, #ffcccb, #ff9999)',
                  padding: '20px',
                  borderRadius: '8px',
                  insetBlockEnd: '20px', // Add bottom margin for spacing between blogs
                }}
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Category: {blog.category}
                    </h6>
                    <p className="card-text">
                      {blog.content.length > 42
                        ? blog.content.substring(0, 42) + ' ...'
                        : blog.content}
                    </p>
                    <Link
                      to={`/blog/${blog.title}`}
                      className="btn btn-info"
                    >
                      View Post
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}