import axios from "axios";
import React, { useEffect, useState } from "react";

const Post = (props) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const postApiData = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      );
      const postApiComment = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.id}`
      );
      setPosts(postApiData.data);
      setComments(postApiComment.data);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-3 lg:-mx-3">
          <div class="py-2 align-middle inline-block min-w-full sm:px-3 lg:px-3">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <h1 className="w-full text-left text-white text-lg px-3 py-3 h-14 bg-red-400">
                All Comments of User Id = {props.match.params.id}
              </h1>
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-yellow-400	">
                  <tr>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-s font-bold	 text-black	 uppercase tracking-wider"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-s font-bold	 text-black	 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-s font-bold	 text-black	 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-s font-bold	 text-black	 uppercase tracking-wider"
                    >
                      Comments
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y bg-green-400">
                  {comments.map((data) => {
                    return (
                      <tr>
                        <td class="px-4 py-4 ">{data.id}</td>
                        <td class="px-4 py-4 ">{data.name}</td>
                        <td class="px-4 py-4 ">{data.email}</td>
                        <td class="px-4 py-4 ">{data.body}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
