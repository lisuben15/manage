import { Article } from "./Article";

export const Section2 = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between px-2 md:px-10 2xl:px-30  items-center lg:items-start">
      <div className="flex w-full flex-col gap-8 items-center lg:items-start pl-0 lg:pl-20 pt-6">
        <h2 className="text-[24px] lg:text-[32px] font-bold text-[var(--VeryDarkBlue)] leading-tight w-[250px] lg:w-[450px] text-center lg:text-left">
          What's different about Manage?
        </h2>
        <p className="text-[var(--DarkGrayishBlue)] w-[300px] lg:w-[350px] text-[14px] lg:text-base lg:text-left text-center">
          Manage provides all the functionality your team needs. Without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="flex w-full flex-col items-center">
        <Article
          item={"01"}
          title="Track company-wide progress"
          description="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        ></Article>
        <Article
          item={"02"}
          title="Advanced built-in reports"
          description="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
        ></Article>
        <Article
          item={"03"}
          title="Everything you need in one place"
          description="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
        ></Article>
      </div>
    </div>
  );
};
