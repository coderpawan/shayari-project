import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Upload = () => {
  const [post, setPost] = useState(false);
  const [videos, setVideos] = useState(false);
  const [audios, setAudios] = useState(false);

  const handlePost = () => {
    setPost(true);
    setAudios(false);
    setVideos(false);
  };
  const handleVideos = () => {
    setVideos(true);
    setPost(false);
    setAudios(false);
  };
  const handleAudios = () => {
    setAudios(true);
    setPost(false);
    setVideos(false);
  };
  return (
    <div>
      <Navbar />
      <div class="flex w-full bg-blue-400">
        <ul class="mt-48 max-w-sm mx-48">
          <li class="relative mt-8" onClick={handlePost}>
            <input
              class="sr-only peer"
              type="radio"
              value="yes"
              name="answer"
              id="answer_yes"
            />
            <label
              class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-700 peer-checked:ring-2 peer-checked:border-transparent"
              for="answer_yes"
            >
              Upload Posts
            </label>

            {/* <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
              👍
            </div> */}
          </li>

          <li class="relative mt-8" onClick={handleVideos}>
            <input
              class="sr-only peer"
              type="radio"
              value="no"
              name="answer"
              id="answer_no"
            />
            <label
              class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-700 peer-checked:ring-2 peer-checked:border-transparent"
              for="answer_no"
            >
              Upload Videos
            </label>

            {/* <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
              👎
            </div> */}
          </li>

          <li class="relative mt-8" onClick={handleAudios}>
            <input
              class="sr-only peer"
              type="radio"
              value="maybe"
              name="answer"
              id="answer_maybe"
            />
            <label
              class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-700 peer-checked:ring-2 peer-checked:border-transparent"
              for="answer_maybe"
            >
              Upload Audios
            </label>

            {/* <div class="absolute hidden w-5 h-5 peer-checked:block top-5 -right-10">
              🤔
            </div> */}
          </li>
        </ul>

        <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Post your shayaries
          </h1>
          <form action="/" method="post">
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="first_name"
              >
                First Name
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="last_name"
              >
                Last Name
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="text"
                name="last_name"
                id="last_name"
              />
            </div>
            <div class="flex flex-col mb-4">
              <label class="mb-2 font-bold text-lg text-gray-900" for="email">
                Phone Number
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                name="email"
                id="email"
              />
            </div>
            <div class="flex flex-col mb-4">
              <label class="mb-2 font-bold text-lg text-gray-900" for="email">
                Email
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Password
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Confirm Password
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Write Your Shayari
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="password"
                name="password"
                id="password"
                placeholder="Line 1"
              />
              <input
                class="border py-2 px-3 text-grey-800 mt-2"
                type="password"
                name="password"
                id="password"
                placeholder="Line 2"
              />
              <input
                class="border py-2 px-3 text-grey-800 mt-2"
                type="password"
                name="password"
                id="password"
                placeholder="Line 3"
              />
              <input
                class="border py-2 px-3 text-grey-800 mt-2"
                type="password"
                name="password"
                id="password"
                placeholder="Line 4"
              />
            </div>
            {videos ? (
              <div>
                <label class="mb-2 font-bold text-lg text-gray-900">
                  Upload your Video
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="True"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">MP4 up to 5MB</p>
                  </div>
                </div>
              </div>
            ) : null}
            {audios ? (
              <div>
                <label class="mb-2 font-bold text-lg text-gray-900">
                  Upload your Audio
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="True"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">MP3 up to 2MB</p>
                  </div>
                </div>
              </div>
            ) : null}
            {post ? null : null}

            <button
              class="block bg-teal-400 hover:bg-teal-600 text-white uppercase mt-8 text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Upload;
