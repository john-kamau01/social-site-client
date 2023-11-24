import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  useEffect(() => {
    fetchData();
    fetchUsers();
    console.log(users);
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8081/feed");
      setData(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8081/users");
      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="container py-5">
      <div className="row rounded border border-1 mx-1">
        <div className="col-md-8 col-xs-12 p-4 border-r-1">
          <h4 className="mb-3">Feed Section</h4>
          {currentItems.map((post) => {
            // console.log(post);
            return (
              <div key={post.id} className="p-3 mb-2 border border-1 rounded">
                <p>
                  <b>Title:</b> {post.title}
                </p>
                <p>
                  <b>Content:</b> {post.body}
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-sm btn-danger">Like</button>

                  <span>Author: {post.userId}</span>
                </div>
              </div>
            );
          })}

          <div className="mt-3 d-flex gap-5">
            <button
              onClick={handlePreviousPage}
              className="btn btn-sm btn-primary"
            >
              Previous
            </button>
            <button onClick={handleNextPage} className="btn btn-sm btn-primary">
              Next
            </button>
          </div>
        </div>

        <div className="col-md-4 col-xs-12 p-4">
          <h4>Users</h4>

          {users.map((user) => {
            return (
              <div key={user.id} className="border border-1 rounded mb-3 p-3">
                <p>
                  <b>Name:</b> {user.name}
                </p>
                <button className="btn btn-sm btn-success">Follow</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
