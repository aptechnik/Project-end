/**
 * @param {{colSpan?: number, imageUrl: string, text: string}} props
 */
function NewsItem(props) {
  return (
    <div
      className="flex bg-cover bg-top-left rounded-4xl h-72"
      style={{
        backgroundImage: `url('${props.imageUrl}')`,
        gridColumn: `span ${props.colSpan ?? 1} / span ${props.colSpan ?? 1}`,
      }}
    >
      <div className="flex flex-col flex-1 justify-end items-start bg-black/20 p-4 rounded-4xl text-white">
        <span className="max-w-85 font-bold text-3xl">{props.text}</span>
      </div>
    </div>
  );
}

export default NewsItem;
