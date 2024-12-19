type BackgroundElementsProps = {
  isVisible: boolean;
};

export default function BackgroundElements({
  isVisible,
}: BackgroundElementsProps) {
  return (
    <>
      <div
        className={`absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "0ms" }}
      />
      <div
        className={`absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "200ms" }}
      />
      <div
        className={`absolute top-1/4 right-10 w-24 h-24 border-2 border-blue-500/20 rotate-45 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "400ms" }}
      />
      <div
        className={`absolute top-1/3 left-0 h-1 bg-gradient-to-r from-blue-500/50 to-transparent transition-all duration-1000 ${
          isVisible ? "w-16" : "w-0"
        }`}
        style={{ transitionDelay: "600ms" }}
      />
      <div
        className={`absolute top-1/3 right-0 h-1 bg-gradient-to-l from-purple-500/50 to-transparent transition-all duration-1000 ${
          isVisible ? "w-16" : "w-0"
        }`}
        style={{ transitionDelay: "600ms" }}
      />
    </>
  );
}
