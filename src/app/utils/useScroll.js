export const useScroll = () => {
  const bodyClassList = document.body.classList;

  if (bodyClassList.contains("overflow-y-scroll")) {
    bodyClassList.replace("overflow-y-scroll", "overflow-y-hidden");
  } else if (bodyClassList.contains("overflow-y-hidden")) {
    bodyClassList.replace("overflow-y-hidden", "overflow-y-scroll");
  }
};
