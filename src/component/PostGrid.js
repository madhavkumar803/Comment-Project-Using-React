import React from "react";
import { Link } from "react-router-dom";

function PostGrid({ data }) {
  return (
    <div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-3 lg:-mx-3">
          <div class="py-2 align-middle inline-block min-w-full sm:px-3 lg:px-3">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y">
                <thead class="bg-yellow-400">
                  <tr className=" text-black">
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-s font-bold whitespace-nowrap	 uppercase tracking-wider"
                    >
                      Post Id
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-s font-bold uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-s font-bold uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                {data.map((post) => (
                  <tbody class="bg-white divide-y  text-lg">
                    <tr className="bg-green-400 ">
                      <td class="px-4 py-4 ">
                        <div class="flex items-center">
                          {post.id}
                          {/* <div class="flex-shrink-0 h-10 w-10">{post.id}</div> */}
                        </div>
                      </td>
                      <td class="px-0 py-4 ">
                        <div class="text-sm text-gray-900">
                          <div class="ml-3">
                            <div class="text-medium font-medium text-gray-900">
                              {post.title}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td class="px-6 py-4 text-right text-sm font-medium">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <Link to={`/post/${post.id}`}>View</Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostGrid;
