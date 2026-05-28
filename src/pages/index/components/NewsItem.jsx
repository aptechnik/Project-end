/**
 * @param {{colSpan?: number, imageUrl: string, text: string}} props
 */
function NewsItem(props) {
  return (
    <div
      className="flex bg-cover bg-top-left rounded-2xl sm:rounded-3xl lg:rounded-4xl h-48 sm:h-56 md:h-64 lg:h-72"
      style={{
        backgroundImage: `url('${props.imageUrl}')`,
      }}
    >
      <div className="flex flex-col flex-1 justify-end items-start bg-black/20 p-3 sm:p-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl text-white">
        <span className="max-w-full lg:max-w-85 font-bold text-lg sm:text-xl lg:text-3xl">{props.text}</span>
      </div>
    </div>
  );
}

export default NewsItem;
