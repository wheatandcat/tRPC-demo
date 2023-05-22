import { trpc } from "./utils/trpc";
import { useState } from "react";

export default function IndexPage() {
  const [text, setText] = useState("");
  const items = trpc.items.useQuery();
  const mutation = trpc.createItem.useMutation({
    onSuccess: () => {
      items.refetch();
      setText("");
    },
  });

  const onSubmit = async () => {
    await mutation.mutate({
      name: text,
    });
  };

  return (
    <div>
      <div className="flex">
        <div>
          <input
            id="title"
            type="text"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="タイトル"
            aria-label="title"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={onSubmit}
          >
            登録
          </button>
        </div>
      </div>

      <div>
        {items.data?.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
