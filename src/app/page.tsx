import SideBar from "../components/SideBar";
import ContentContainer from "../components/ContentContainer";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <ContentContainer />
    </div>
  );
}
