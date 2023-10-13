export const getDevice = (userAgent) => {
  const isMobile = /(Mobile|Android|iPhone|iPad)/i.test(userAgent) || false;

  return { isMobile };
};
