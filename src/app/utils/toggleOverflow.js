export const toggleOverflow = (state) => {
  const bodyClassList = document.body.classList;

  if (state && bodyClassList.contains("overflow-y-scroll")) {
    bodyClassList.replace("overflow-y-scroll", "overflow-y-hidden");
  } else if (!state && bodyClassList.contains("overflow-y-hidden")) {
    bodyClassList.replace("overflow-y-hidden", "overflow-y-scroll");
  }
};
