"use client";

import Image from "next/image";

export default function Sajupalza() {
  // 테이블 컬럼
  const columns = [
    { han: "時", kor: "시" },
    { han: "日", kor: "일" },
    { han: "月", kor: "월" },
    { han: "年", kor: "년" },
  ];

  // 테이블 행
  const rows = [
    {
      title: { han: "十星", kor: "십성" },
      data: [
        { han: "傷官", kor: "상관" },
        { han: "比肩", kor: "비견" },
        { han: "傷官", kor: "상관" },
        { han: "傷官", kor: "상관" },
      ],
    },
    {
      title: { han: "天干", kor: "천간" },
      data: [
        { han: "甲", kor: "갑" },
        { han: "乙", kor: "을" },
        { han: "丙", kor: "병" },
        { han: "丁", kor: "정" },
      ],
    },
    {
      title: { han: "地支", kor: "지지" },
      data: [
        { han: "子", kor: "자" },
        { han: "丑", kor: "축" },
        { han: "寅", kor: "인" },
        { han: "卯", kor: "묘" },
      ],
    },
    {
      title: { han: "十二運星", kor: "십이운성" },
      data: [
        { han: "長生", kor: "장생" },
        { han: "沐浴", kor: "목욕" },
        { han: "冠帶", kor: "관대" },
        { han: "建祿", kor: "건록" },
      ],
    },
    {
      title: { han: "十二神煞", kor: "십이신살" },
      data: [
        { han: "天殺", kor: "천살" },
        { han: "鬼殺", kor: "귀살" },
        { han: "華殺", kor: "화살" },
        { han: "災殺", kor: "재살" },
      ],
    },
    {
      title: { han: "貴人", kor: "귀인" },
      data: [
        { han: "太乙", kor: "태인" },
        { han: "月德", kor: "월덕" },
        { han: "天德", kor: "천덕" },
        { han: "人德", kor: "인덕" },
      ],
    },
  ];

  return (
    <div className="relative -translate-y-5">
      <div className="absolute inset-0 z-[-1] ">
        <Image
          src={
            "https://res.cloudinary.com/dzktdrw7o/image/upload/v1756863875/rocket-ai/Frame_1410141530_zxfsjs.png"
          }
          alt=""
          width={1000}
          height={1000}
        />
      </div>

      <table className="w-[80%] mx-auto translate-y-[calc(170*var(--parent-scale))]">
        <thead>
          <tr>
            <th></th>
            {columns.map((col, i) => (
              <th key={i}>
                {col.han}
                <br />({col.kor})
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <th>
                {row.title.han}
                <br />({row.title.kor})
              </th>
              {row.data.map((cell, j) => (
                <td key={j}>
                  <div
                    className={
                      row.title.han === "天干" || row.title.han === "地支"
                        ? "bg-gray-100 rounded-lg" // 천간, 지지 행 데이터 배경색
                        : ""
                    }
                  >
                    {cell.han}
                    <br />({cell.kor})
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
