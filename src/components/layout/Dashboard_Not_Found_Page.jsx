import { Frown } from "lucide-react";

const Dashboard_Not_Found_Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-white p-10 rounded-xl shadow-sm">
      <Frown className="w-24 h-24 text-gray-300 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-700">Page Not Found</h1>
      <p className="mt-2 text-gray-500">
        Sorry, the content you are looking for does not exist or may have been
        moved.
      </p>
    </div>
  );
};

export default Dashboard_Not_Found_Page;
