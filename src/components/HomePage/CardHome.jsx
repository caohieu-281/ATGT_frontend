const CardHome: React.FC = ({ nameCamera }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://image.thanhnien.vn/w1024/Uploaded/2022/pwivoviu/2016_01_21/2_mtcp.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nameCamera}</div>
      </div>
    </div>
  );
};

export default CardHome;
