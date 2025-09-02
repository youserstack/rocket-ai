import Sajupalza from "@/components/sajupalza";

export default function Home() {
  return (
    <main>
      <section>
        <h1 className="sr-only">Rocket AI 과제</h1>

        <div className="bg-zinc-100 h-[1000px] relative ">
          {/* 타이틀 */}
          <div className="text-center  translate-y-20">
            <h1>제 1장</h1>
            <p>나의 사주팔자</p>
          </div>

          {/* 말풍선 */}
          <div
            className="w-1/2 aspect-3/2 p-4 border flex items-center justify-center rounded-[50%/50%] text-center bg-white
            absolute top-1/2 left-1/12 -translate-y-1/2"
          >
            이제 본격적으로 로켓님의 사주팔자를 분석해볼 차례네요
          </div>
        </div>

        <Sajupalza />
      </section>
    </main>
  );
}
