import async from 'async';

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const arr = [1, 2, 3, 4, 5];

async function run() {
  const newArr = async.mapLimit(arr, 2, async (item: number): Promise<number> => {
    console.log(item);
    await timeout(100);
    return item + item;
  });

  console.log(newArr);

  const x = await newArr;

  console.log(x);
}

run();
