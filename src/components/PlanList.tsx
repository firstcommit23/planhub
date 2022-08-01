import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
// import tw, { styled, css } from 'twin.macro';

const PlanList = () => {
  const router = useRouter();
  const { status, data } = useQuery(['planList'], () =>
    axios.get('/mock/list.json').then((res) => res)
  );

  if (status === 'loading') {
    return <span>loading..</span>;
  }

  const goDetail = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.stopPropagation();
    router.push(`/plan/${id}`);
  };

  const goFork = (e: React.MouseEvent<HTMLSpanElement>, id: number) => {
    e.stopPropagation();
    router.push(`/plan/forklist?id=${id}`);
  };
  return (
    <div className="clear-both py-6">
      {data &&
        data.data.data.map((list: any) => {
          return (
            <div
              className="relative my-4 first:my-0 last:mb-0 bg-white rounded-lg shadow-lg overflow-hidden border cursor-pointer"
              onClick={(e) => goDetail(e, list.id)}
              key={list.id}>
              <div className="py-3 px-4">
                <h4 className="mt-1 text-xl font-semibold leading-tight truncate inline pr-1">
                  {list.title}
                </h4>
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline rounded-full uppercase font-semibold tracking-wide">
                  new
                </span>
              </div>
              <div className="p-4 border-t text-l text-gray-700">
                <ul className="list-disc pl-6">
                  {list.items.map((item: any) => (
                    <li key={item.no}>{item.content}</li>
                  ))}
                </ul>
                ...외 3개 항목
              </div>
              <div className="p-4 border-t text-xs text-gray-700">
                <div className="m-1">작성일자 : {list.createDte}</div>
                <div className="m-1">작성자 : 나다</div>
              </div>
              <div className="p-4 border-t border-b text-xs text-gray-700">
                <span className="font-bold" onClick={(e) => goFork(e, list.id)}>
                  {list.forkCnt} Fork
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PlanList;
