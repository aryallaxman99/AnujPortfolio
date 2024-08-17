import Headlines from "@/Components/Typography/Headlines";

import textData from "@/texts/colorAndTypography.json";

const ColorAndTypography = () => {
  return (
    <div className="pl-[86px]">
      <div className="py-24">
        <div>
          <h1 className="font-bold text-center leading-[42px] pb-9">
            Color & Typography
          </h1>
          <div className="w-[1332px] h-[628px] gap-x-[150px] grid grid-cols-4 ">
            {Object.entries(textData).map(([key, value]) => (
              <div className="mt-8" key={key}>
                <div
                  className="w-[253px] h-[180px] rounded"
                  style={{ backgroundColor: key }}
                />
                <div className="text-xl leading-8 mt-1">
                  <p className="font-semibold">{value[0]}</p>
                  <p className="text-secondaryTextColor ">{value[1]}</p>
                  <p className="text-secondaryTextColor ">{key}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pl-3 flex gap-44 text-center text-white font- mb-12">
        <div
          className="h-[360px] w-[557px] pt-[113px] rounded-[22px]"
          style={{ backgroundColor: "#DC4E4E" }}
        >
          <span className="text-[78px] leading-[117px] text-1stroke font-medium">
            Poppins
          </span>
        </div>
        <div
          className="h-[360px] w-[557px] pt-[121px] rounded-[22px]"
          style={{ backgroundColor: "#08368E" }}
        >
          <span className="text-[78px] leading-[117px] text-2stroke font-medium">
            Montserrat
          </span>
        </div>
      </div>
      <div className="pl-12 mb-10">
        <div className="flex">
          <div>
            <p className="text-[49.25px] leading-[73.88px] font-medium mb-5">
              Poppins
            </p>
            <p className="text-[27.7px] leading-[41.56px]">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
            </p>
          </div>
          <div className="w-[646.12px] h-[161px] flex gap-16 pl-[200px] mt-10">
            <div className="h-[148px] w-[108px]">
              <p className="text-[80px] font-normal">Aa</p>
              <p className="text-secondaryTextColor text-xl text-center">
                Regular
              </p>
            </div>
            <div className="h-[148px] w-[108px]">
              <p className="text-[80px] font-medium">Aa</p>
              <p className="text-secondaryTextColor text-xl text-center">
                Medium
              </p>
            </div>
            <div className="h-[148px] w-[108px]">
              <p className="text-[80px] font-semibold">Aa</p>
              <p className="text-secondaryTextColor text-xl text-center">
                Semi-Bold
              </p>
            </div>
            <div className="h-[148px] w-[108px]">
              <p className="text-[80px] font-bold">Aa</p>
              <p className="text-secondaryTextColor text-xl text-center">
                Bold
              </p>
            </div>
          </div>
        </div>
      </div>
      <Headlines />
    </div>
  );
};

export default ColorAndTypography;
