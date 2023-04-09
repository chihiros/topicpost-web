import React from 'react';
import { NewCard } from "../atoms/Card";

const RecreationForm: React.FC = () => {
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
    <div className="text-2xl">
      <div className='mb-2 ml-2'>
        新着情報
      </div>
      <div className="flex overflow-x-auto gap-4 mb-4 aaaaaaaaaaa">
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />

      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4" onClick={
          function () {
            const element = document.querySelector('.aaaaaaaaaaa')
            if (element) {
              smoothScroll(element, -400, 500) // -400px左に移動して0.5秒かけて移動する
            }
          }
        }>
          ←
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4" onClick={
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

    </div>
  );
}

export default RecreationForm;
