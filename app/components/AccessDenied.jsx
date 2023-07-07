"use client";

import Link from "next/link";

export default function AccessDenied() {
  return (
    <>
      <html className="h-full w-full">
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">403(Writing sample text to check the PR issue)</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Access Denied(Writing sample text to check the PR issue)
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, Please Login and try again.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={"/login"}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </Link>
            </div>
          </div>
        </main>
      </html>
    </>
  );
}
