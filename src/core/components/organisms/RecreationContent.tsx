import React, { useState } from 'react';
import { NewCard } from "../atoms/Card";

const RecreationForm: React.FC = () => {
  const [isActionsDropdownOpen, setActionsDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setFilterDropdownOpen] = useState(false);

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

      <div className='mt-6 mb-2 ml-2 text-2xl flex justify-between'>
        一覧
        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-2 px-4 rounded'>
          レクを投稿する
        </button>
      </div>

      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                レクの名前
              </th>
              <th scope="col" className="px-6 py-3">
                ジャンル
              </th>
              <th scope="col" className="px-6 py-3">
                投稿者
              </th>
              <th scope="col" className="px-6 py-3">
                投稿日
              </th>
            </tr>
          </thead>
          <tbody>
            {RecreationList.map((recreation, index) => (
              <tr key={index} className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {recreation.title}
                </th>
                <td className="px-6 py-4">
                  アイスブレイク
                </td>
                <td className="px-6 py-4">
                  <a href="https://example.com" target='_blank' rel="noreferrer">すずりかわ@熊本</a>
                </td>
                <td className="px-6 py-4">
                  2020/12/12
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="bg-white relative sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2" placeholder="Search" required />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button type="button" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                  <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                  Add product
                </button>

                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <button
                    id="actionsDropdownButton"
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                    type="button"
                    onClick={() => setActionsDropdownOpen(!isActionsDropdownOpen)}
                  >
                    <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                    Actions
                  </button>
                  <div id="actionsDropdown" className={`${isActionsDropdownOpen ? '' : 'hidden'} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow`}>
                    <ul className="py-1 text-sm text-gray-700" aria-labelledby="actionsDropdownButton">
                      <li>
                        <a href="/" className="block py-2 px-4 hover:bg-gray-100">Mass Edit</a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Delete all</a>
                    </div>
                  </div>
                  <button
                    id="filterDropdownButton"
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                    type="button"
                    onClick={() => setFilterDropdownOpen(!isFilterDropdownOpen)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    Filter
                    <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                  <div id="filterDropdown" className={`${isFilterDropdownOpen ? '' : 'hidden'} z-10 w-48 p-3 bg-white rounded-lg shadow`}>
                    <h6 className="mb-3 text-sm font-medium text-gray-900">Choose brand</h6>
                    <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                      <li className="flex items-center">
                        <input id="apple" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
                        <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900">Apple (56)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="fitbit" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
                        <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900">Microsoft (16)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="razor" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
                        <label htmlFor="razor" className="ml-2 text-sm font-medium text-gray-900">Razor (49)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="nikon" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
                        <label htmlFor="nikon" className="ml-2 text-sm font-medium text-gray-900">Nikon (12)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="benq" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
                        <label htmlFor="benq" className="ml-2 text-sm font-medium text-gray-900">BenQ (74)</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3">Product name</th>
                    <th scope="col" className="px-4 py-3">Category</th>
                    <th scope="col" className="px-4 py-3">Brand</th>
                    <th scope="col" className="px-4 py-3">Description</th>
                    <th scope="col" className="px-4 py-3">Price</th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">Monitor BenQ EX2710Q</th>
                    <td className="px-4 py-3">TV/Monitor</td>
                    <td className="px-4 py-3">BenQ</td>
                    <td className="px-4 py-3">354</td>
                    <td className="px-4 py-3">$499</td>
                    <td className="px-4 py-3 flex items-center justify-end">
                      <button id="benq-ex2710q-dropdown-button" data-dropdown-toggle="benq-ex2710q-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>
                      <div id="benq-ex2710q-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
                        <ul className="py-1 text-sm text-gray-700" aria-labelledby="benq-ex2710q-dropdown-button">
                          <li>
                            <a href="/" className="block py-2 px-4 hover:bg-gray-100">Show</a>
                          </li>
                          <li>
                            <a href="/" className="block py-2 px-4 hover:bg-gray-100">Edit</a>
                          </li>
                        </ul>
                        <div className="py-1">
                          <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
              <span className="text-sm font-normal text-gray-500">
                Showing
                <span className="font-semibold text-gray-900">1-10</span>
                of
                <span className="font-semibold text-gray-900">1000</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a href="/" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    <span className="sr-only">Previous</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                </li>
                <li>
                  <a href="/" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                </li>
                <li>
                  <a href="/" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700">3</a>
                </li>
                <li>
                  <a href="/" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">...</a>
                </li>
                <li>
                  <a href="/" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">100</a>
                </li>
                <li>
                  <a href="/" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    <span className="sr-only">Next</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecreationForm;
