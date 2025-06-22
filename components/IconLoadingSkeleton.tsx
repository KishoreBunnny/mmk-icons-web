export default function IconLoadingSkeleton() {
  return (
    <>
      {[...Array(25)].map((_, index) => (
        <div
          key={index}
          className="flex cursor-pointer w-[20%] min-h-[5rem] lg:w-1/6 flex-col gap-2 justify-center rounded-lg items-center bg-neutral-200/70 dark:bg-neutral-800/70 px-0.5 py-3"
        >
          <div className="animate-pulse min-h-[80%] min-w-[85%] rounded-lg bg-neutral-700" />
          <div className="animate-pulse font-semibold min-w-[80%] rounded-md mb-0.5 min-h-[30%] bg-neutral-700" />
        </div>
      ))}
    </>
  );
}
