import { formatCurrency } from "../../utilities/formatCurrency";

type storeItemsProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: any;
};
export default function index({
  id,
  title,
  price,
  image,
  category,
  rating,
}: storeItemsProps) {
  return (
    <>
      <div className="bg-white rounded-sm hover:shadow-md flex flex-col justify-center items-center cursor-pointer group duration-300">
        {/* top image section */}
        <div>
          <div className="p-2">
            <img
              src={image}
              alt="item preview"
              className="w-auto h-52 object-contain group-hover:scale-105 duration-300"
            />
          </div>
        </div>
        {/* bottom section */}
        <div className="mt-2 p-4 ">
          {/* title */}
          <div>
            <h1 className="text-lg font-bold line-clamp-1">{title}</h1>
          </div>
          {/* category */}
          <div className="text-sm">{category}</div>
          {/* rating & price */}
          <div className="flex flex-row justify-between items-center my-2">
            <div className="flex items-center space-x-2">
              <box-icon color="#10b981" type="solid" name="star"></box-icon>
              <span>
                {rating.rate}/{rating.count}
              </span>
            </div>
            <div className="flex items-center space-x-2 font-bold">
              <span>{formatCurrency(price)}</span>
            </div>
          </div>
          {/* buttons */}
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
