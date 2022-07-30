import React, { useState } from 'react';

const DetailPage = () => {
  return (
    <div>
      <div className="mt-4 mx-auto w-[768px]">
        <h1 className="leading-6 text-4xl">제목제목제목</h1>
      </div>
      <div className="py-6 text-xl">
        <div>
          <PlanItem planId={2} no={1} content="항목 111111" checked={false} />
          <PlanItem planId={2} no={2} content="항목 222222" checked={false} />
          <PlanItem planId={2} no={3} content="항목 3333 !!" checked={false} />
        </div>
      </div>
      <div className="py-6 text-s">
        <div>최초입력일자 : 2022-02-23 04:11:22</div>
        <div>최종수정일자 : 2022-07-23 04:11:22</div>
      </div>
      <div>
        <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          수정
        </button>
        <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          삭제
        </button>
        <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          복사
        </button>
      </div>
    </div>
  );
};

interface IPlanItemProps {
  planId: number;
  no: number;
  content: string;
  checked: boolean;
}
const PlanItem = ({ planId, no, content, checked }: IPlanItemProps) => {
  const [check, setCheck] = useState<boolean>(checked);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck((prev) => !prev);
    console.log('api call 보내기', planId);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        id={`planItem${no}`}
        checked={check}
        onChange={handleOnChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
      />
      <label htmlFor={`planItem${no}`} className="ml-2 text-gray-900">
        {content}
      </label>
    </div>
  );
};
export default DetailPage;
