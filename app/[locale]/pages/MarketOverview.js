"use client";
import React, { useCallback, useEffect, useState } from "react";
import Hero from "../components/common/Hero";
import New from "../components/blog/New";
import { useLocale, useTranslations } from "next-intl";
import { fetchAPI } from "../components/utilities/fetch-api";
import FallbackLoader from "../components/LoadingSpinner";
import dynamic from "next/dynamic";
import InfiniteScroll from "react-infinite-scroll-component";
import MarketOverViewNew from "../components/blog/MarketOverView";
import EmbeddedGoogleSheet from "../components/blog/EmbeddedGoogleSheet";
// const BlogList = dynamic(
//   () => import("../components/trendingTools/latestNews/blogList"),
//   {
//     loading: () => <FallbackLoader />,
//   }
// );

// const SingleMainBlog = dynamic(
//   () => import("../components/trendingTools/latestNews/singleMainBlog"),
//   {
//     loading: () => <FallbackLoader />,
//   }
// );
const MarketOverviewPage = () => {
   const t = useTranslations("tradingTools.marketOverView");
  // const locale = useLocale();
  // const [data, setData] = useState([]);
  // const [start, setStart] = useState(0);
  // const limit = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT);
  // const [loading, setLoading] = useState(false);
  // const [hasMore, setHasMore] = useState(true);

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  //     const path = `/blogs`;
  //     const urlParamsObject = {
  //       sort: { createdAt: "desc" },
  //       populate: {
  //         imageUrl: { populate: ["url"] },
  //         category: {
  //           only: ["name"],
  //         },
  //         author: {
  //           populate: "*",
  //         },
  //       },
  //       locale: locale == "zh-hans" ? "zh-Hans" : locale,
  //       filters: {
  //         category: 5,
  //       },
  //       pagination: {
  //         start: start,
  //         limit: limit,
  //       },
  //     };
  //     const options = { headers: { Authorization: `Bearer ${token}` } };
  //     const responseData = await fetchAPI(path, urlParamsObject, options);

  //     if (responseData?.meta?.pagination?.total == data?.length) {
  //       setHasMore(false);
  //       setLoading(false);
  //     } else {
  //       setHasMore(true);
  //     }
  //     if (start === 0) {
  //       setData(responseData?.data);
  //     } else {
  //       setData((prevData) => [...prevData, ...responseData.data]);
  //     }
  //     setStart(start + limit); // Update start for next fetch
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(); // Initial fetch
  // }, []);

  // const loadMoreData = () => {
  //   fetchData(); // Load more data on infinite scroll
  // };
  return (
    <>
      <Hero
        imageUrl="/trading/banner/market-overview.webp"
        title={t("bannerText.title")}
        description={t("bannerText.desc")}
      />
      <div className="inner-content py-5">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between mb-5">
            <div className="border border-[#DDD] rounded-xl md:mb-0 mb-5 md:mx-0 w-fit mx-auto">
            <h2 className="text-center py-4 border-b border-b-[#DDD] font-bold text-xl lg:text-2xl">{t("contentText.forex.title")}</h2>
            <div className="flex justify-around md:justify-between">
              <div className="flex flex-col border-r border-r-[#DDD]">
                <h3 className="text-center py-2 font-semibold text-lg lg:text-xl">{t("contentText.forex.heading1")}</h3>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.mon")}:</span> <span>00:00 - 23:59</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg"><span>{t("contentText.days.tuse")}:</span> <span>00:00 - 23:59</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.wed")}:</span> <span>00:00 - 23:59</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg"><span>{t("contentText.days.thurs")}:</span> <span>00:00 - 23:59</span></div>
              <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.fri")}:</span> <span>00:00 - 23:55</span></div>
              </div>
              <div className="flex flex-col">
              <h3 className="text-center py-2 font-semibold text-lg lg:text-xl">{t("contentText.forex.heading2")}</h3>
              <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.mon")}:</span> <span>00:01 - 23:59</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg"><span>{t("contentText.days.tuse")}:</span> <span>00:01 - 23:59</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.wed")}:</span> <span>00:01 - 23:59</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg"><span>{t("contentText.days.thurs")}:</span> <span>00:01 - 23:59</span></div>
              <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.fri")}:</span> <span>00:01 - 23:55</span></div>
              </div>
            </div>
            </div>
            <div className="border border-[#DDD] rounded-xl w-fit mx-auto">
            <h2 className="text-center py-4 border-b border-b-[#DDD] font-bold text-lg lg:text-2xl">{t("contentText.forex.title2")}</h2>
            <div className="flex justify-between">
              <div className="flex flex-col border-r border-r-[#DDD]">
                <h3 className="text-center py-2 font-semibold text-lg lg:text-xl">{t("contentText.forex.heading1")}</h3>
                <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.mon")}:</span> <span>01:00 - 23:55</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg"><span>{t("contentText.days.tuse")}:</span> <span>01:00 - 23:55</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.wed")}:</span> <span>01:00 - 23:55</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg"><span>{t("contentText.days.thurs")}:</span> <span>01:00 - 23:55</span></div>
              <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.fri")}:</span> <span>01:00 - 23:55</span></div>
              </div>
              <div className="flex flex-col">
              <h3 className="text-center py-2 font-semibold text-lg lg:text-xl">{t("contentText.forex.heading2")}</h3>
              <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.mon")}:</span> <span>01:01 - 23:54</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg"><span>{t("contentText.days.tuse")}:</span> <span>01:01 - 23:54</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.wed")}:</span> <span>01:01 - 23:54</span></div>
               <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg"><span>{t("contentText.days.thurs")}:</span> <span>01:01 - 23:54</span></div>
              <div className="flex justify-between gap-5 py-2 px-4 text-sm md:text-lg bg-[#F2F2F2]"><span>{t("contentText.days.fri")}:</span> <span>01:01 - 23:54</span></div>
              </div>
            </div>
            </div>
          </div>

         
          <div className="border border-[#DDD] rounded-xl mx-auto md:w-[42rem] mb-5 block overflow-x-auto w-fit">
            <h2 className="text-center py-4 border-b border-b-[#DDD] font-bold text-lg lg:text-2xl">{t("contentText.forex.title3")}</h2>
            <table className="oil_table w-full">
              <thead>
                <tr>
                  <th>{t("contentText.label.one")}</th>
                  <th>{t("contentText.label.two")}</th>
                  <th>{t("contentText.label.three")}</th>
                  <th>{t("contentText.label.four")}</th>
                  <th>{t("contentText.label.three")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-sm md:text-lg">{t("contentText.days.mon")}</td>
                  <td className="text-sm md:text-lg">01:00</td>
                  <td className="text-sm md:text-lg">24:00</td>
                  <td className="text-sm md:text-lg">-</td>
                  <td className="text-sm md:text-lg">-</td>
                </tr>
                <tr>
                  <td className="text-sm md:text-lg">{t("contentText.days.tuse")}</td>
                  <td className="text-sm md:text-lg">00:00</td>
                  <td className="text-sm md:text-lg">01:00</td>
                  <td className="text-sm md:text-lg">03:00</td>
                  <td className="text-sm md:text-lg">24:00</td>
                </tr>
                <tr>
                  <td className="text-sm md:text-lg">{t("contentText.days.wed")}</td>
                  <td className="text-sm md:text-lg">00:00</td>
                  <td className="text-sm md:text-lg">01:00</td>
                  <td className="text-sm md:text-lg">03:00</td>
                  <td className="text-sm md:text-lg">24:00</td>
                </tr>
                <tr>
                  <td className="text-sm md:text-lg">{t("contentText.days.thurs")}</td>
                  <td className="text-sm md:text-lg">00:00</td>
                  <td className="text-sm md:text-lg">01:00</td>
                  <td className="text-sm md:text-lg">03:00</td>
                  <td className="text-sm md:text-lg">24:00</td>
                </tr>
                <tr>
                  <td className="text-sm md:text-lg">{t("contentText.days.fri")}</td>
                  <td className="text-sm md:text-lg">00:00</td>
                  <td className="text-sm md:text-lg">01:00</td>
                  <td className="text-sm md:text-lg">03:00</td>
                  <td className="text-sm md:text-lg">23:55</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="HeadingH2 mt-10">{t("holiday.title")}</h2>
          <p className="text text-center mb-5 text-primary max-w-4xl mx-auto">
          {t("holiday.des")}
          </p>
         <MarketOverViewNew />

          {/* {data?.length > 0 && <SingleMainBlog posts={data?.[0] || []} />}
          <div className="h-full pt-8" id="scrollableDiv">
            <InfiniteScroll
              dataLength={data.length}
              scrollThreshold={0.7}
              next={loadMoreData}
              hasMore={hasMore}
              loader={<FallbackLoader />}
              endMessage={<p className="pt-5">No more items</p>}
            >
              <BlogList posts={data || []} index={1} />
            </InfiniteScroll>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MarketOverviewPage;
