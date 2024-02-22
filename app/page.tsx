import Dashboard from "@/Components/Main/Dashboard";
import Sidebar from "@/Components/Sidebar/Sidebar";

export default function Home() {
  return (
    <section className="">
      <div className="flex h-full">
        <div className="border-r sticky hidden md:block top-0 h-full whitespace-nowrap">
          <Sidebar />
        </div>
        <Dashboard />
      </div>
    </section>
  );
}
