const Shimmer = () => {
    return (
    <div className="flex justify-center flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-56 h-56 m-8 border-2 p-2 hover:shadow-2xl bg-gray-300"></div>
        ))}
    </div>
  );
}

export default Shimmer;