export default function ReviewCard({ ratingData }) {
  const { pp, rating, comment, revName } = ratingData;

  return (
    <div className="flex flex-col gap-2 border-b p-2">
      <div className="flex w-full items-start justify-start gap-2">
        <img
          src={pp}
          alt=""
          className="h-[40px] w-[40px] rounded-full object-cover"
        />
        <p className="font-semibold">{revName}</p>
        <p className="ml-auto rounded-md bg-green-800 px-2 py-1 text-yellow-300">
          {rating}⭐
        </p>
      </div>
      <p className="text-sm">{comment}</p>
    </div>
  );
}

//       rating: 1,
//       comment: "Lackluster flavors and unappealing presentatio",
//       pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
//       revName: "Kripla",
//     },
