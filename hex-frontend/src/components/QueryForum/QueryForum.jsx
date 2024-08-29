import React from 'react';

function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r bg-background p-6 sm:flex">
      <div className="mb-6 text-lg font-semibold">Forum Categories</div>
      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
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
            className="h-5 w-5"
          >
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
          </svg>
          General Discussion
        </a>
        <a
          className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          href="#"
        >
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
            className="h-5 w-5"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          Programming
        </a>
        <a
          className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          href="#"
        >
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
            className="h-5 w-5"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
          </svg>
          Books & Literature
        </a>
        <a
          className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          href="#"
        >
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
            className="h-5 w-5"
          >
            <circle cx="8" cy="18" r="4"></circle>
            <path d="M12 18V2l7 4"></path>
          </svg>
          Music & Arts
        </a>
        <a
          className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          href="#"
        >
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
            className="h-5 w-5"
          >
            <line x1="6" x2="10" y1="12" y2="12"></line>
            <line x1="8" x2="8" y1="10" y2="14"></line>
            <line x1="15" x2="15.01" y1="13" y2="13"></line>
            <line x1="18" x2="18.01" y1="11" y2="11"></line>
            <rect width="20" height="12" x="2" y="6" rx="2"></rect>
          </svg>
          Gaming
        </a>
      </nav>
    </aside>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <a className="lg:hidden" href="#">
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
          className="h-6 w-6"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
        <span className="sr-only">Toggle sidebar</span>
      </a>
      {/* Logo Section */}
      <a href="/" className="flex items-center gap-2">
        <img src="src/assets/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-semibold">HexCode</span>
      </a>
      <div className="relative flex-1">
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
          className="flex h-10 border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md bg-muted pl-8 pr-4 focus:bg-background"
          placeholder="Search forums..."
          type="search"
        />
      </div>
      <button className="flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 active:bg-gray-700 h-10 rounded-lg px-4 py-2 shadow-lg transform transition-transform hover:scale-105">
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

    </header>
  );
}

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
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Welcome to the Forum
        </h3>
        <p className="text-sm text-muted-foreground">
          Discuss a wide range of topics with our community.
        </p>
      </div>
      <div className="p-6">
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
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Table />
        </main>
      </div>
    </div>
  );
}

export default QueryForum;
