interface ArticleProps {
  item: string;
  title: string;
  description: string;
}

export const Article = ({ item, title, description }: ArticleProps) => {
  return (
    <div className="flex flex-col  lg:gap-6 gap-4 py-6">
      <div className=" flex gap-4">
        <label className="bg-[var(--BrightRed)] text-white text-[14px] lg:text-base w-[70px] h-[40px] lg:w-[80px] lg:h-[40px] rounded-full flex items-center justify-center">
          {item}
        </label>
        <h3 className="font-bold pt-2">{title}</h3>
      </div>
      <p className="text-[var(--DarkGrayishBlue)] text-[12px] lg:text-[14px] max-w-[350px] lg:w-[450px] ">
        {description}
      </p>
    </div>
  );
};
