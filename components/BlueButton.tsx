interface Props {
  text: string;
}

export default function BlueButton({ text }: Props) {
  return (
    <button className="w-max flex items-center justify-center transition-all py-[20px] px-[50px] border-[1px] border-bluePrimary text-bluePrimary rounded-[55px] font-bold text-[18px] leading-none hover:bg-bluePrimary hover:bg-opacity-[0.1] active:bg-opacity-[1] active:text-white active:border-white">
      {text}
    </button>
  );
}
