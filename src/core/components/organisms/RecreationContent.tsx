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

  const RecreationList = [
    {
      id: 1,
      title: 'ジョンブランのおじさん',
      content: 'ジョンブランのおじさんの内容',
      image: 'https://picsum.photos/200/300',
      url: 'https://www.google.com/',
    },
    {
      id: 2,
      title: 'ジョンブランのおじさん',
      content: 'ジョンブランのおじさんの内容',
      image: 'https://picsum.photos/200/300',
      url: 'https://www.google.com/',
    },
    {
      id: 3,
      title: 'ジョンブランのおじさん',
      content: 'ジョンブランのおじさんの内容',
      image: 'https://picsum.photos/200/300',
      url: 'https://www.google.com/',
    }
  ];

  return (
    <>
      <div className="text-2xl">
        <div className='mb-2 ml-2'>
          新着情報
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 mb-4 aaaaaaaaaaa">
            {/* ここはAPIの通信で10個ほどの値を取得する */}
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
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
            <button className="bg-gray-200 hover:bg-gray-300 rounded-full w-12 h-12 opacity-60" onClick={
              function () {
                const element = document.querySelector('.aaaaaaaaaaa')
                if (element) {
                  smoothScroll(element, -400, 500) // -200px左に移動して0.5秒かけて移動する
                }
              }
            }>
              ←
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 rounded-full w-12 h-12 opacity-60" onClick={
              function () {
                const element = document.querySelector('.aaaaaaaaaaa')
                if (element) {
                  smoothScroll(element, 400, 500) // +200px左に移動して0.5秒かけて移動する
                }
              }
            }>
              →
            </button>
          </div>
        </div>
      </div>


      <div className='mb-2 ml-2'>
        新着情報
      </div>
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                レクの名前
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {RecreationList.map((recreation, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {recreation.title}
                </th>
                <td className="px-6 py-4">
                  Silver
                </td>
                <td className="px-6 py-4">
                  Laptop
                </td>
                <td className="px-6 py-4">
                  $2999
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RecreationForm;
