import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { useHistory } from 'react-router-dom';
import Recreation, { RecreationsResponse } from '../../../api/api.topicpost.net/recreation';

export const RecreationTable: React.FC = () => {
  const [isFilterDropdownOpen, setFilterDropdownOpen] = useState(false);

  const actionsDropdownRef = useRef<HTMLDivElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  const history = useHistory();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target as Node)) {
        setFilterDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [actionsDropdownRef, filterDropdownRef]);

  const [recreations, setRecreations] = useState<RecreationsResponse>();
  const [recreation_records, setRecreationRecords] = useState(0);
  useEffect(() => {
    const recreation = new Recreation();
    recreation.get().then((response: RecreationsResponse) => {
      console.log(response);
      setRecreations(response);
      setRecreationRecords(response.data.total_records);
    }).catch((error) => {
      console.log(error);
    });
  }, [])

  const GetRecreationGenre = (id: number): string => {
    switch (id) {
      case 1:
        return "アイスブレイク"
      case 2:
        return "手遊びレク"
      case 3:
        return "少人数レク"
      case 4:
        return "グループレク"
      case 5:
        return "静かにするレク"
      case 6:
        return "レクダン"
    }
    return ""
  }

  return (
    <div className="bg-white relative rounded-lg overflow-hidden">
      {/* Table 検索タブ */}
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-4 p-4">
        {/* Search Input */}
        <div className="w-full sm:w-1/2">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full mr-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineSearch
                  className="w-5 h-5 text-gray-500"
                />
              </div>
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2" placeholder="Search" required />
            </div>

            {/* Filterボタン */}
            <div className="relative inline-block text-left">
              <button
                id="filterDropdownButton"
                className="w-full sm:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                type="button"
                onClick={() => setFilterDropdownOpen(!isFilterDropdownOpen)}
              >
                <BsFilter
                  className="w-5 h-5 mr-2"
                />
                Filter
                <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              <div
                ref={filterDropdownRef}
                id="filterDropdown"
                className={`${isFilterDropdownOpen ? '' : 'hidden'} absolute z-50 w-48 -right-2 p-3 top-full bg-white rounded-lg shadow`}
              >
                <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                  <li className="flex items-center">
                    <label className="text-sm font-medium text-gray-900">選択をすべて外す</label>
                  </li>
                  <li className="flex items-center">
                    <input id="RecIceBreak" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
                    <label htmlFor="RecIceBreak" className="ml-2 text-sm font-medium text-gray-900">アイスブレイク (0)</label>
                  </li>
                  <li className="flex items-center">
                    <input id="RecFinger" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
                    <label htmlFor="RecFinger" className="ml-2 text-sm font-medium text-gray-900">手遊び レク (16)</label>
                  </li>
                  <li className="flex items-center">
                    <input id="RecSmallGroup" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
                    <label htmlFor="RecSmallGroup" className="ml-2 text-sm font-medium text-gray-900">少人数 レク (49)</label>
                  </li>
                  <li className="flex items-center">
                    <input id="RecGroup" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
                    <label htmlFor="RecGroup" className="ml-2 text-sm font-medium text-gray-900">グループ レク (12)</label>
                  </li>
                  <li className="flex items-center">
                    <input id="RecDan" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
                    <label htmlFor="RecDan" className="ml-2 text-sm font-medium text-gray-900">レクダン (74)</label>
                  </li>
                  <li className="flex items-center">
                    <input id="RecOther" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
                    <label htmlFor="RecOther" className="ml-2 text-sm font-medium text-gray-900">その他のレク (74)</label>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-stretch sm:items-center justify-end sm:space-x-3 flex-shrink-0">
          {/* レクを投稿する ボタン */}
          <button
            type="button"
            onClick={() => history.push('/recreation/register')}
            className="w-full sm:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium bg-blue-500 hover:bg-blue-700 text-white focus:outline-none rounded-lg hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            <AiOutlinePlus
              className="w-4 h-4 mr-2"
            />
            レクを投稿する
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3">レク名</th>
              <th scope="col" className="px-4 py-3">ジャンル</th>
              <th scope="col" className="px-4 py-3 hidden sm:table-cell">投稿者</th>
              <th scope="col" className="px-4 py-3 hidden xl:table-cell">投稿日</th>
            </tr>
          </thead>
          <tbody>
            {recreations?.data.recreations.map((Recreation, key) => (
              <tr
                key={key}
                className="border-b"
              >
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{Recreation.title}</th>
                <td className="px-4 py-3">
                  {Recreation.genre.map((genre, key) => (
                    <pre key={key} className={`bg-gray-200 text-blue-600 text-xs text-center px-1 ${key === Recreation.genre.length - 1 ? 'mb-0' : 'mb-1'} rounded`}>
                      {GetRecreationGenre(genre)}
                    </pre>
                  ))}
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">すずりかわ@熊本</td>
                <td className="px-4 py-3 hidden xl:table-cell">{Recreation.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0 p-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500">
          Showing
          <span className="font-semibold text-gray-900">1-10</span>
          of
          <span className="font-semibold text-gray-900">{recreation_records}</span>
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
            <a href="/" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700">3</a>
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
  );
}
