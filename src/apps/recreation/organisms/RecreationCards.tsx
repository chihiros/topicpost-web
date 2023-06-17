import React from "react";
import { Card } from "../../../core/components/atoms/Card";
import { RecreationsResponse } from "../../../api/api.topicpost.net/recreation";

interface RecreationCardProps {
  data?: RecreationsResponse;
  className?: string;
}

export const RecreationCards: React.FC<RecreationCardProps> = ({ data, className }) => {
  function smoothScroll(element: Element, distance: number, duration: number) {
    const start = element.scrollLeft
    const startTime = performance.now()

    function animate(currentTime: number) {
      const elapsedTime = currentTime - startTime
      const scroll = easeInOutQuad(elapsedTime, start, distance, duration)
      element.scrollLeft = scroll
      if (elapsedTime < duration) {
        requestAnimationFrame(animate)
      }
    }

    function easeInOutQuad(t: number, b: number, c: number, d: number) {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animate)
  }

  return (
    // <div className="relative">
    <div className={`relative ` + className}>
      <div className="flex overflow-x-auto gap-4 mb-4 aaaaaaaaaaa">
        {/* ここはAPIの通信で10個ほどの値を取得する */}
        {data?.data.recreations.map((recreation) => {
          return (
            <Card
              key={recreation.id}
              title={recreation.title}
              date={recreation.created_at}
              content={recreation.content}
              recreationId={recreation.recreation_id}
              data={recreation}
            />
          );
        })}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
        <button className="bg-gray-200 hover:bg-gray-300 rounded-full w-12 h-12 opacity-20 hover:opacity-50" onClick={
          function () {
            const element = document.querySelector('.aaaaaaaaaaa')
            if (element) {
              smoothScroll(element, -400, 500) // -400px左に移動して0.5秒かけて移動する
            }
          }
        }>
          ←
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-full w-12 h-12 opacity-20 hover:opacity-50" onClick={
          function () {
            const element = document.querySelector('.aaaaaaaaaaa')
            if (element) {
              smoothScroll(element, 400, 500) // +400px左に移動して0.5秒かけて移動する
            }
          }
        }>
          →
        </button>
      </div>
    </div>
  );
}
