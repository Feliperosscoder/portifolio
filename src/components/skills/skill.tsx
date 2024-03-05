type SkillProps = {
  image: string;
  text: string | null;
};

export function Skill({ image, text }: SkillProps) {
  console.log(text);
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="max-w-28 h-24  flex items-center justify-center ">
        <img src={image} alt="html5" />
      </div>
      <div className="w-full px-8 py-12  rounded-xl text-center text-black shadow-xl text-xl font-medium  border-red">
        {text}
      </div>
    </div>
  );
}
