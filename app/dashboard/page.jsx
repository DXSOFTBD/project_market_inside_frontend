import DashboardContainer from "@/components/Dashboard/DashboardContainer";
import DashboardLeftSideBar from "@/components/Layout/DashboardLeftSideBar";

const page = () => {
  return (
    <div className="flex w-full relative">
      <div className="relative left-0 top-0">
        <div className="bg-gray-100 absolute h-screen md:static z-[10000] w-[250px] shadow-2xl">
          <DashboardLeftSideBar />
        </div>
      </div>

      <DashboardContainer />
    </div>
  );
};

export default page;
