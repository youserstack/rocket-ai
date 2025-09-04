"use client";

import Sajupalza from "@/components/sajupalza";
import Image from "next/image";

export default function Home() {
  return (
    <main className="my-20">
      <section className="space-y-30 /last:space-y-0">
        <h1 className="sr-only">Rocket AI 과제</h1>

        {/* 블록 컨테이너 1 */}
        <div className="relative">
          {/* 여자 배경 이미지 */}
          <div>
            <Image
              src={
                "https://res.cloudinary.com/dzktdrw7o/image/upload/v1756862526/rocket-ai/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8_%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7_udcg6s.png"
              }
              width={1000}
              height={1000}
              alt=""
            />
          </div>

          {/* 말풍선(컨테이너) */}
          <div
            className="
            absolute bottom-0 left-[10%] 
            w-[calc(215*var(--parent-scale))]
            mb-[calc(30*var(--parent-scale))]
            "
          >
            {/* 이미지 */}
            <div>
              <Image
                src={
                  "https://res.cloudinary.com/dzktdrw7o/image/upload/v1756862629/rocket-ai/Group_1410141556_jifcb8.png"
                }
                width={1000}
                height={1000}
                alt=""
              />
            </div>

            {/* 텍스트 */}
            <div
              // --scale변수에서 사용된 %는 텍스트에 적용되지 않는다. 텍스트는 vw에 반응하도록 clamp 처리
              className="text-black 
              absolute inset-0 
              flex flex-col items-center justify-center 
              text-[clamp(0rem,3.5vw,1rem)]
              pt-[calc(25*var(--parent-scale))]
              "
              // text-[clamp(0rem,var(--text-size),1rem)]
            >
              <p>이제 본격적으로</p>
              <p>OO님의 사주팔자를</p>
              <p>분석해볼 차례네요.</p>
            </div>
          </div>
        </div>

        {/* 블록 컨테이너 2 */}
        <div className="mt-30">
          <div>
            <Image
              src={
                "https://res.cloudinary.com/dzktdrw7o/image/upload/v1756863157/rocket-ai/Group_1410141673_f59thx.png"
              }
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* 블록 컨테이터 3 */}
        <div className="relative">
          {/* 말풍선(컨테이너) */}
          <div
            className="
            absolute top-0 left-[10%] 
            w-[calc(215*var(--parent-scale))]
            -translate-y-[calc(220*var(--parent-scale))]
            "
          >
            {/* 이미지 */}
            <div>
              <Image
                src={
                  "https://res.cloudinary.com/dzktdrw7o/image/upload/v1756863214/rocket-ai/Group_1410141534_k6kzhg.png"
                }
                width={1000}
                height={1000}
                alt=""
              />
            </div>

            {/* 텍스트 */}
            <div
              // --scale변수에서 사용된 %는 텍스트에 적용되지 않는다. 텍스트는 vw에 반응하도록 clamp 처리
              className="text-black 
              absolute inset-0 
              flex flex-col items-center justify-center 
              text-[clamp(0rem,3.5vw,1rem)]
              pb-[calc(25*var(--parent-scale))]
              "
              // text-[clamp(0rem,var(--text-size),1rem)]
            >
              <p>제가 oo님의 사주를</p>
              <p>보기 쉽게 표로 정리했어요</p>
            </div>
          </div>

          <div>
            <Image
              src={
                "https://res.cloudinary.com/dzktdrw7o/image/upload/v1756863151/rocket-ai/00637-3702098316_1_am9wfl.png"
              }
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="py-5"></div>
          <Sajupalza />
        </div>
      </section>
    </main>
  );
}

// # 블록 컨테이너 1
// 최상위 블록 컨테이너 -> relative 으로 기준
// 1. 여자 배경 이미지
// 이미지 -> aspect-[1/2] 로 가로세로가 부모요소에 반응
// 2. 말풍선
// 컨테이너 -> w-[calc(215*var(--parent-scale))] 으로 가로크기가 부모요소에 반응 (스케일은 %)
// 컨테이너 -> mb-[calc(30*var(--parent-scale))] 으로 위치조정하는데 부모요소에 반응
// 이미지 -> 원본 이미지 비율
// 텍스트 -> text-[clamp(8px,4vw,18px)] 으로 크기가 뷰포트에 반응
// 텍스트 -> pt-[calc(25*var(--parent-scale))] 으로 위치조정하는데 부모요소에 반응
