export const TitleHeader = ({ title }: { title: string }) => {
  return (
    <div className=" container flex-col w-[80%]">
      <div className="text-center flex text-[#2BA84A] mb-2">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <hr className="border-t-2 border-2 border-[#774936]" />
    </div>
  );
};

export default TitleHeader;
