import React, { useState, useEffect } from 'react';

type ItemType = {
  no: number;
  content: string;
  checked: boolean;
  sort: number;
};

const WritePage = () => {
  const [items, setItems] = useState<ItemType[]>([{ no: 0, content: '', checked: false, sort: 0 }]);

  const getNextNo = (): number => items[items.length - 1].no + 1;

  const onAdd = () => {
    setItems([...items, { no: getNextNo(), content: '', checked: false, sort: getNextNo() }]);
  };

  const onDelete = (no: number) => {
    if (items.length <= 1) {
      alert('✨ 아이템은 하나 이상 등록하여야 합니다 ✨');
      return;
    }

    const nextItems = [...items]
      .filter((item: ItemType) => item.no !== no)
      .map((item: ItemType, index: number) => {
        return { ...item, sort: index };
      });
    setItems(nextItems);
  };
  const onUpdate = (item: ItemType) => {
    const nextItems = [...items];
    setItems(nextItems.map((mapItem: any) => (mapItem.no === item.no ? item : mapItem)));
  };
  return (
    <div>
      <input
        type="text"
        className="block mb-2 text-gray-900 text-xl focus:border-blue-500 w-full p-2.5"
        placeholder="제목을 입력해 주세요."
      />
      <br />
      {items.map((item: ItemType) => (
        <PlanItem key={item.no} item={item} onAdd={onAdd} onUpdate={onUpdate} onDelete={onDelete} />
      ))}

      <div className="fixed bottom-0 left-0 right-0 w-full h-16 z-99">
        <button className="w-full h-full bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 text-xl4 px-2 py-0.5 text-center">
          저장
        </button>
      </div>
    </div>
  );
};

interface IPlanItemProps {
  item: ItemType;
  onAdd: () => void;
  onUpdate: (item: ItemType) => void;
  onDelete: (no: number) => void;
}
const PlanItem = ({ item, onAdd, onUpdate, onDelete }: IPlanItemProps) => {
  const [input, setInput] = useState<string>(item.content);
  const [checked, setChecked] = useState<boolean>(item.checked);
  let rerenderFalg = false;

  useEffect(() => {
    rerenderFalg = true;
    setInput(item.content);
    setChecked(item.checked);
    rerenderFalg = false;
  }, [item]);

  useEffect(() => {
    if (rerenderFalg) return;
    onUpdate({ ...item, content: input, checked: checked });
  }, [input, checked]);

  const onHandleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onHandleChecked = () => {
    setChecked((prev) => !prev);
  };

  const onDeleteBefore = () => onDelete(item.no);

  return (
    <div className="flex ">
      <input
        type="checkbox"
        className="flex-none self-center items-center w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
        checked={checked}
        onChange={onHandleChecked}
      />
      <input
        type="text"
        value={input}
        className="flex-1 ml-2 gray-900 text-xl text-gray-900"
        onChange={onHandleInput}
        placeholder="아이템을 입력해 주세요."
      />
      <button
        onClick={onDeleteBefore}
        className="flex-none text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-2 py-0.5 text-center mr-2 mb-2">
        삭제
      </button>
      <button
        onClick={onAdd}
        className="flex-none text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-2 py-0.5 text-center mr-2 mb-2">
        추가
      </button>
    </div>
  );
};
export default WritePage;
