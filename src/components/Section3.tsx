import { Review } from "./Review";

export const Section3 = () => {
  return (
    <div className="flex flex-col items-center gap-20 overflow-hidden">
      <h2 className="text-[24px] lg:text-[32px] font-bold text-center">
        What they've said
      </h2>
      <div className="flex w-full lg:gap-12 scroll-wrapper">
        <div className="flex scroll-content">
          <Review
            image="/assets/images/avatar-anisha.png"
            name="Anisha Li"
            comment="Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times feeps everyone motivated."
          ></Review>
          <Review
            image="/assets/images/avatar-ali.png"
            name="Ali Bravo"
            comment="We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
          ></Review>
          <Review
            image="/assets/images/avatar-richard.png"
            name="Richard Watts"
            comment="Manage allows us to provide structure and process. It feeps us organized and focused. I can't stop recommending them to everyone i talk to!"
          ></Review>
          <Review
            image="/assets/images/avatar-shanai.png"
            name="Shanai Gough"
            comment="Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team insync without being intrusive."
          ></Review>

          <Review
            image="/assets/images/avatar-anisha.png"
            name="Anisha Li"
            comment="Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times feeps everyone motivated."
          ></Review>
          <Review
            image="/assets/images/avatar-ali.png"
            name="Ali Bravo"
            comment="We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
          ></Review>
          <Review
            image="/assets/images/avatar-richard.png"
            name="Richard Watts"
            comment="Manage allows us to provide structure and process. It feeps us organized and focused. I can't stop recommending them to everyone i talk to!"
          ></Review>
          <Review
            image="/assets/images/avatar-shanai.png"
            name="Shanai Gough"
            comment="Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team insync without being intrusive."
          ></Review>
        </div>
      </div>
      <button className="font-bold bg-[var(--BrightRed)] w-[160px] h-[50px] rounded-full text-white cursor-pointer">
        Get Started
      </button>
    </div>
  );
};
