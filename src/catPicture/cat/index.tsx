type cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};
const Cat = ({ cat }: { cat: cat }) => {
  return (
    <div className="flex">
      <img
        className="flex w-[650px] h-[496px] rounded-xl hover:blur-sm transition duration-300"
        src={cat.url}
        alt="catimg"
      />
    </div>
  );
};

export default Cat;
