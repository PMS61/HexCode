import React from 'react';
import Sidebar from '../Dashboard/Sidebar';

function Table() {
  const tableData = [
    {
      topic: "How to learn React?",
      category: "Programming",
      views: "1,234",
      replies: "24",
      activity: "2 hours ago",
    },
    {
      topic: "What are your favorite books?",
      category: "Books & Literature",
      views: "987",
      replies: "18",
      activity: "5 hours ago",
    },
    {
      topic: "Best practices for REST APIs",
      category: "Programming",
      views: "1,110",
      replies: "30",
      activity: "1 day ago",
    },
  ];

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-4 sm:p-6">
        <h3 className="whitespace-nowrap text-xl sm:text-2xl font-semibold leading-none tracking-tight">
          Welcome to the Forum
        </h3>
        <p className="text-sm text-muted-foreground">
          Discuss a wide range of topics with our community.
        </p>
      </div>
      <div className="p-4 sm:p-6">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="bg-muted">
              <tr className="border-b">
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground">
                  Topic
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground">
                  Category
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground">
                  Views
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground">
                  Replies
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground">
                  Activity
                </th>
              </tr>
            </thead>
            <tbody className="border-b font-medium">
              {tableData.map((item, index) => (
                <tr key={index} className="border-b transition-colors hover:bg-muted">
                  <td className="h-12 px-2">
                    <a
                      className="text-sm font-medium leading-none underline-offset-4 hover:underline"
                      href="#"
                    >
                      {item.topic}
                    </a>
                  </td>
                  <td className="h-12 px-2">{item.category}</td>
                  <td className="h-12 px-2">{item.views}</td>
                  <td className="h-12 px-2">{item.replies}</td>
                  <td className="h-12 px-2">{item.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function QueryForum() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 sm:ml-64 p-4 pt-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 space-y-4 sm:space-y-0">
          <div className="relative flex-1 max-w-xs w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              className="h-10 w-full border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-muted pl-8 pr-4 focus:bg-background"
              placeholder="Search forums..."
              type="search"
            />
          </div>
          <button className="flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 active:bg-gray-700 h-10 rounded-lg px-4 py-2 shadow-lg transform transition-transform hover:scale-105 sm:ml-4 w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 mr-2"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <span>New Thread</span>
          </button>
        </div>
        <Table />
      </main>
    </div>
  );
}

export default QueryForum;