import { Fragment, useEffect, useState } from "react";

import EditForm from "../Ui/EditForm";
function DataPosts() {
  const [openForm, setOpenForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [editPostDetails, setEditPostDetails] = useState("");
  // useEffect
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setTimeout(setPosts(data), 2000);
    };
    getPosts();
  }, []);


  // form visibility handler
  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };


  const addNewPostHandler = (post) => {
    setPosts([post, ...posts]);
  };

  const editPost = (post) => {
    const index = posts.findIndex((p) => p.id === editPostDetails.id);
    posts[index] = post;
    setPosts([...posts]);
    setOpenForm(false);
    setEditPostDetails("");
  };

  return (
    <Fragment>
      
      <div
        style={{
        
          margin: "0.3rem",
          position: "sticky",
          top: 0,
          zIndex: 1,
        
        }}
      >
        <div spacing={2} className="d-flex justify-content-center  p-2 text-dark">
          <button onClick={handleOpenForm} className="btn btn-dark ms-1">
            {!openForm ? `Add Post` : `Close`}
          </button>
        </div>
      </div>

    
      {/* post edit form */}
      {openForm && (
        <EditForm
          closeModal={setOpenForm}
          addNewPost={addNewPostHandler}
          postDetails={editPostDetails}
          editPost={editPost}
        />
      )}

      {/* post list */}
      
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    
    </tr>
  </thead>
  <tbody>
  {posts.map((post) => (
    <tr>
      <th scope="row">{post.id}</th>
      <td>{post.title}</td>
      <td>{post.body}</td>
      <td>
      <button
            className="btn btn-dark ms-1"
              type="submit"
              onClick={() => {
                setOpenForm(true);
                setEditPostDetails(post);
              }}
            >
              Edit
            </button>
      </td>
      <td>
      <button
            className="btn btn-dark ms-2 "
              onClick={() => {
                setPosts(posts.filter((p) => p.id !== post.id));
                alert(`Post  "${post.title}" deleted`);
              }}
            >
              Delete
            </button>
      </td>

    </tr>
  ))}
  </tbody>
  
</table>













     
      
    </Fragment>
  );
}

export default DataPosts;