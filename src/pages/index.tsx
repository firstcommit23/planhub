import React, { useState } from 'react';
import { useRouter } from 'next/router';
import tw, { styled, css } from 'twin.macro';
import PlanList from '@/components/PlanList';

const Home = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>('');
  const handelSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };
  return (
    <div>
      <SearchWrap>
        <input placeholder="검색어를 입력하세요" value={searchText} onChange={handelSearchText} />
      </SearchWrap>

      <div className="block border-solid pt-6">
        <h1 className="float-left tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-4xl block text-indigo-600 xl:inline">
          플랜 목록
        </h1>
        <button
          type="button"
          className="float-right flex items-center justify-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => router.push('/plan/write')}>
          새 플랜 작성하기
        </button>
      </div>
      <PlanList />
    </div>
  );
};

const SearchWrap = styled.div`
  display: flex;
  border: 1px solid #adb5bd;
  align-items: center;
  transition: all 0.125s ease-in 0s;
  cursor: text;
  height: 4rem;
  padding: 0px 1.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    height: 2.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  input {
    font-size: 1.5rem;
    line-height: 2rem;
    height: 2rem;
    transition: all 0.125s ease-in 0s;
    flex: 1 1 0%;
    display: block;
    padding: 0px;
    border: none;
    outline: 0px;
    background: transparent;
    color: #495057;
    min-width: 0px;

    @media (max-width: 768px) {
      flex: 1 1 0%;
      font-size: 1.125rem;
      lien-height: 1.5;
      height: auto;
    }
  }
`;

export default Home;
