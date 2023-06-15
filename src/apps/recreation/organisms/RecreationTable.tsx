import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { useHistory } from 'react-router-dom';
import { RecreationsResponse } from '../../../api/api.topicpost.net/recreation';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

interface RecreationTableProps {
  data?: RecreationsResponse;
  records?: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const RecreationTable: React.FC<RecreationTableProps> = ({ data, records, currentPage, setCurrentPage }) => {
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

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "n" || event.key === "N") {
        handlePageCalc(1)(event as any);
      } else if (event.key === "p" || event.key === "P") {
        handlePageCalc(-1)(event as any);
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentPage, records]);

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

  const recordsPerPage = 10; // この書き方ダサい
  const totalNumberOfPages = Math.ceil(records! / recordsPerPage);
  const pageNumbers = Array.from({ length: totalNumberOfPages }, (_, i) => i + 1);

  const handlePageClick = (pageNumber: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  const handlePageCalc = (n: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    const totalPages = Math.ceil(records! / recordsPerPage);
    if (currentPage + n < 1 || currentPage + n > totalPages) {
      return;
    }
    setCurrentPage(currentPage + n);
  }

  const formatDatetime = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hour = ("0" + d.getHours()).slice(-2);
    const minute = ("0" + d.getMinutes()).slice(-2);
    return `${year}/${month}/${day} ${hour}:${minute}`;
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
              className="mr-2"
              size={16}
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
            {data?.data.recreations.map((Recreation, key) => (
              <tr key={key} className="border-b hover:bg-gray-100">
                <th scope="row" className="px-4 py-3">
                  <Link to={`/recreation/${Recreation.recreation_id}`} className="block h-full w-full font-medium text-gray-900 whitespace-nowrap">
                    {Recreation.title}
                  </Link>
                </th>
                <td className="px-4 py-3">
                  <Link to={`/recreation/${Recreation.recreation_id}`} className="block h-full w-full">
                    {Recreation.genre && Recreation.genre.map((genre, key) => (
                      <span key={key} className={`bg-gray-200 text-blue-600 text-xs text-center px-1 inline ${key === Recreation.genre.length - 1 ? '' : 'mb-1 mr-1'} rounded`}>
                        {GetRecreationGenre(genre)}
                      </span>
                    ))}
                  </Link>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <Link to={`/recreation/${Recreation.recreation_id}`} className="block h-full w-full whitespace-nowrap">
                    {Recreation.edges.profile.nickname}
                  </Link>
                </td>
                <td className="px-4 py-3 hidden xl:table-cell">
                  <Link to={`/recreation/${Recreation.recreation_id}`} className="block h-full w-full  whitespace-nowrap">
                    {formatDatetime(Recreation.created_at)}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0 p-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500">
          Total Records {records}件
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <a
              href="/"
              onClick={handlePageCalc(-1)}
              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              <IoIosArrowBack size={16} />
            </a>
          </li>
          {pageNumbers.map(number => (
            <li key={number}>
              <a
                href="/"
                onClick={handlePageClick(number)}
                className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${currentPage === number ? 'text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}
              >
                {number}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/"
              onClick={handlePageCalc(1)}
              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              <IoIosArrowForward size={16} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
