const scrollTo = (ref) => {
  if (!ref.current) return;

  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

export default scrollTo;
