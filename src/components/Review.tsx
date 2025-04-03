// interface userProp
interface Props {
  image: string;
  name: string;
  comment: string;
}

export const Review = ({ image, name, comment }: Props) => {
  return (
    <div className="flex flex-col items-center gap-6 px-4">
      <div className=" w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] bg-red-500 rounded-full ">
        <img src={image} alt="" />
      </div>
      <label className="font-bold text-[14px] lg:text-base">{name}</label>
      <p className="w-[290px] lg:w-[480px] text-[14px] lg:text-base text-center text-[var(--DarkGrayishBlue)] ">
        {comment}
      </p>
    </div>
  );
};
