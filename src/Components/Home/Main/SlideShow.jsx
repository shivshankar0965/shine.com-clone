import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Image } from "@chakra-ui/react";
import styles from "./SlideShow.module.css";

export default function SlideShow() {
  const topSlides = [
    {
      src: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FMockinterview_top_companiesD.jpg&w=1920&q=75",
      link: "https://resume.shine.com/mock-interview",
    },
    {
      src: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FAmazon-Transaction-Risk-Investigator-Bengaluru-14Sept.gif&w=1920&q=75",
      link: "https://amazonvirtualhiring.hirepro.in/registration/incta/ju0f4/apply/?j=57394&e=13332",
    },
    {
      src: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FExidelife_desktop.png&w=1920&q=75",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdtlQ47SXBnUt5hzF-_gikghRDO9ieMpT6GxW9lkfDOSnn2PA/viewform",
    },
    {
      src: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FAmazon-Transaction-Risk-Investigator-Hyderabad-14-sept.gif&w=1920&q=75",
      link: "https://amazonvirtualhiring.hirepro.in/registration/incta/ju0f4/apply/?j=57396&e=13334",
    },
    {
      src: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FDesktop-Banner_2_pos_new.png&w=1920&q=75",
      link: "https://www.shine.com/hackathon",
    },
    {
      src: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fmint_d_banner.png&w=1920&q=75",
      link: "https://learning.shine.com/talenteconomy/mint-shine-talent-insights/job-index-report/?utm_source=Home_Page&utm_medium=Banner&utm_campaign=Desktop",
    },
    {
      src: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fwinter_d_home.png&w=1920&q=75",
      link: "https://www.shine.com/registration/parser/",
    },
  ];
  return (
    <>
      <Swiper
        speed={800}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        loop
        className={`mySwiper ${styles.swiper1}`}
      >
        {topSlides?.map((elm, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                cursor="pointer"
                src={elm.src}
                onClick={() => {
                  window.open(`${elm.link}`, "_blank");
                }}
              ></Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
