// Resources
import { headers } from "next/headers";
// Component
import HomeMainComponent from "./components/mainComponents/homeMainComponent";
// Utils
import { getDevice } from "@utils/getDevice";

const HomePage = () => {
  const userAgent = String(headers().get("user-agent"));
  const { isMobile } = getDevice(userAgent);

  return <HomeMainComponent isMobile={isMobile} />;
};

export default HomePage;
