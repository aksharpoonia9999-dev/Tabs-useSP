import { useSearchParams } from "react-router-dom";
import Icons from "./common/Icons";
import ClockImg from "../assets/clock.svg";
import BeforeAfter from "./BeforeAfter";

const FilterTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const Data = [
    {
      word: "Bathroom",
      bottomWord: "bathroom",
      title: "Luxury Bathroom Renovation",
      description:
        "A complete bathroom renovation featuring elegant stone finishes, modern fixtures, warm lighting, and a clean minimalist design.",
      duration: "5 Weeks",
      location: "Zurich, Switzerland",
      budget: "CHF 85’000",
    },
    {
      word: "Kitchen",
      bottomWord: "kitchen",
      title: "Modern Kitchen Transformation",
      description:
        "A complete kitchen renovation transforming an \n unfinished interior into a bright, modern living \n space with custom cabinetry, integrated \n appliances, warm oak surfaces, and minimalist detailing.",
      duration: "8 Weeks",
      location: "Munich, Germany",
      budget: "CHF 162’000",
    },
    {
      word: "Bedroom",
      bottomWord: "bedroom",
      title: "Contemporary Bedroom Makeover",
      description:
        "A peaceful bedroom transformation with custom wardrobes, soft neutral finishes, ambient lighting, and carefully selected materials for everyday comfort.",
      duration: "4 Weeks",
      location: "Basel, Switzerland",
      budget: "CHF 48’000",
    },
    {
      word: "Terrace",
      bottomWord: "terrace",
      title: "Modern Outdoor Terrace",
      description:
        "An underused terrace redesigned with durable outdoor flooring, refined finishes, integrated lighting, and a welcoming space for relaxing and entertaining.",
      duration: "6 Weeks",
      location: "Vienna, Austria",
      budget: "CHF 72’000",
    },
    {
      word: "Living Room",
      bottomWord: "living-room",
      title: "Elegant Living Room Redesign",
      description:
        "A complete living room refresh combining natural textures, bespoke storage, warm lighting, and contemporary finishes to create a comfortable and inviting interior.",
      duration: "7 Weeks",
      location: "Geneva, Switzerland",
      budget: "CHF 96’000",
    },
  ];

  const requestedRoom = searchParams.get("room") || "kitchen";

  const activeTab = Data.some((obj) => obj.bottomWord === requestedRoom)
    ? requestedRoom
    : "kitchen";

  const activePlace = Data.find((obj) => obj.bottomWord === activeTab);

  const handleTab = (bottomWord) => {
    setSearchParams({ room: bottomWord });
  };

  return (
    <section className="min-h-fit px-4">
      <div className="container mx-auto w-full max-w-7xl">
        <div className="row flex flex-col items-center justify-center py-[clamp(40px,7.5vw,118px)]">
          <div className="top flex w-full items-center justify-center gap-[clamp(24px,3.6vw,111px)] max-lg:flex-col max-lg:items-start">
            <div className="left w-full max-w-162.5">
              <p className="text-body text-[clamp(10px,0.8vw,14px)] font-semibold leading-160 tracking-[10%]">
                BUILT PROJECTS. EARNED TRUST.
              </p>

              <h1 className="w-full text-black font-medium text-[clamp(28px,3.1vw,48px)] leading-130">
                Construction &amp; Renovation Projects Done the Right Way.
              </h1>
            </div>

            <div className="right w-full max-w-129.75">
              <p className="w-full text-body font-normal text-[clamp(13px,1.15vw,18px)] leading-160">
                Explore completed construction and renovation projects delivered
                with transparent planning and trusted execution.
              </p>

              <button className="mt-[clamp(16px,1.8vw,28px)] h-[clamp(40px,3.65vw,56px)] min-w-[clamp(140px,12.7vw,194px)] rounded-50 border border-solid border-black text-[clamp(12px,1.15vw,18px)] font-semibold leading-150 text-black cursor-pointer hover:text-white hover:bg-black active:scale-90 transition-all duration-200 ease-in-out">
                View All Projects
              </button>
            </div>
          </div>

          <div className="bottom mt-[clamp(32px,5.2vw,80px)] w-full">
            <div className="w-full overflow-x-auto scrollbar-none">
              <div className="grid w-full min-w-125 grid-cols-5 min-[320px]:min-w-125">
                {Data.map((obj) => (
                  <button
                    key={obj.bottomWord}
                    onClick={() => handleTab(obj.bottomWord)}
                    className={`min-w-0 h-[clamp(38px,5vw,46px)] px-1 text-black flex items-center justify-center whitespace-nowrap text-[clamp(16px,2.5vw,24px)] leading-none cursor-pointer border-b-2 border-solid transition-all duration-200 ${
                      activeTab === obj.bottomWord
                        ? "border-black"
                        : "border-black/8"
                    }`}
                  >
                    {obj.word}
                  </button>
                ))}
              </div>
            </div>

            <div className="content mt-[clamp(28px,3.25vw,50px)] flex items-center justify-between gap-[clamp(24px,4.32vw,66.5px)] max-lg:flex-col max-lg:items-start">
              <div className="left flex w-full max-w-105 flex-col">
                <h2 className="text-black font-medium text-[clamp(22px,2.1vw,32px)] leading-140">
                  {activePlace.title}
                </h2>

                <p className="mt-3 text-body font-normal whitespace-pre-line text-[clamp(12px,1.18vw,18px)] leading-160">
                  {activePlace.description}
                </p>

                <div className="mt-6 flex w-full flex-wrap gap-[clamp(12px,1.3vw,20px)]">
                  <div className="flex w-full max-w-30.75 items-center gap-2.5">
                    <div className="icon shrink-0">
                      <img height="22" width="22" src={ClockImg} alt="" />
                    </div>

                    <p className="text-black font-medium text-[clamp(12px,1.3vw,20px)] leading-140">
                      {activePlace.duration}
                    </p>
                  </div>

                  <div className="flex w-full max-w-51 items-center gap-2.5">
                    <div className="icon shrink-0">
                      <Icons icon="location" />
                    </div>

                    <p className="text-black font-medium text-nowrap text-[clamp(12px,1.3vw,20px)] leading-140">
                      {activePlace.location}
                    </p>
                  </div>

                  <div className="flex w-full max-w-41.25 items-center gap-2.5">
                    <div className="icon shrink-0">
                      <Icons icon="card" />
                    </div>

                    <p className="text-black font-medium text-[clamp(12px,1.3vw,20px)] leading-140">
                      {activePlace.budget}
                    </p>
                  </div>
                </div>
              </div>

              <div className="right w-full max-w-148.5 min-w-0">
                <BeforeAfter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterTabs;
